// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// import tableScene from '../3d/banquet_table_with_catering.glb'

// const Table = ({ chairColor = "#ffffff", tableColor = "#ffffff", ...props }) => {
//   const tableRef = useRef()
//   const { nodes, materials } = useGLTF(tableScene)

//   // Apply dynamic colors
//   if (materials.ChairColor) materials.ChairColor.color.set(chairColor)
//   if (materials.VIP_BlackTexture) materials.VIP_BlackTexture.color.set(tableColor)

//   return (
//     <group ref={tableRef} {...props} dispose={null}>
//       <group position={[3.438, 1.395, -0.018]} scale={0.533}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_28.geometry}
//           material={materials.ChairColor}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_29.geometry}
//           material={materials.ChairSeatCover}
//         />
//       </group>
//       <group name="Buffet" position={[1.5, 0, -0.018]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials.Brownie}
//           position={[-2.911, 1.966, 0.811]}
//           scale={[0.095, 0.03, 0.05]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.487, 1.288, -0.601]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.473, 1.288, -4.958]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_10.geometry}
//           material={materials.Brushed_Metal}
//           position={[-3.487, 2.272, 3.687]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_12.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.521, 1.288, 3.706]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_14.geometry}
//           material={materials.Trays}
//           position={[-3.489, 1.938, -0.581]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_16.geometry}
//           material={materials.Coffee_Cups}
//           position={[-3.287, 2.31, -3.284]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_18.geometry}
//           material={materials.Brushed_Metal}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_20.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.375, 3.291, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_22.geometry}
//           material={materials.Cookie}
//           position={[-2.902, 1.943, -1.959]}
//           scale={0.085}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_24.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_26.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>

//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_31.geometry}
//         material={materials.VIP_BlackTexture}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_33.geometry}
//         material={materials.material}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_35.geometry}
//         material={materials.material_0}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_37.geometry}
//         material={materials.Flower}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_39.geometry}
//         material={materials.Stems}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_41.geometry}
//         material={materials.Leaves}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Object_43.geometry}
//         material={materials.Glassware}
//         position={[3.438, 1.395, -0.018]}
//         scale={0.533}
//       />
//     </group>
//   )
// }

// export default Table


// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import tableScene from '../3d/banquet_table_with_catering.glb'
// import FlowerVase from './FlowerVase'

// const Table = ({ chairColor = "#ffffff", tableColor = "#ffffff", buffetCount = 1, ...props }) => {
//   const tableRef = useRef()
//   const { nodes, materials } = useGLTF(tableScene)

//   // Clamp buffetCount between 1 and 3
//   const count = Math.min(3, Math.max(1, buffetCount))

//   // Apply dynamic colors
//   if (materials.ChairColor) materials.ChairColor.color.set(chairColor)
//   if (materials.VIP_BlackTexture) materials.VIP_BlackTexture.color.set(tableColor)

//   // Function to render one buffet group
//   const renderBuffet = (index) => {
//     const spacing = 15 // adjust for horizontal spacing between buffets
//     const xOffset = (index - (count - 1) / 2) * spacing // center them around x = 0

//     return (
//       <group key={index} position={[1, 0, xOffset]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials.Brownie}
//           position={[-2.911, 1.966, 0.811]}
//           scale={[0.095, 0.03, 0.05]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_6.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.487, 1.288, -0.601]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_8.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.473, 1.288, -4.958]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_10.geometry}
//           material={materials.Brushed_Metal}
//           position={[-3.487, 2.272, 3.687]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_12.geometry}
//           material={materials.VIP_BlackTexture}
//           position={[-3.521, 1.288, 3.706]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_14.geometry}
//           material={materials.Trays}
//           position={[-3.489, 1.938, -0.581]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_16.geometry}
//           material={materials.Coffee_Cups}
//           position={[-3.287, 2.31, -3.284]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_18.geometry}
//           material={materials.Brushed_Metal}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_20.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.375, 3.291, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_22.geometry}
//           material={materials.Cookie}
//           position={[-2.902, 1.943, -1.959]}
//           scale={0.085}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_24.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_26.geometry}
//           material={materials.Black_Coffee_Maker}
//           position={[-3.354, 2.529, -5.293]}
//           rotation={[Math.PI / 2, 0, 0]}
//         />
//       </group>
//     )
//   }

//   return (
//     <group ref={tableRef} {...props} dispose={null}>
//       {/* Chairs */}
//       <group position={[3.438, 1.395, -0.018]} scale={0.533}>
//         <mesh geometry={nodes.Object_28.geometry} material={materials.ChairColor} />
//         <mesh geometry={nodes.Object_29.geometry} material={materials.ChairSeatCover} />
//       </group>

//       {/* Buffet tables dynamically rendered */}
//       {Array.from({ length: count }, (_, i) => renderBuffet(i))}

//       {/* Main table and decoration */}
//       <group >
//       <mesh geometry={nodes.Object_31.geometry} material={materials.VIP_BlackTexture} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_33.geometry} material={materials.material} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_35.geometry} material={materials.material_0} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_37.geometry} material={materials.Flower} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_39.geometry} material={materials.Stems} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_41.geometry} material={materials.Leaves} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       <mesh geometry={nodes.Object_43.geometry} material={materials.Glassware} position={[3.438, 1.395, -0.018]} scale={0.533} />
//       </group>
//     </group>
//   )
// }

// export default Table
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import tableScene from "../3d/banquet_table_with_catering.glb";

const Table = ({ chairColor = "#ffffff", tableColor = "#ffffff", position = [0, 0, 0] }) => {
  const tableRef = useRef();
  const { nodes, materials } = useGLTF(tableScene);

  if (materials.ChairColor) materials.ChairColor.color.set(chairColor);
  if (materials.VIP_BlackTexture) materials.VIP_BlackTexture.color.set(tableColor);

  return (
    <group ref={tableRef} dispose={null} position={position}>
      {/* Chairs */}
      <group position={[3.438, 1.395, -0.018]} scale={0.533}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.ChairColor} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.ChairSeatCover} />
      </group>

      {/* Main table and decoration */}
      <group>
        <mesh geometry={nodes.Object_31.geometry} material={materials.VIP_BlackTexture} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.material} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.material_0} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.Flower} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.Stems} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Leaves} position={[3.438, 1.395, -0.018]} scale={0.533} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Glassware} position={[3.438, 1.395, -0.018]} scale={0.533} />
      </group>
    </group>
  );
};

export default Table;
