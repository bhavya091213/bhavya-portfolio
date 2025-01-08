import { Text } from "@react-three/drei";

interface Props {
  name: string;
  x: number;
  y: number;
  z: number;
  size?: number;
  emmisivity?: number;
}

const Name = ({ name, x, y, z, size, emmisivity }: Props) => {
  return (
    <>
      <mesh position={[x, y, z]} castShadow>
        <Text
          font="public/fonts/Poppins-Black.ttf"
          textAlign="center"
          fontSize={size}
        >
          {name}
          <meshStandardMaterial
            color="#58a4b0"
            emissive={emmisivity != null ? emmisivity : 110000}
          />
        </Text>
      </mesh>
    </>
  );
};

export default Name;
