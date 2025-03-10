import * as THREE from "three";
import { useMemo } from "react";

interface CurvedPlaneProps {
  width: number;
  height: number;
  radius: number;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function CurvedPlane({
  width,
  height,
  radius,
  children,
  ...props
}: CurvedPlaneProps) {
  // @ts-ignore
  const { geometry, heightMin, heightMax } = useMemo(() => {
    const segments = 32;
    const segmentsH = segments;
    const segmentsV = segments / (width / height);
    const geometry = new THREE.PlaneGeometry(
      width,
      height,
      segmentsH,
      segmentsV
    );
    let heightMin = Infinity;
    let heightMax = -Infinity;

    const distanceMax = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    // Ensure the radius is at least as large as the maximum half-diagonal
    radius = Math.max(distanceMax, radius);

    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const distance = Math.sqrt(x * x + y * y);
      const z = Math.sqrt(Math.max(radius ** 2 - distance ** 2, 0));
      heightMin = Math.min(z, heightMin);
      heightMax = Math.max(z, heightMax);
      position.setZ(i, z);
    }

    // Optionally update normals if needed:
    // geometry.computeVertexNormals()

    return { geometry, heightMin, heightMax };
  }, [width, height, radius]);

  return (
    <group {...props}>
      <mesh
        geometry={geometry}
        receiveShadow
        castShadow
        position-z={-heightMax}
      >
        {children}
      </mesh>
    </group>
  );
}
