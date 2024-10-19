import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebaseconfig';

const Roadmap = () => {
  const [roadmapData, setRoadmapData] = useState(null);

  useEffect(() => {
    const roadmapsRef = ref(db, 'roadmaps');

    // Fetch the latest roadmap from Firebase
    onValue(roadmapsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert the data into an array and fetch the latest roadmap
        const roadmapArray = Object.values(data);
        const latestRoadmap = roadmapArray[roadmapArray.length - 1];
        setRoadmapData(latestRoadmap);
      } else {
        console.log("No data available");
      }
    });
  }, []);

  // If roadmapData is still loading, show a loading message
  if (!roadmapData) {
    return <div className='text-center mt-10 font-semibold text-2xl'>Loading Roadmap...</div>;
  }

  // Generate the circles from the fetched data
  const circles = [
    { text: roadmapData.field1, duration: roadmapData.duration1, color: 'bg-red-500' },
    { text: roadmapData.field2, duration: roadmapData.duration2, color: 'bg-yellow-500' },
    { text: roadmapData.field3, duration: roadmapData.duration3, color: 'bg-orange-500' },
    { text: roadmapData.field4, duration: roadmapData.duration4, color: 'bg-gray-700' },
    { text: roadmapData.field5, duration: roadmapData.duration5, color: 'bg-orange-700' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-600">
      <div className="flex flex-row items-center gap-16">
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center ${
              index % 2 === 0 ? 'mt-10 ' : 'mb-10 '
            }`}
          >
            {index > 0 && (
              <div
                className="absolute w-28 h-1 bg-white z-20"
                style={{
                  top: '50%',
                  left: '-5rem',
                  transform: `rotate(${index % 2 === 0 ? '45deg' : '-45deg'})`,
                }}
              />
            )}
            <div
              className={`${circle.color} text-white flex items-center justify-center rounded-full w-32 h-32 shadow-lg z-50`}
            >
              <p className="text-center text-sm font-bold">
                {circle.text}<br />{circle.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
