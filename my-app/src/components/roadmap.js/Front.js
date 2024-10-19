// import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";

// function Front() {
//   const containerStyle = {
//     textAlign: "center",
//     padding: "20px",
//     fontFamily: "Josefin sans",
//     backgroundColor: "#f0f0f0",
//     margin: 0,
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "90px",
//     padding: "100px",
//   };

//   const responsiveGridStyle = {
//     '@media (maxWidth: "768px")': {
//       gridTemplateColumns: "repeat(2, 1fr)",
//     },
//     '@media (maxWidth: "480px")': {
//       gridTemplateColumns: "1fr",
//     },
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Typing Animation Component */}
//       <TypingAnimation />

//       <div style={{ ...gridStyle, ...responsiveGridStyle }}>
//         <RoadmapBox
//           title="HTML"
//           items={["Semantic HTML", "Forms and Input Elements", "HTML5 Features"]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="CSS"
//           items={[
//             "CSS Selectors and Properties",
//             "Layout (Flexbox and Grid)",
//             "Responsive Web Design",
//             "CSS Preprocessors (Sass)",
//             "CSS Frameworks (Bootstrap)",
//           ]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="JavaScript"
//           items={[
//             "Syntax and Variables",
//             "ES6+ Features",
//             "DOM Manipulation",
//             "Asynchronous Programming",
//             "Events and Event Handling",
//             "Fetch API and AJAX",
//           ]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="Version Control"
//           items={["Basic Git Commands", "Branching and Merging"]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="Package Managers"
//           items={["NPM", "YARN"]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="Build Tools"
//           items={["Webpack", "Babel", "Task Runners (Gulp)"]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="Frontend Frameworks"
//           items={["React.js", "Vue.js", "Angular", "Component-Based Development"]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="Web Performance"
//           items={[
//             "Page Speed and Loading Times",
//             "Code Splitting",
//             "Lazy Loading",
//             "Minification and Compression",
//             "Image Optimization",
//           ]}
//           bgColor="#a0522d"
//         />

//         <RoadmapBox
//           title="APIs and AJAX"
//           items={["Fetching Data (REST, GraphQL)", "Authentication"]}
//           bgColor="#a0522d"
//         />
//       </div>
//     </div>
//   );
// }

// // Roadmap Box Component
// function RoadmapBox({ title, items, bgColor }) {
//   const boxStyle = {
//     padding: "20px",
//     borderRadius: "8px",
//     color: "white",
//     textAlign: "left",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     backgroundColor: bgColor,
//   };

//   const ulStyle = {
//     listStyleType: "none",
//     paddingLeft: 0,
//   };

//   const liStyle = {
//     marginBottom: "8px",
//     fontSize: "1rem",
//   };

//   return (
//     <div style={boxStyle}>
//       <h2>{title}</h2>
//       <ul style={ulStyle}>
//         {items.map((item, index) => (
//           <li key={index} style={liStyle}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // Typing Animation Component using Typed.js
// function TypingAnimation() {
//   const typedElement = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typedElement.current, {
//       strings: [
//         "Welcome to the Frontend Development Roadmap",
//         "Learn HTML, CSS, JavaScript, and More!",
//         "Happy Coding!",
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       loop: true,
//     });

//     // Clean up Typed.js instance on unmount
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
//       <span ref={typedElement}></span>
//     </h1>
//   );
// }

// export default Front;






// import React from 'react';

// const Roadmap = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="flex items-center">
//         {/* Rounded Rectangle Box 1 */}
//         <div className="bg-green-500 text-white text-xl px-6 py-4 rounded-full text-center">
//           HTML
//         </div>
//         {/* Line with Arrow (SVG) */}
//         <svg className="mx-4" width="100" height="50">
//           <line
//             x1="0"
//             y1="25"
//             x2="100"
//             y2="25"
//             stroke="black"
//             strokeWidth="2"
//             markerEnd="url(#arrowhead)"
//           />
//         </svg>
//         {/* Rounded Rectangle Box 2 */}
//         <div className="bg-green-500 text-white text-xl px-6 py-4 rounded-full text-center">
//           CSS
//         </div>
//       </div>

//       {/* SVG Arrow Definition */}
//       <svg style={{ position: 'absolute' }} height="0" width="0">
//         <defs>
//           <marker
//             id="arrowhead"
//             markerWidth="10"
//             markerHeight="7"
//             refX="10"
//             refY="3.5"
//             orient="auto"
//           >
//             <polygon points="0 0, 10 3.5, 0 7" />
//           </marker>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// export default Roadmap;
