// Component Import
import Card from "./Card";
import GenericText from "./GenericText";
import ThreeDimButton from "./ThreeDimButton";

// R3F, React, and 3js imports
import { useRef, useState } from "react";

// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Font Imports
import regular from "/fonts/menda-4.ttf";

const Skills = () => {
  const mainCameraPos = [0, 5.5, 7.5];

  // set a state to get rid of 'click me' button
  const [show, setShow] = useState(true);

  // Set up Refs
  const container = useRef(); // put ref on text
  const { contextSafe } = useGSAP({ scope: container }); // define scope which is the ref
  // click functions

  const clickAnimation = contextSafe(() => {});

  const handleClickMe = () => {
    setShow(false);
    clickAnimation();
  };
  const handleDone = () => {
    setShow(true);
  };

  return (
    <>
      {/* Skills header */}
      <Card posVector={[30, 1.9, -37]} rotVector={[0, -Math.PI / 8, 0]}></Card>

      {/* Click Me Animation Starter */}
      {show && (
        <mesh
          onClick={handleClickMe}
          position={[25, 0.01, -25]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <GenericText
            fontAddr={regular}
            text="Click Me!"
            size={0.5}
            color="#252323"
          />
        </mesh>
      )}
      <mesh onClick={handleDone}>
        <ThreeDimButton
          text="BACK"
          posVector={[25, 0.01, -23.3]}
          targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
          rotVector={[-Math.PI / 2, 0, 0]}
        />
      </mesh>

      {/* Design the panels that come up here */}

      {show && <mesh></mesh>}
    </>
  );
};

export default Skills;
