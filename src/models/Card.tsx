import GenericText from "./GenericText";
import BlackItalic from "/fonts/Poppins-BlackItalic.ttf";
interface Props {
  posVector: number[];
  rotVector: number[];
}
const Card = ({ posVector, rotVector }: Props) => {
  return (
    <>
      <mesh
        position={[posVector[0], posVector[1], posVector[2]]}
        rotation={[rotVector[0], rotVector[1], rotVector[2]]}
      >
        <GenericText
          fontAddr={BlackItalic}
          size={2}
          text="Skills"
          color="#252323"
        />
      </mesh>
    </>
  );
};

export default Card;
