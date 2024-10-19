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
    <div className="flex flex-wrap justify-center gap-10">
      {circles.map((circle, index) => (
        <div key={index} className="relative flex flex-col items-center">
          {/* Connecting lines */}
          {index > 0 && (
            <div
              className="absolute w-20 h-1 bg-white z-20"
              style={{ top: '50%', left: '-5rem', transform: `rotate(${index % 2 !== 0 ? '45deg' : '-45deg'})` }}
            />
          )}
          {/* Wrapper to handle margins */}
          <div className="my-4">
            {/* Circle */}
            <div
              className={`${circle.color} text-white flex items-center justify-center rounded-full w-32 h-32 shadow-lg z-50`}
            >
              <p className="text-center text-sm font-bold">{circle.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Roadmap;
