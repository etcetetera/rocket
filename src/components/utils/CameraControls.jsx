import { OrbitControls } from "@react-three/drei";

const CameraControls = () => {
  return <OrbitControls enableZoom={true} enablePan={true} />;
};

export default CameraControls;
