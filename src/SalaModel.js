// src/SalaModel.js
import React from "react";
import { useGLTF } from "@react-three/drei";

export default function SalaModel(props) {
  const { scene } = useGLTF("/models/banquet_table_with_catering.glb"); // Make sure the model is in public/models/

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/banquet_table_with_catering.glb");
