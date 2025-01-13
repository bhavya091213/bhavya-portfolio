import { useState } from "react";
import LinkedThreeDimButton from "../models/LinkedThreeDimButton";
import { useCursor } from "@react-three/drei";

const AboutMeText = () => {
  const [color, setColor] = useState(false);
  useCursor(color);

  return (
    <>
      <mesh
        onPointerOver={() => setColor(true)}
        onPointerOut={() => setColor(false)}
      >
        <LinkedThreeDimButton
          text={"YouTube"}
          posVector={[-20, 0.01, -23.3]}
          rotVector={[0, 0, 0]}
        ></LinkedThreeDimButton>
      </mesh>
    </>
  );
};

export default AboutMeText;
