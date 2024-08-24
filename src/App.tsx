import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./App.css";

//                                                    //
// CONTACT STEEDIE IF YOU WANT DOMAIN NAME TRANSFERED //
//                                                    //

function BigRedCube() {
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += delta;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 2]} intensity={5} />
        <BigRedCube />
      </Canvas>
    </>
  );
}

export default App;
