/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Room3(props) {
  const { nodes, materials } = useGLTF('./models/room3.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.5, -2.7, 3.6]} rotation={[Math.PI, 6.3, Math.PI]}>
        <mesh geometry={nodes.Mesh_51002.geometry} material={materials.color2} />
        <mesh geometry={nodes.Mesh_51002_1.geometry} material={materials.color3} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/room3.glb')
