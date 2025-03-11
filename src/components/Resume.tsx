import LinkedThreeDimButton from "../models/LinkedThreeDimButton";

export const Resume = () => {
  return (
    <mesh>
      <LinkedThreeDimButton
        text="Resume Link"
        posVector={[-25, 0.01, -25.3]}
        rotVector={[-Math.PI / 2, 0, 0]}
        linked="https://docs.google.com/document/d/1OgOWLttBVdcDEocE-Wz1sPGNcoYeRHcmh_Wao44R36U/edit?usp=sharing"
      />
    </mesh>
  );
};
