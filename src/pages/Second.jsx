import React, { Suspense, useState, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Table from "../assets/models/table";
import Buffet from "../assets/models/Buffet";
import { ChromePicker } from "react-color";

function WoodFloor({ width, depth }) {
  // Procedural wood texture with canvas
  const woodTexture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Base wood color
    ctx.fillStyle = "#8B5E3C";
    ctx.fillRect(0, 0, size, size);

    // Draw diagonal wood grain lines
    ctx.strokeStyle = "#6F4E2A";
    ctx.lineWidth = 3;
    for (let i = -size; i < size * 2; i += 15) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + size, size);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(width / 10, depth / 10); // repeat based on floor size

    return texture;
  }, [width, depth]);

  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[width, depth]} />
      <meshStandardMaterial map={woodTexture} roughness={0.7} metalness={0.1} />
    </mesh>
  );
}

export default function Second() {
  const roomWidth = 150;
  const roomDepth = 220;
  const wallHeight = 20;

  const spacingX = 20;
  const spacingZ = 10;

  const maxColumns = Math.floor(roomWidth / spacingX);
  const maxRowGroups = Math.floor(roomDepth / (spacingZ * 5));

  const [chairColor, setChairColor] = useState("#c0c0c0");
  const [tableColor, setTableColor] = useState("#a0522d");
  const [columnCount, setColumnCount] = useState(6);
  const [rowCount, setRowCount] = useState(4);

  const [showControls, setShowControls] = useState(false);  // toggle drawer

  const columns = Math.min(columnCount, maxColumns);
  const rows = Math.min(rowCount, maxRowGroups);

  const sendCustomizationToReactNative = () => {
    const dataToSend = {
      type: "customization_update",
      payload: {
        chairColor,
        tableColor,
        columnCount,
        rowCount,
      },
    };
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      window.ReactNativeWebView.postMessage(JSON.stringify(dataToSend));
    }
  };

  useEffect(() => {
    const handleMessageFromReactNative = (event) => {
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
  
        if (data.type === 'customization_apply') {
          const { chairColor, tableColor, columnCount, rowCount } = data.payload;
          console.log('Received customization from React Native:', data.payload);
  
          setChairColor(chairColor || '#c0c0c0');
          setTableColor(tableColor || '#a0522d');
          setColumnCount(columnCount || 6);
          setRowCount(rowCount || 4);
        }
      } catch (error) {
        console.error('Error parsing message from React Native:', error);
      }
    };
  
    window.addEventListener('message', handleMessageFromReactNative);
  
    return () => {
      window.removeEventListener('message', handleMessageFromReactNative);
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative", width: '100vw' }}>
      <div style={{ flexGrow: 1 }}>
        <Canvas shadows camera={{ position: [80, 100, 120], fov: 60 }}>
          <directionalLight position={[30, 80, 30]} intensity={1.8} castShadow />
          <ambientLight intensity={0.3} />
          <OrbitControls />

          <WoodFloor width={roomWidth} depth={roomDepth} />

          {/* Walls */}
          <mesh receiveShadow position={[0, wallHeight / 2, -roomDepth / 2]}>
            <planeGeometry args={[roomWidth, wallHeight]} />
            <meshStandardMaterial color="#f0e6d2" />
          </mesh>
          <mesh receiveShadow rotation={[0, Math.PI / 2, 0]} position={[-roomWidth / 2, wallHeight / 2, 0]}>
            <planeGeometry args={[roomDepth, wallHeight]} />
            <meshStandardMaterial color="#f0e6d2" />
          </mesh>
          <mesh receiveShadow rotation={[0, -Math.PI / 2, 0]} position={[roomWidth / 2, wallHeight / 2, 0]}>
            <planeGeometry args={[roomDepth, wallHeight]} />
            <meshStandardMaterial color="#f0e6d2" />
          </mesh>

          <Suspense fallback={null}>
            {Array.from({ length: columns }).flatMap((_, colIndex) => {
              const totalWidth = (columns - 1) * spacingX;
              const baseX = -totalWidth / 2 + colIndex * spacingX;

              return Array.from({ length: rows }).flatMap((_, rowGroupIndex) => {
                const totalDepth = (rows - 1) * spacingZ * 5;
                const baseZ = -totalDepth / 2 + rowGroupIndex * spacingZ * 5;

                return [
                  <Table
                    key={`table-top1-${colIndex}-${rowGroupIndex}`}
                    chairColor={chairColor}
                    tableColor={tableColor}
                    position={[baseX, 0, baseZ]}
                  />,
                  <Table
                    key={`table-top2-${colIndex}-${rowGroupIndex}`}
                    chairColor={chairColor}
                    tableColor={tableColor}
                    position={[baseX, 0, baseZ + spacingZ]}
                  />,
                  <Buffet
                    key={`buffet-${colIndex}-${rowGroupIndex}`}
                    position={[baseX, 0, baseZ + spacingZ * 2]}
                  />,
                  <Table
                    key={`table-bottom1-${colIndex}-${rowGroupIndex}`}
                    chairColor={chairColor}
                    tableColor={tableColor}
                    position={[baseX, 0, baseZ + spacingZ * 3]}
                  />,
                  <Table
                    key={`table-bottom2-${colIndex}-${rowGroupIndex}`}
                    chairColor={chairColor}
                    tableColor={tableColor}
                    position={[baseX, 0, baseZ + spacingZ * 4]}
                  />
                ];
              });
            })}
          </Suspense>
        </Canvas>
      </div>


    </div>
  );
}
