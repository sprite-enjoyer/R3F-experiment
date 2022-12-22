import { FlyControls, OrbitControls } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";

const CameraControls = (): JSX.Element => {
  const { camera, gl } = useThree();
  return <OrbitControls attach={"OrbitControls"} args={[camera, gl.domElement]} />;
};

extend({ OrbitControls });
export default CameraControls;  