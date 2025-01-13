import { Text, useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";
import { OrbitControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import menda from "/fonts/menda-4.ttf";

interface Props {
  text: string;
  posVector: number[];
  targetPos: number[];
  rotVector: number[];
  size?: number;
}

const ThreeDimButton = ({
  text,
  posVector,
  targetPos,
  rotVector,
  size,
}: Props) => {
  const camera = useThree().camera;
  const [color, setColor] = useState(false);
  useCursor(color);

  const [orbitOk, setOrbitOk] = useState(false);

  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const contentSafeClick = contextSafe(() => {
    gsap.to(camera.position, {
      x: targetPos[0],
      y: targetPos[1],
      z: targetPos[2],
      duration: 2.5,
      ease: "back.inOut(0.5)",
    });
  });

  const handleClick = () => {
    contentSafeClick();
    setOrbitOk(false);
  };

  return (
    <>
      <mesh
        position={[posVector[0], posVector[1], posVector[2]]}
        rotation={[rotVector[0], rotVector[1], rotVector[2]]}
        onPointerOver={() => setColor(true)}
        onPointerOut={() => setColor(false)}
        onClick={handleClick}
        castShadow
      >
        <Text font={menda} fontSize={size != null ? size : 0.8} ref={container}>
          {text}
          <meshStandardMaterial
            color={!color ? "#252323" : "#58a4b0"}
            roughness={0.7}
            emissiveIntensity={5}
          />
        </Text>
        {orbitOk && (
          <OrbitControls
            enableZoom={true}
            minDistance={10}
            maxDistance={20}
            minPolarAngle={Math.PI / 12}
            maxPolarAngle={Math.PI / 2.4}
            minAzimuthAngle={Math.PI / 2}
            enablePan={false}
            target={[targetPos[0], targetPos[1], targetPos[2]]}
          />
        )}
      </mesh>
    </>
  );
};

export default ThreeDimButton;
