// Component Import
import Card from "./Card";
import GenericText from "./GenericText";
import ThreeDimButton from "./ThreeDimButton";
import { Text, Plane } from "@react-three/drei";

// R3F, React, and 3js imports
import { useRef, useState } from "react";
// GSAP Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Font Imports
import regular from "/fonts/menda-4.ttf";
import { Mesh, MeshStandardMaterial } from "three";

const Skills = () => {
  const mainCameraPos = [0, 5.5, 7.5];

  // set a state to get rid of 'click me' button
  const [show, setShow] = useState(true);

  const handleClickMe = () => {
    setShow(false);
  };
  const handleDone = () => {
    setShow(true);
  };

  return (
    <>
      {/* Skills header */}
      <Card posVector={[25, 1.9, -30]} rotVector={[-Math.PI / 9, 0, 0]}></Card>

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

      {!show && (
        <>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[25, 0.01, -25.5]}>
            <GenericText
              fontAddr={regular}
              text="Honestly too lazy to think of something creative for this"
              size={0.5}
              color="#252323"
            />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[25, 0.01, -24.8]}>
            <GenericText
              fontAddr={regular}
              text="Here are my skills tho!"
              size={0.5}
              color="#252323"
            />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[25, 0.01, -24.1]}>
            <GenericText
              fontAddr={regular}
              text="(Click the cards to reveal them!)"
              size={0.5}
              color="#252323"
            />
          </mesh>
        </>
      )}

      {/* Grid Component */}
      {!show && (
        <>
          <FlipCard
            text="React"
            posVector={[30, 0.03, -27]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="C/C++"
            posVector={[27.5, 0.03, -27]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="Java"
            posVector={[25, 0.03, -27]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="Python"
            posVector={[22.5, 0.03, -27]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="Dev-Ops"
            posVector={[20, 0.03, -27]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="UI/UX"
            posVector={[30, 0.13, -29.5]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="Node.JS"
            posVector={[27.5, 0.13, -29.5]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="AI/ML"
            posVector={[25, 0.13, -29.5]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="JS/TSC"
            posVector={[22.5, 0.13, -29.5]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
          <FlipCard
            text="Perl"
            posVector={[20, 0.13, -29.5]}
            color="#252323"
            rotVal={-Math.PI / 2}
          />
        </>
      )}
    </>
  );
};

export default Skills;

interface FlipProps {
  text: string;
  posVector: number[];
  rotVal: number;
  color: string;
}
export const FlipCard = ({ text, posVector, rotVal, color }: FlipProps) => {
  // Set up Refs
  const container = useRef<Mesh | null>(); // put ref on text
  const mat = useRef<MeshStandardMaterial>(null); // put ref on text
  const { contextSafe } = useGSAP({ scope: container }); // define scope which is the ref
  // click functions

  const clickAnimation = contextSafe(() => {
    if (!container.current) return;
    if (!mat.current) return;
    console.log("clicked");

    gsap.to(container.current.position, {
      x: 0,
      y: 0,
      z: posVector[1] + 0.05,
      duration: 2.5,
      ease: "power.out()",
    });

    gsap.to(mat.current.color, {
      r: 1,
      g: 0.38823,
      b: 0.5725,
      duration: 2,
      ease: "power1.in()",
    });
  });

  return (
    <>
      <mesh
        rotation={[rotVal, 0, 0]}
        position={[posVector[0], posVector[1], posVector[2]]}
        onClick={clickAnimation}
      >
        <Plane args={[2, 2]}>
          <meshStandardMaterial
            color={color}
            ref={mat}
            metalness={0}
            roughness={200}
          />
        </Plane>
        <Text
          font={regular}
          fontSize={0.3}
          ref={container}
          position={[0, 0, 100]}
        >
          {text}
          <meshStandardMaterial
            color={"#252323"}
            roughness={0.7}
            emissiveIntensity={5}
          />
        </Text>
      </mesh>
    </>
  );
};
