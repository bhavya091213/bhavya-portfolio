import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { PerspectiveCamera } from "@react-three/drei";
import meshURL from "/final-scene.gltf?url";

interface Props {
  x: number;
  y: number;
  z: number;
  initialPos: number[];
}

const MainScene = ({ x, y, z, initialPos }: Props) => {
  const adress: string = meshURL; // have to do this otherwise line 25 gltf.scene thinks there is discrepancy
  const gltf = useLoader(GLTFLoader, adress);
  console.log("Scene Loaded");
  return (
    <>
      <PerspectiveCamera
        position={[initialPos[0], initialPos[1], initialPos[2]]}
      />
      <mesh position={[x, y, z]} receiveShadow>
        <primitive object={gltf.scene} scale={0.5} />
      </mesh>
    </>
  );
};
MainScene.defaultProps = {
  x: 0,
  y: 0,
  z: 0,
  initialPos: [0, 0, 0],
};
export default MainScene;
