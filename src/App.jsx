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

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Table from "./assets/models/table";
import { ChromePicker } from "react-color";

export default function App() {
  const [chairColor, setChairColor] = useState("#c0c0c0");
  const [tableColor, setTableColor] = useState("#a0522d");
  const [buffetCount, setBuffetCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "80vw", height: "100vh" }}>
        <Canvas shadows camera={{ position: [6, 6, 6], fov: 60 }}>
          <directionalLight position={[1, 1, 1]} intensity={2} castShadow />
          <OrbitControls />
          <Suspense>
            <Table
              chairColor={chairColor}
              tableColor={tableColor}
              buffetCount={buffetCount}
            />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ width: "20vw", padding: 20, backgroundColor: "#0000" }}>
        <h4>Chair Color</h4>
        <ChromePicker color={chairColor} onChange={(color) => setChairColor(color.hex)} />

        <h4 style={{ marginTop: 20 }}>Table Color</h4>
        <ChromePicker color={tableColor} onChange={(color) => setTableColor(color.hex)} />

        <h4 style={{ marginTop: 20 }}>Buffet Count</h4>
        <input
          type="number"
          min="0"
          max="3"
          value={buffetCount}
          onChange={(e) => setBuffetCount(Math.min(3, parseInt(e.target.value) || 0))}
        />
      </div>
    </div>
  );
}
