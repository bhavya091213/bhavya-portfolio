import ThreeDimButton from "../models/ThreeDimButton.tsx";

const MainButtons = () => {
  const mainCameraPos = [0, 5.5, 7.5];
  return (
    <>
      {/* Skills LIGHTS AND BUTTONS */}
      <pointLight position={[0, 5, 20]} intensity={100} />
      <ThreeDimButton
        text="SKILLS"
        posVector={[0, 0.01, 2.3]}
        targetPos={[25, 4.7, -20]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <pointLight position={[25, 5, -30.3]} intensity={500} />

      {/* Resume LIGHTS AND BUTTONS */}
      <ThreeDimButton
        text="RESUME"
        posVector={[0, 0.01, 3.3]}
        targetPos={[-25, 4.7, -20]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <pointLight position={[-25, 5, -30.3]} intensity={500} />
      <ThreeDimButton
        text="BACK"
        posVector={[-25, 0.01, -23.3]}
        targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />

      {/* About Me LIGHTS AND BUTTONS */}
      <ThreeDimButton
        text="ABOUT ME"
        posVector={[0, 0.01, 4.3]}
        targetPos={[0, 3.3, 3]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />

      {/* Projects LIGHTS AND BUTTONS */}
      <ThreeDimButton
        text="PROJECTS"
        posVector={[0, 0.01, 5.3]}
        targetPos={[0, 4.7, -20]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <pointLight position={[0, 10, -30.3]} intensity={500} />
      <ThreeDimButton
        text="BACK"
        posVector={[0, 0.01, -22.3]}
        targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
    </>
  );
};

export default MainButtons;
