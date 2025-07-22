// // src/App.js
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Table from "./assets/models/table";

// export default function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas shadows camera={{ position: [6, 6, 6], fov: 60 }}>
//         {/* Lights */}
//         {/* <ambientLight intensity={0.5} /> */}
//         <directionalLight
//           position={[1, 1, 1]}
//           intensity={2}
//           castShadow
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//         />

//         {/* Camera Controls */}
//         <OrbitControls />

//         {/* 3D Model */}
//         <Suspense fallback={<span>Loading Sala Model=..</span>}>
//           <Table/>
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// }
// src/App.js

// import React, { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Table from "./assets/models/table";
// import { ChromePicker } from "react-color";

// export default function App() {
//   const [chairColor, setChairColor] = useState("#c0c0c0");
//   const [tableColor, setTableColor] = useState("#a0522d");
//   const [buffetCount, setBuffetCount] = useState(0);

//   const sendDataToReactNative = () => {
//     const data = {
//       type: 'user_info',
//       payload: {
//         name: 'Areez',
//         email: 'areez@example.com',
//       },
//     };

//     if (window.ReactNativeWebView) {
//       window.ReactNativeWebView.postMessage(JSON.stringify(data));
//     } else {
//       console.log('Not running in WebView');
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "80vw", height: "100vh" }}>
//         <Canvas shadows camera={{ position: [6, 6, 6], fov: 60 }}>
//           <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
//           <OrbitControls />
//           <Suspense>
//             <Table
//               chairColor={chairColor}
//               tableColor={tableColor}
//               buffetCount={buffetCount}
//             />
//           </Suspense>
//         </Canvas>
//       </div>

//       <div style={{ width: "20vw", padding: 20, backgroundColor: "#0000" }}>
//         <h4>Chair Color</h4>
//         <ChromePicker color={chairColor} onChange={(color) => setChairColor(color.hex)} />

//         <h4 style={{ marginTop: 20 }}>Table Color</h4>
//         <ChromePicker color={tableColor} onChange={(color) => setTableColor(color.hex)} />

//         <h4 style={{ marginTop: 20 }}>Buffet Count</h4>
//         <input
//           type="number"
//           min="0"
//           max="3"
//           value={buffetCount}
//           onChange={(e) => setBuffetCount(Math.min(3, parseInt(e.target.value) || 0))}
//         />
//       </div>
//     </div>
//   );
// }

// best version
// import React, { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Table from "./assets/models/table";
// import Buffet from "./assets/models/Buffet";
// import { ChromePicker } from "react-color";

// export default function App() {
//   const [chairColor, setChairColor] = useState("#c0c0c0");
//   const [tableColor, setTableColor] = useState("#a0522d");
//   const [columnCount, setColumnCount] = useState(4); // number of columns
//   const [rowCount, setRowCount] = useState(2);       // number of row groups (each group has 5 items)

//   const spacingX = 15; // space between columns
//   const spacingZ = 8;  // space between rows in a column

//   return (
//     <div style={{ display: "flex" }}>
//       {/* 3D Scene */}
//       <div style={{ width: "80vw", height: "100vh" }}>
//         <Canvas shadows camera={{ position: [40, 40, 40], fov: 60 }}>
//           <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
//           <ambientLight intensity={0.5} />
//           <OrbitControls />
//           <Suspense fallback={null}>
//             {Array.from({ length: columnCount }).flatMap((_, colIndex) => {
//               const baseX = colIndex * spacingX;

//               return Array.from({ length: rowCount }).flatMap((_, rowGroupIndex) => {
//                 const baseZ = rowGroupIndex * spacingZ * 5;

//                 return [
//                   <Table
//                     key={`table-top1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ]}
//                   />,
//                   <Table
//                     key={`table-top2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ]}
//                   />,
//                   <Buffet
//                     key={`buffet-${colIndex}-${rowGroupIndex}`}
//                     position={[baseX, 0, baseZ + spacingZ * 2]}
//                   />,
//                   <Table
//                     key={`table-bottom1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 3]}
//                   />,
//                   <Table
//                     key={`table-bottom2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 4]}
//                   />
//                 ];
//               });
//             })}
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Control Panel */}
//       <div style={{ width: "20vw", padding: 20 }}>
//         <h4>Chair Color</h4>
//         <ChromePicker
//           color={chairColor}
//           onChange={(color) => setChairColor(color.hex)}
//         />

