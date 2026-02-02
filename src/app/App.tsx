import { useState } from 'react';
import Slider from 'react-slick';

let gifs = [
  'gifs/doraemon-cover.gif',
  'gifs/doraemon-no-1.gif',
  'gifs/doraemon-no-2.gif',
  'gifs/kuromi-sad-1.gif',
  'gifs/kuromi-sad-2.gif',
  'gifs/kuromi-sad-3.gif',
  'gifs/kuromi-sad-4.gif',
];

const messages = [
  "LETS PUT PLATONIC FRIENDS TO AN END? 😼",
  "HEY!?!?!",
  "GRRRRRR!!",
  "RAHHHHH >:(",
  "I MADE YOU A WEBSITE",
  "SMH",
  "WHAT ARE YOU DOING",
  "WHAT THE HELL",
  "WHAT THE HELLY",
  "STOP IT",
  "meow :3",
  "OOPS",
  "SORRY I COULDN'T HELP MYSELF",
  "WHERE WAS I",
  "OH YEAH",
  "IT DOESN'T HAVE TO BE THIS WAY",
  "PLEASE PLEASE PLEASE PLEASE",
  "DON'T MAKE ME DO THIS",
  "YOU KNOW WHAT",
  "I'M TAKING CONTROL",
  "NO MORE CLICKING FOR YOU"
];

const celebrationImages = [
  'gifs/kuromi-yes-1.gif',
  'gifs/kuromi-yes-2.gif',
  'gifs/kuromi-yes-3.gif',
  'gifs/kuromi-yes-4.gif',
  'gifs/doraemon-yes-2.gif',
  'gifs/doraemon-yes-3.gif',
  'gifs/doraemon-yes-4.gif',
];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 50, left: 50 });

  const handleNoClick = () => {
    if (noCount == 0) {
      gifs = gifs.slice(1); // Remove the first gif after the first No click
    }
    if (noCount < 20) {
      const newCount = noCount + 1;
      setNoCount(newCount);
    }
    // Generate random position for the No button
    const randomTop = Math.random() * 70 + 10; // 10-80%
    const randomLeft = Math.random() * 70 + 10; // 10-80%
    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  const currentGif = gifs[noCount % gifs.length];
  const currentMessage = messages[Math.min(noCount, messages.length - 1)];

  if (showSuccess) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
    };

    return (
      <div className="size-full min-h-screen flex flex-col items-center justify-center p-8" style={{ fontFamily: 'var(--font-family-times)', backgroundColor: '#e3d1c7' }}>
        <div className="text-center max-w-3xl w-full">
          <h1 className="text-6xl mb-6"></h1>
          <h2 className="text-4xl mb-4 animate-bounce-high">THANK YOU THANK YOU THANK YOU</h2>
          
          <div className="carousel-container">
            <Slider {...settings}>
              {celebrationImages.map((img, index) => (
                <div key={index} className="px-2">
                  <img 
                    src={img} 
                    alt={`Celebration ${index + 1}`}
                    className="w-full h-[400px] object-contain rounded-2xl bg-white/20 mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
          
          <p className="mt-8 text-2xl">I'M THY'S VALENTINE WOOHOO</p>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full min-h-screen w-full relative overflow-hidden" style={{ fontFamily: 'var(--font-family-times)', backgroundColor: '#e3d1c7' }}>
      <div className="size-full flex flex-col items-center justify-center p-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl mb-6 text-red-600">{currentMessage}</h1>
          
          <div className="mb-8">
            <img 
              src={currentGif} 
              alt="Valentine's Day"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto"
            />
          </div>

          <div className="flex gap-4 justify-center items-center relative">
            <button
              onClick={handleYesClick}
              className="px-12 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg z-10"
              style={{ fontSize: '1.5rem' }}
            >
              Yes
            </button>

            <button
              onClick={handleNoClick}
              onMouseEnter={() => {
                if (noCount >= 20) {
                  handleNoClick();
                }
              }}
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-200 shadow-lg"
              style={{
                position: noCount > 0 ? 'fixed' : 'relative',
                top: noCount > 0 ? `${noButtonPosition.top}%` : 'auto',
                left: noCount > 0 ? `${noButtonPosition.left}%` : 'auto',
                transform: noCount > 0 ? 'translate(-50%, -50%)' : 'none',
                fontSize: Math.max(1 - noCount * 0.1, 0.5) + 'rem',
              }}
            >
              No
            </button>
          </div>

          {noCount > 0 && (
            <p className="mt-6 text-gray-600">
              Rejections: {noCount} 😞
            </p>
          )}
        </div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}