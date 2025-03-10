import { Text, useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import gsap from "gsap";
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
  // Basic Selecting and color states
  const camera = useThree().camera;
  const [color, setColor] = useState(false);
  useCursor(color);

  //GSAP Animation
  const container = useRef(); // put ref on text
  const { contextSafe } = useGSAP({ scope: container }); // define scope which is the ref

  // define a funciton that has animation
  const contentSafeClick = contextSafe(() => {
    gsap.to(camera.position, {
      x: targetPos[0],
      y: targetPos[1],
      z: targetPos[2],
      duration: 2.5,
      ease: "back.inOut(0.5)",
    });
  });

  // handle the click

  const handleClick = () => {
    contentSafeClick();
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
      </mesh>
    </>
  );
};

export default ThreeDimButton;
