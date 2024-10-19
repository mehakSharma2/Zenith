import React from 'react';

const circles = [
  { text: 'FUNDAMENTALS', color: 'bg-red-500' },
  { text: 'BACK-END DEVELOPMENT', color: 'bg-yellow-500' },
  { text: 'FRONT-END DEVELOPMENT', color: 'bg-orange-500' },
  { text: 'DEVOPS', color: 'bg-gray-700' },
  { text: 'PROJECT WORK', color: 'bg-orange-700' },
  { text: 'CONTINUE LEARNING', color: 'bg-yellow-600' },
];

const Roadmap = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-800">
    <div className="flex flex-row items-center gap-16">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center ${
            index % 2 === 0 ? 'mt-10 ' : 'mb-10 '
          }`} // Alternates the position of the circles (above or below the center line)
        >
          {/* Connecting lines */}
          {index > 0 && (
            <div
              className="absolute w-28 h-1 bg-white z-20"
              style={{
                top: '50%',
                left: '-5rem', // Aligns line to connect circles
                transform: `rotate(${index % 2 === 0 ? '45deg' : '-45deg'})`, // Alternates rotation for zigzag effect
              }}
            />
          )}
          {/* Circle */}
          <div
            className={`${circle.color} text-white flex items-center justify-center rounded-full w-32 h-32 shadow-lg z-50`}
          >
            <p className="text-center text-sm font-bold">{circle.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Roadmap;
