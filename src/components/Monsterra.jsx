/* eslint-disable */
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

const SparkleModel = () => {
  const gltf = useGLTF('src/assets/monsterra2.gltf', true);
  return <primitive object={gltf.scene} />;
};

const Monsterra = () => {
  return (
    <Canvas>
      <SparkleModel />
      <OrbitControls />
    </Canvas>
  );
};

export default Monsterra;