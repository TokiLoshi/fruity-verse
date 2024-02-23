import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Planets() {

  // Abstract1
  const colorMap = useLoader(TextureLoader, './textures/alien/color.jpg')
  const [abstract1ColorMap, abstract1NormalMap, abstract1RoughnessMap,  abstract1OcclusionMap] = useLoader(TextureLoader, [
    './textures/abstract1/color.jpg',
    './textures/abstract1/normal.jpg',
    './textures/abstract1/roughness.png',
    './textures/abstract1/occlusion.jpg',
  ])

  const abstract1MeshRef = useRef()

  // Abstract8
  const [abstract8ColorMap, abstract8NormalMap, abstract8RoughnessMap, abstract8OcclusionMap] = useLoader(TextureLoader, [
    './textures/abstract8/color.jpg',
    './textures/abstract8/normal.jpg',
    './textures/abstract8/roughness.jpg',
    './textures/abstract8/occlusion.jpg'
  ])

  // Alien
  const [alienColorMap, alienNormalMap, alienRoughnessMap, alienOcclusionMap] = useLoader(TextureLoader, ['./textures/alien/color.jpg', './textures/alien/normal.jpg', './textures/alien/displacement.png', './textures/alien/occlusion.jpg'] )

  // Coffee
  const coffeeMap = useLoader(TextureLoader, './textures/coffee/color.jpg')
  // Fur
  // Gems
  // Mud
  // Pumpkin
  // Rock047
  // waffle
  // watermelon
  // wetGround

  // Add nine planets
  // Add materials from https://3dtextures.me/
  // Add colliders to the scene
  // Add Phsyics
  // Add rings around the sun? with a shader? This should be an oval
  // Make the planets rotate around the sun
  // Larger planets should either rotate slower or move faster - need to look this up
  // On hover the planets should display their name
  // Sound effects on howler.js

  // If any of the planets touch the black hole decrease their scale and make them disappear
  return (
    <>
      <group>
        {/* Abstract1 Planet */}
         <mesh position={[-2, -2, -2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={abstract1ColorMap} normalMap={abstract1NormalMap} displacementMap={abstract1RoughnessMap} aoMap={abstract1OcclusionMap}/>
      </mesh>

      {/* Abstract8 Planet */}
      <mesh position={[-8, -8, -8]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={abstract8ColorMap} normalMap={abstract8NormalMap} roughnessMap={abstract8RoughnessMap} aoMap={abstract8OcclusionMap}/>
      </mesh>
{/* 
      Alien Planet */}
       <mesh position={[-10, -10, -10]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={alienColorMap} normalMap={alienNormalMap} roughnessMap={alienRoughnessMap} aoMap={alienOcclusionMap}/>
      </mesh>

      </group>
    </>
  )
}
