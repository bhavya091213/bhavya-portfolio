import { useState } from "react";
import { useCursor } from "@react-three/drei";
import LinkedThreeDimButton from "../models/LinkedThreeDimButton";
import ThreeDimButton from "../models/ThreeDimButton";
import GenericText from "../models/GenericText";
import PoppinsItalic from "/fonts/Poppins-Italic.ttf?url";
import poppinsSemiBold from "/fonts/Poppins-SemiBold.ttf?url";

const AboutMeText = () => {
  const [color, setColor] = useState(false);
  const mainCameraPos = [0, 5.5, 7.5];
  useCursor(color);
  const paragraphSizeConstant = 0.065;

  //SOME ANIMATIONS, HAVE TEXT COME OUT OF GROUND

  return (
    <>
      <mesh
        onPointerOver={() => setColor(true)}
        onPointerOut={() => setColor(false)}
      >
        <LinkedThreeDimButton
          text={"YouTube"}
          posVector={[0, 1.56, 0.4]}
          rotVector={[-Math.PI / 2, 0, -Math.PI / 30]}
          size={0.18}
          linked="https://www.youtube.com/channel/UCgjlsfArtc8UFxtw7nKAXCw"
        ></LinkedThreeDimButton>

        <ThreeDimButton
          text="BACK"
          posVector={[-1.55, 1.57, 0.8]}
          targetPos={[mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]]}
          rotVector={[-Math.PI / 2, 0, Math.PI / 25]}
          size={0.3}
        />
      </mesh>
      {/* Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.46, 1.86]}>
        <planeGeometry args={[3.4, 1]} />
        <meshStandardMaterial color={"#252323"} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.5, 1.55]}>
        <GenericText
          fontAddr={poppinsSemiBold}
          size={0.13}
          text="Bhavya Patel - Full Stack Software Developer"
          color="#58a4b0"
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.5, 1.7]}>
        <GenericText
          fontAddr={PoppinsItalic}
          size={0.07}
          text="Hello! My name is Bhavya Patel, and I am passionate about passionate about combining"
          color="#58a4b0"
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.5, 1.8]}>
        <GenericText
          fontAddr={PoppinsItalic}
          size={paragraphSizeConstant}
          text="creativity and technology to bring ideas to life. Areas such as full-stack software engineering"
          color="#58a4b0"
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.5, 1.9]}>
        <GenericText
          fontAddr={PoppinsItalic}
          size={paragraphSizeConstant}
          text="captivate my passion, as I get to develop innovative solutions from start to finish. My free time"
          color="#58a4b0"
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 1.5, 2.0]}>
        <GenericText
          fontAddr={PoppinsItalic}
          size={paragraphSizeConstant}
          text="consists of exploring new technologies, learning media production, graphic design, and audio."
          color="#58a4b0"
        />
      </mesh>
      <mesh>
        <LinkedThreeDimButton
          text={"LinkedIn"}
          posVector={[-0.6, 1.5, 2.2]}
          rotVector={[-Math.PI / 2, 0, 0]}
          size={0.2}
          linked={"https://www.linkedin.com/in/bhavyap12/"}
        />
      </mesh>
      <mesh>
        <LinkedThreeDimButton
          text={"Github"}
          posVector={[0.6, 1.5, 2.2]}
          rotVector={[-Math.PI / 2, 0, 0]}
          size={0.2}
          linked={"https://github.com/bhavya091213/"}
        />
      </mesh>
    </>
  );
};

export default AboutMeText;
