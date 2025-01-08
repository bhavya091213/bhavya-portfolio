import { Canvas } from "@react-three/fiber";
import Name from "../models/Name";

const LoadingAnimation = () => {
  return (
    <Canvas>
      <Name name="LOADING!" x={0} y={0} z={0} size={1} />
    </Canvas>
  );
};

export default LoadingAnimation;
