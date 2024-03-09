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

// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/dRciKx96PTkLbgvY/scene.splinecode');


