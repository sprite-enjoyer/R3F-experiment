import { Canvas } from "@react-three/fiber"
import CameraControls from "../threeComponents/CameraControls"
import Floor from "../threeComponents/Floor"
import styles from "../styles/ChillingRoom.module.scss";
import useExternalModelControls from "../hooks/useExternalModelControls";


const ChillingRoom = () => {
  const base = "http://localhost:3000/"

  const [Chair, chairModel] = useExternalModelControls(base.concat("chair.glb"));
  const [Commode, commodeModel] = useExternalModelControls(base.concat("commode.glb"));

  return (
    <div className={styles["main"]} >
      <Canvas
        shadows
        className={styles["main__canvas"]}
      >
        <Chair position={[1, 2, 3]} />
        <CameraControls />
        <Floor position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default ChillingRoom;