//         <h4 style={{ marginTop: 20 }}>Table Color</h4>
//         <ChromePicker
//           color={tableColor}
//           onChange={(color) => setTableColor(color.hex)}
//         />

//         <h4 style={{ marginTop: 20 }}>Column Count</h4>
//         <input
//           type="number"
//           min="1"
//           max="10"
//           value={columnCount}
//           onChange={(e) =>
//             setColumnCount(Math.max(1, parseInt(e.target.value) || 1))
//           }
//         />

//         <h4 style={{ marginTop: 20 }}>Row Groups</h4>
//         <input
//           type="number"
//           min="1"
//           max="10"
//           value={rowCount}
//           onChange={(e) =>
//             setRowCount(Math.max(1, parseInt(e.target.value) || 1))
//           }
//         />
//         <p style={{ fontSize: 12, color: "#888" }}>Each row group = 2 tables + buffet + 2 tables</p>
//       </div>
//     </div>
//   );
// }


// best version with floor and walls
// import React, { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Table from "./assets/models/table";
// import Buffet from "./assets/models/Buffet";
// import { ChromePicker } from "react-color";

// export default function App() {
//   const roomWidth = 150;
//   const roomDepth = 220;  // increased for more rows
//   const wallHeight = 20;

//   const spacingX = 20;
//   const spacingZ = 10;

//   const maxColumns = Math.floor(roomWidth / spacingX);
//   const maxRowGroups = Math.floor(roomDepth / (spacingZ * 5));

//   const [chairColor, setChairColor] = useState("#c0c0c0");
//   const [tableColor, setTableColor] = useState("#a0522d");
//   const [columnCount, setColumnCount] = useState(6);
//   const [rowCount, setRowCount] = useState(4); // default 4 rows

//   const columns = Math.min(columnCount, maxColumns);
//   const rows = Math.min(rowCount, maxRowGroups);

//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "80vw", height: "100vh" }}>
//         <Canvas shadows camera={{ position: [80, 100, 120], fov: 60 }}>
//           <directionalLight position={[30, 80, 30]} intensity={1.8} castShadow />
//           <ambientLight intensity={0.3} />
//           <OrbitControls />

//           <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//             <planeGeometry args={[roomWidth, roomDepth]} />
//             <meshStandardMaterial color="#8B4513" />
//           </mesh>

//           {/* Walls */}
//           <mesh receiveShadow position={[0, wallHeight / 2, -roomDepth / 2]}>
//             <planeGeometry args={[roomWidth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>
//           <mesh receiveShadow rotation={[0, Math.PI / 2, 0]} position={[-roomWidth / 2, wallHeight / 2, 0]}>
//             <planeGeometry args={[roomDepth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>
//           <mesh receiveShadow rotation={[0, -Math.PI / 2, 0]} position={[roomWidth / 2, wallHeight / 2, 0]}>
//             <planeGeometry args={[roomDepth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>

//           <Suspense fallback={null}>
//             {Array.from({ length: columns }).flatMap((_, colIndex) => {
//               const totalWidth = (columns - 1) * spacingX;
//               const baseX = -totalWidth / 2 + colIndex * spacingX;

//               return Array.from({ length: rows }).flatMap((_, rowGroupIndex) => {
//                 const totalDepth = (rows - 1) * spacingZ * 5;
//                 const baseZ = -totalDepth / 2 + rowGroupIndex * spacingZ * 5;

//                 return [
//                   <Table
//                     key={`table-top1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ]}
//                   />,
//                   <Table
//                     key={`table-top2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ]}
//                   />,
//                   <Buffet
//                     key={`buffet-${colIndex}-${rowGroupIndex}`}
//                     position={[baseX, 0, baseZ + spacingZ * 2]}
//                   />,
//                   <Table
//                     key={`table-bottom1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 3]}
//                   />,
//                   <Table
//                     key={`table-bottom2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 4]}
//                   />
//                 ];
//               });
//             })}
//           </Suspense>
//         </Canvas>
//       </div>

//       <div style={{ width: "20vw", padding: 20 }}>
//         <h4>Chair Color</h4>
//         <ChromePicker
//           color={chairColor}
//           onChange={(color) => setChairColor(color.hex)}
//         />

//         <h4 style={{ marginTop: 20 }}>Table Color</h4>
//         <ChromePicker
//           color={tableColor}
//           onChange={(color) => setTableColor(color.hex)}
//         />

