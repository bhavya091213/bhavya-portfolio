import ThreeDimButton from "../models/ThreeDimButton.tsx";

const MainButtons = () => {
  const mainCameraPos = [0, 5.5, 7.5];
  return (
    <>
      <ThreeDimButton
        text="SKILLS"
        posVector={[0, 0.01, 2.3]}
        targetPos={[25, 5, -20]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <ThreeDimButton
        text="BACK"
        posVector={[25, 0.01, -23.3]}
        targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <ThreeDimButton
        text="RESUME"
        posVector={[0, 0.01, 3.3]}
        targetPos={[-25, 5, -20]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <ThreeDimButton
        text="BACK"
        posVector={[-25, 0.01, -23.3]}
        targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <ThreeDimButton
        text="ABOUT ME"
        posVector={[0, 0.01, 4.3]}
        targetPos={[0, 3.3, 3]}
        rotVector={[-Math.PI / 2, 0, 0]}
      />
      <ThreeDimButton
        text="BACK"
        posVector={[-1.55, 1.57, 0.8]}
        targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
        rotVector={[-Math.PI / 2, 0, Math.PI / 25]}
        size={0.3}
      />
    </>
  );
};

export default MainButtons;
