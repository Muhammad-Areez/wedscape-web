import React from "react";
import { useGLTF } from "@react-three/drei";
import tableScene from "../3d/banquet_table_with_catering.glb";

const Buffet = ({ count = 1, position = [0, 0, 0] }) => {
  const { nodes, materials } = useGLTF(tableScene);
  const clampedCount = Math.min(3, Math.max(1, count));

  const renderBuffet = (index) => {
    const spacing = 15;
    const xOffset = (index - (clampedCount - 1) / 2) * spacing;

    return (
      <group key={index} position={[position[0] + xOffset, position[1], position[2]]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Brownie} position={[-2.911, 1.966, 0.811]} scale={[0.095, 0.03, 0.05]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.VIP_BlackTexture} position={[-3.487, 1.288, -0.601]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.VIP_BlackTexture} position={[-3.473, 1.288, -4.958]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Brushed_Metal} position={[-3.487, 2.272, 3.687]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.VIP_BlackTexture} position={[-3.521, 1.288, 3.706]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Trays} position={[-3.489, 1.938, -0.581]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Coffee_Cups} position={[-3.287, 2.31, -3.284]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Brushed_Metal} position={[-3.354, 2.529, -5.293]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Black_Coffee_Maker} position={[-3.375, 3.291, -5.293]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Cookie} position={[-2.902, 1.943, -1.959]} scale={0.085} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Black_Coffee_Maker} position={[-3.354, 2.529, -5.293]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Black_Coffee_Maker} position={[-3.354, 2.529, -5.293]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    );
  };

  return <>{Array.from({ length: clampedCount }, (_, i) => renderBuffet(i))}</>;
};

export default Buffet;
