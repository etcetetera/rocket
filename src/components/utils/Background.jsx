import { Environment } from "@react-three/drei";

const Background = () => {
  return (
    <>
      <Environment background files="/hdr/earth.hdr" />

      <ambientLight 
        intensity={1}
      />
      <directionalLight
        intensity={1}
        position={[5, 10, 7.5]}
      />
    </>
  );
};

export default Background;
