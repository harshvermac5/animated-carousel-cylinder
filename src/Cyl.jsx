import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'


const Cyl = () => {
    let tex = useTexture('./image.png')
    let cyl = useRef(null)
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    })
  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cyl}>
        {/* radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, */}
      <cylinderGeometry args={[1, 1, 1, 60, 60, true,]}/>
      <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  )
}

export default Cyl