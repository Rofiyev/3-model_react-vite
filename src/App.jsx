import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import UI from "./components/UI";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 8, 20]} />
        <Suspense>
          <Experience />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <UI />
    </>
  );
}

export default App;
