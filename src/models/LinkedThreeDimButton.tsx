import { Text, useCursor } from "@react-three/drei";
import { useState } from "react";
import menda from "/public/fonts/menda-4.ttf";

interface Props {
  text: string;
  posVector: number[];
  rotVector: number[];
  size?: number;
}

const LinkedThreeDimButton = ({ text, posVector, rotVector, size }: Props) => {
  const [color, setColor] = useState(false);
  useCursor(color);

  const handleClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCgjlsfArtc8UFxtw7nKAXCw",
      "_blank"
    );
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
        <Text font={menda} fontSize={size != null ? size : 0.8}>
          {text}
          <meshStandardMaterial
            color={!color ? "#252323" : "#F1FFE7"}
            roughness={0.7}
            emissiveIntensity={5}
          />
        </Text>
      </mesh>
    </>
  );
};

export default LinkedThreeDimButton;
