import LinkedThreeDimButton from "../models/LinkedThreeDimButton";

const Resume = () => {
  return (
    <mesh>
      <LinkedThreeDimButton
        text="Resume Link"
        posVector={[0, 0, 0]}
        rotVector={[0, 0, 0]}
        linked="https://docs.google.com/document/d/1OgOWLttBVdcDEocE-Wz1sPGNcoYeRHcmh_Wao44R36U/edit?usp=sharing"
      />
    </mesh>
  );
};

export default Resume;