//         <h4 style={{ marginTop: 20 }}>Column Count (max {maxColumns})</h4>
//         <input
//           type="number"
//           min="1"
//           max={maxColumns}
//           value={columns}
//           onChange={(e) =>
//             setColumnCount(
//               Math.min(maxColumns, Math.max(1, parseInt(e.target.value) || 1))
//             )
//           }
//         />

//         <h4 style={{ marginTop: 20 }}>Row Groups (max {maxRowGroups})</h4>
//         <input
//           type="number"
//           min="1"
//           max={maxRowGroups}
//           value={rows}
//           onChange={(e) =>
//             setRowCount(
//               Math.min(maxRowGroups, Math.max(1, parseInt(e.target.value) || 1))
//             )
//           }
//         />
//         <p style={{ fontSize: 12, color: "#888" }}>
//           Each row group = 2 tables + buffet + 2 tables
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { Suspense, useState, useMemo, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
// import Table from "./assets/models/table";
// import Buffet from "./assets/models/Buffet";
// import { ChromePicker } from "react-color";

// function WoodFloor({ width, depth }) {
//   // Procedural wood texture with canvas
//   const woodTexture = useMemo(() => {
//     const size = 512;
//     const canvas = document.createElement("canvas");
//     canvas.width = size;
//     canvas.height = size;
//     const ctx = canvas.getContext("2d");

//     // Base wood color
//     ctx.fillStyle = "#8B5E3C";
//     ctx.fillRect(0, 0, size, size);

//     // Draw diagonal wood grain lines
//     ctx.strokeStyle = "#6F4E2A";
//     ctx.lineWidth = 3;
//     for (let i = -size; i < size * 2; i += 15) {
//       ctx.beginPath();
//       ctx.moveTo(i, 0);
//       ctx.lineTo(i + size, size);
//       ctx.stroke();
//     }

//     const texture = new THREE.CanvasTexture(canvas);
//     texture.wrapS = THREE.RepeatWrapping;
//     texture.wrapT = THREE.RepeatWrapping;
//     texture.repeat.set(width / 10, depth / 10); // repeat based on floor size

//     return texture;
//   }, [width, depth]);

//   return (
//     <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
//       <planeGeometry args={[width, depth]} />
//       <meshStandardMaterial map={woodTexture} roughness={0.7} metalness={0.1} />
//     </mesh>
//   );
// }

// export default function App() {
//   const roomWidth = 150;
//   const roomDepth = 220;
//   const wallHeight = 20;

//   const spacingX = 20;
//   const spacingZ = 10;

//   const maxColumns = Math.floor(roomWidth / spacingX);
//   const maxRowGroups = Math.floor(roomDepth / (spacingZ * 5));

//   const [chairColor, setChairColor] = useState("#c0c0c0");
//   const [tableColor, setTableColor] = useState("#a0522d");
//   const [columnCount, setColumnCount] = useState(6);
//   const [rowCount, setRowCount] = useState(4);

//   const [showControls, setShowControls] = useState(false);  // toggle drawer

//   const columns = Math.min(columnCount, maxColumns);
//   const rows = Math.min(rowCount, maxRowGroups);

//   const sendCustomizationToReactNative = () => {
//     const dataToSend = {
//       type: "customization_update",
//       payload: {
//         chairColor,
//         tableColor,
//         columnCount,
//         rowCount,
//       },
//     };
//     if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
//       window.ReactNativeWebView.postMessage(JSON.stringify(dataToSend));
//     }
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh", position: "relative", width: '100vw' }}>
//       <div style={{ flexGrow: 1 }}>
//         <Canvas shadows camera={{ position: [80, 100, 120], fov: 60 }}>
//           <directionalLight position={[30, 80, 30]} intensity={1.8} castShadow />
//           <ambientLight intensity={0.3} />
//           <OrbitControls />

//           <WoodFloor width={roomWidth} depth={roomDepth} />

//           {/* Walls */}
//           <mesh receiveShadow position={[0, wallHeight / 2, -roomDepth / 2]}>
//             <planeGeometry args={[roomWidth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>
//           <mesh receiveShadow rotation={[0, Math.PI / 2, 0]} position={[-roomWidth / 2, wallHeight / 2, 0]}>
//             <planeGeometry args={[roomDepth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>
//           <mesh receiveShadow rotation={[0, -Math.PI / 2, 0]} position={[roomWidth / 2, wallHeight / 2, 0]}>
//             <planeGeometry args={[roomDepth, wallHeight]} />
//             <meshStandardMaterial color="#f0e6d2" />
//           </mesh>

//           <Suspense fallback={null}>
//             {Array.from({ length: columns }).flatMap((_, colIndex) => {
//               const totalWidth = (columns - 1) * spacingX;
//               const baseX = -totalWidth / 2 + colIndex * spacingX;

//               return Array.from({ length: rows }).flatMap((_, rowGroupIndex) => {
//                 const totalDepth = (rows - 1) * spacingZ * 5;
//                 const baseZ = -totalDepth / 2 + rowGroupIndex * spacingZ * 5;

//                 return [
//                   <Table
//                     key={`table-top1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ]}
//                   />,
//                   <Table
//                     key={`table-top2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ]}
//                   />,
//                   <Buffet
//                     key={`buffet-${colIndex}-${rowGroupIndex}`}
//                     position={[baseX, 0, baseZ + spacingZ * 2]}
//                   />,
//                   <Table
//                     key={`table-bottom1-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 3]}
//                   />,
//                   <Table
//                     key={`table-bottom2-${colIndex}-${rowGroupIndex}`}
//                     chairColor={chairColor}
//                     tableColor={tableColor}
//                     position={[baseX, 0, baseZ + spacingZ * 4]}
//                   />
//                 ];
//               });
//             })}
//           </Suspense>
//         </Canvas>
//         <button
//         onClick={() => {
//           sendCustomizationToReactNative();  // Send data only when Customize button clicked
//         }}
//         style={{
//           position: "fixed",
//           bottom: 20,
//           left: "50%",
//           zIndex: 100,
//           padding: "10px 15px",
//           background: "#fe7774",
//           color: "white",
//           border: "none",
//           borderRadius: 4,
//           cursor: "pointer",
//           transform: "translateX(-50%)",
//           transition: "right 0.3s ease",
//         }}
//         aria-label={showControls ? "Close Controls" : "Open Controls"}
//       >
//         {"Customize"}
//       </button>
//       </div>

//       {/* Drawer Toggle Button */}
//       <button
//         onClick={() => setShowControls(!showControls)}
//         style={{
//           position: "fixed",
//           top: 20,
//           right: showControls ? 20 : 20, // shift button when drawer is open
//           zIndex: 1000,
//           padding: "10px 15px",
//           background: "#fe7774",
//           color: "white",
//           border: "none",
//           borderRadius: 4,
//           cursor: "pointer",
//           transition: "right 0.3s ease",
//         }}
//         aria-label={showControls ? "Close Controls" : "Open Controls"}
//       >
//         {showControls ? "X" : "Customization Panel"}
//       </button>

//       {/* Drawer Control Panel */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           right: 0,
//           height: "100vh",
//           width: 300,
//           backgroundColor: "rgba(0, 0, 0, 0.95)",
//           boxShadow: "-2px 0 8px rgba(0,0,0,0.25)",
//           padding: 20,
//           overflowY: "auto",
//           transform: showControls ? "translateX(0)" : "translateX(100%)",
//           transition: "transform 0.3s ease",
//           zIndex: 999,
//         }}
//       >
//         <h4>Chair Color</h4>
//         <ChromePicker color={chairColor} onChange={(color) => setChairColor(color.hex)} />

//         <h4 style={{ marginTop: 20 }}>Table Color</h4>
//         <ChromePicker color={tableColor} onChange={(color) => setTableColor(color.hex)} />

//         <h4 style={{ marginTop: 20 }}>Column Count (max {maxColumns})</h4>
//         <input
//           type="number"
//           min="1"
//           max={maxColumns}
//           value={columns}
//           onChange={(e) => setColumnCount(Math.min(maxColumns, Math.max(1, parseInt(e.target.value) || 1)))}
//         />

//         <h4 style={{ marginTop: 20 }}>Row Groups (max {maxRowGroups})</h4>
//         <input
//           type="number"
//           min="1"
//           max={maxRowGroups}
//           value={rows}
//           onChange={(e) => setRowCount(Math.min(maxRowGroups, Math.max(1, parseInt(e.target.value) || 1)))}
//         />
//         <p style={{ fontSize: 12, color: "#888" }}>
//           Each row group = 2 tables + buffet + 2 tables
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Second from "./pages/Second";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </Router>
  );
}