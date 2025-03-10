import { Text, useCursor } from "@react-three/drei";
import { useState, useMemo, Suspense } from "react";
import SemiBold from "/fonts/Poppins-SemiBold.ttf?url";
import { useVideoTexture, Center } from "@react-three/drei";
import * as THREE from "three";
import CurvedPlane from "../models/CurvedPlane";

// vid import
import water from "/videos/water.mp4?url";
import motExtract from "/videos/motextract.mov?url";
import vidstabdemo from "/videos/vidstabdemo.mov?url";
import justbaldemo from "/videos/justbaldemo.mov?url";

// video imports

// all the links for the projects
const VidLinks = {
  MotionExtraction: motExtract,
  VideoStabilization: motExtract,
  Mnist: motExtract,
  justBalance: motExtract,
};

export const Projects = () => {
  const [currURL, setCurrURL] = useState(VidLinks.MotionExtraction);

  return (
    <>
      {/* pass props to child clas, prolly more efficent way of doing this */}
      {/* Screen */}
      <mesh
        position={[0, 0, -24]}
        rotation={[-Math.PI / 50, Math.PI, 0]}
        scale={1.9}
      >
        <Screen src={currURL} />
      </mesh>

      {/* Buttons */}
      <mesh
        onPointerOver={() => {
          setCurrURL(motExtract);
          console.log("mot extract demo");
        }}
      >
        <VideoButton
          text="MOTION EXRTACTION"
          size={0.4}
          posVector={[0, 0.01, -25.3]}
          rotVector={[-Math.PI / 2, 0, 0]}
          link={"https://github.com/bhavya091213/MotionExtractor"}
        />
      </mesh>
      <mesh
        onPointerOver={() => {
          setCurrURL(vidstabdemo);
          console.log("vid stab hover");
        }}
      >
        <VideoButton
          text="VIDEO STABILIZATION"
          size={0.4}
          posVector={[0, 0.01, -24.7]}
          rotVector={[-Math.PI / 2, 0, 0]}
          link={"https://github.com/bhavya091213/MotionExtractor/tree/main/src"}
        />
      </mesh>
      <VideoButton
        text="MNIST"
        size={0.4}
        posVector={[0, 0.01, -24.1]}
        rotVector={[-Math.PI / 2, 0, 0]}
        link={"https://github.com/bhavya091213/mnist_classification.git"}
      />
      <mesh
        onPointerOver={() => {
          setCurrURL(justbaldemo);
          console.log("just bal hover");
        }}
      >
        <VideoButton
          text="justBalance"
          size={0.4}
          posVector={[0, 0.01, -23.5]}
          rotVector={[-Math.PI / 2, 0, 0]}
          link={"https://github.com/aaryanbhardwaj1/justBalance"}
        />
      </mesh>
    </>
  );
};

interface Props {
  text: string;
  size: number;
  posVector: number[];
  rotVector: number[];
  link: string;
}

export const VideoButton = ({
  text,
  size,
  posVector,
  rotVector,
  link,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <mesh
        position={[posVector[0], posVector[1], posVector[2]]}
        rotation={[rotVector[0], rotVector[1], rotVector[2]]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <Text font={SemiBold} fontSize={size}>
          {text}
          <meshStandardMaterial color={!hovered ? "#252323" : "#F1FFE7"} />
        </Text>
      </mesh>
    </>
  );
};

// main idea

// have a theatre screen approach

// have code that on hover changes project file video

// on click it holds that video

interface ScreenProps {
  src: string;
}
export const Screen = ({ src }: ScreenProps) => {
  const [video, setVideo] = useState<HTMLVideoElement>();

  const ratio = 16 / 9;
  const width = 5;
  const radius = 4;
  const z = 4;

  const r = useMemo(
    () => (video ? video.videoWidth / video.videoHeight : ratio),
    [video, ratio]
  );
  return (
    <Center top position-z={z}>
      <CurvedPlane width={width} height={width / r} radius={radius}>
        <Suspense
          fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}
        >
          <VideoMaterial src={src} setVideo={setVideo} />
        </Suspense>
      </CurvedPlane>
    </Center>
  );
};
interface MatProps {
  src: string;
  setVideo: React.Dispatch<React.SetStateAction<HTMLVideoElement | undefined>>;
}

export const VideoMaterial = ({ src, setVideo }: MatProps) => {
  const texture = useVideoTexture(src);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  setVideo?.(texture.image);

  return (
    <meshStandardMaterial
      side={THREE.DoubleSide}
      map={texture}
      toneMapped={false}
      transparent
      opacity={0.9}
    />
  );
};
