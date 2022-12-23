/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/room1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.45, 0, 0.03]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Mesh_167004.geometry} material={materials['color.037']} />
        <mesh geometry={nodes.Mesh_167004_1.geometry} material={materials['color.039']} />
        <group position={[-0.31, 1.09, 1.72]}>
          <mesh geometry={nodes.Mesh_167006.geometry} material={materials['color.023']} />
          <mesh geometry={nodes.Mesh_167006_1.geometry} material={materials['color.011']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/room1.glb')
