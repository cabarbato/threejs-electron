import { Canvas } from "react-three-fiber";
import Box from '../components/Box';
import './Scene.scss';

function Scene() {
  return (
    <main className="Scene">
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
    </Canvas>
    </main>
  );
}

export default Scene;