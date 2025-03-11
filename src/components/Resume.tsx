import LinkedThreeDimButton from "../models/LinkedThreeDimButton";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import book from "/threeDimModels/book.glb?url";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Mesh } from "three";

interface Props {
  posVector: number[];
}

export const Resume = ({ posVector }: Props) => {
  const adress: string = book;
  const gltf = useLoader(GLTFLoader, adress);
  console.log("Book Loaded");

  // Animation setup
  const ref = useRef<Mesh>(null);
  useGSAP(() => {
    if (!ref.current) return;

    gsap.to(ref.current.position, {
      duration: 2,
      ease: "power2.inOut",
      y: "+=0.2",
      x: "+=0.01",
      z: "+=0.002",
      yoyo: true,
      repeat: -1, // Infinite loop
    });
  }, [ref]);

  return (
    <>
      <mesh receiveShadow>
        <LinkedThreeDimButton
          text="Resume Link"
          posVector={[-25, 0.3, -24.9]}
          rotVector={[-Math.PI / 2.5, 0, 0]}
          linked="https://docs.google.com/document/d/1OgOWLttBVdcDEocE-Wz1sPGNcoYeRHcmh_Wao44R36U/edit?usp=sharing"
        />
      </mesh>
      <mesh
        position={[posVector[0], posVector[1], posVector[2]]}
        ref={ref}
        rotation={[Math.PI / 10, 0, 0]}
      >
        <primitive object={gltf.scene} scale={0.5} />
      </mesh>
    </>
  );
};
