import { Canvas } from "@react-three/fiber"
import CameraControls from "./CameraControls"
import Floor from "./Floor"
import styles from "../styles/ChillingRoom.module.scss";
import { useGLTF } from "@react-three/drei";


const ChillingRoom = () => {

  const base = "http://localhost:3000/";

  const chair = useGLTF(base + "chair.glb");
  const table = useGLTF(base + "Table.glb");
  const tableShelf = useGLTF(base + "tableShelf.glb");
  const tvStand = useGLTF(base + "tv-stand.glb");
  const tv = useGLTF(base + "tv.glb");
  const plainChair = useGLTF(base + "plainChair.glb");


  chair.scene.position.set(5, 0.54, 5);
  table.scene.rotateZ(Math.PI / 2)

  return (
    <div className={styles["main"]} >
      <Canvas
        shadows
        className={styles["main__canvas"]}
      >

        <primitive object={plainChair.scene} position={[0, 1, 1]} scale={1.3} />
        <primitive object={tv.scene} position={[0, 1, 1]} />
        <primitive object={tvStand.scene} position={[0, 1, 1]} />
        <primitive object={tableShelf.scene} position={[8, 1, 0]} />
        <primitive object={chair.scene} position={[0, 1, 1]} />
        <primitive object={table.scene} position={[0, 1, 1]} />

        <CameraControls />
        <Floor position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default ChillingRoom;