interface FloorProps {
  position: number[]
}

const Floor = (props: FloorProps) => {

  return (
    <>
      <ambientLight intensity={0.1} />
      <mesh
        rotation={[0, (-3 / 2) * Math.PI, 0]}
        position={[props.position[0], props.position[1], props.position[2]]}
        receiveShadow
      >
        <boxBufferGeometry args={[20, 1, 20]} />
        <meshPhysicalMaterial color="white" />
      </mesh>
    </>

  );
};

export default Floor;