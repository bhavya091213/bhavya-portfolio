import { Text } from "@react-three/drei";

interface Props {
  text: string;
  fontAddr: string;
  size: number;
  color: string;
}
const GenericText = ({ text, fontAddr, size, color }: Props) => {
  return (
    <>
      <Text font={fontAddr} fontSize={size} lineHeight={1}>
        {text}
        <meshStandardMaterial color={color} />
      </Text>
    </>
  );
};
export default GenericText;
