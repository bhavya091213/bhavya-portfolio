import { Canvas } from "@react-three/fiber";

import { Stats } from "@react-three/drei";
import React, { Suspense } from "react";

import "./App.css";

import MainButtons from "./components/MainButtons";
import LoadingAnimation from "./components/LoadingAnimation";
import Name from "./models/Name";
import MainScene from "./models/MainScene";
import AboutMeText from "./components/AboutMeText";
import Skills from "./models/Skills";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";

export const inPage = React.createContext("about-me");

function App() {
  const mainCameraPos = [0, 5.5, 7.6];
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Canvas
        camera={{
          position: [mainCameraPos[0], mainCameraPos[1], mainCameraPos[2]],
        }}
        style={{ width: `100%`, height: `auto`, position: `relative` }}
        shadows
      >
        {/* Meshes */}
        <MainScene x={0} y={0} z={0} initialPos={mainCameraPos} />
        <Name name="BHAVYA PATEL" x={0} y={4.5} z={-2} size={1} />
        <Name name="PORTFOLIO" x={0} y={3.3} z={-1.5} size={1.5} />
        <MainButtons />
        <AboutMeText />
        <Skills />
        <Projects />
        <Resume />
        <Stats showPanel={0} className="stats" />

        {/* Post Processing */}
        {/* <fogExp2 attach="fog" color="black" density={0.01} />
        <EffectComposer>
          <Noise opacity={0.1} />
        </EffectComposer> */}
      </Canvas>
    </Suspense>
  );
}

export default App;
