/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PhantomXD (https://sketchfab.com/PhantomXD)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/old-gmail-logo-f8c066b10d1a475abbd69ebbe9de2b83
title: Old Gmail Logo
*/

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function ModelForm(props) {
  const { nodes, materials } = useGLTF('assets/models2/scene.gltf')
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.y += 0.0020));

  return (
    <group receiveShadow {...props} scale={[1.2, 1.2, 1]} position={[0, 0, 0]} ref={mesh} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[1.22, 1.05, 1.22]}>
          <mesh geometry={nodes.Plane_0.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.002']} />
        </group>
        <group position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.4, 1.36, 1.36]}>
          <mesh geometry={nodes.Plane001_0.geometry} material={materials['Material.001']} />
        </group>
      </group>
    </group>
  )
}

