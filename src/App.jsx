import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Cyl from './Cyl'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const App = () => {
  return (
    <Canvas camera={{ fov: 35 }}>
      <OrbitControls />
      <ambientLight />
      <Cyl />
      <EffectComposer>
        <Bloom
          mipmapBlur
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={4.0}
        />
      </EffectComposer>
    </Canvas>
  )
}

export default App