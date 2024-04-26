import { Environment, useHelper } from "@react-three/drei";
import { useRef } from "react";

const Background = () => {
  const directionalLightRef = useRef()
  // useHelper(directionalLightRef, DirectionalLightHelper)
  return (
    <>
      <Environment background files="/hdr/earth.hdr" />

      <ambientLight 
        intensity={1}
      />
      
      <directionalLight
        ref={directionalLightRef}
        intensity={5}
        position={[2, 7, 2]}
      />
    </>
  );
};

export default Background;
