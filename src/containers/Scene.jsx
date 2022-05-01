import styled from "@emotion/styled";
import { Canvas } from "@react-three/fiber";
import Object from '../components/Object';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  scene: state.scene
});

const Main = styled.main`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
`

const Scene = ({scene}) => {
  return (
    <Main className="Scene">
      {scene ? <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Object {...scene} />
      </Canvas> : null}
    </Main>
  );
}

export default connect(mapStateToProps)(Scene);