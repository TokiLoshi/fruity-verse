import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, Text } from '@react-three/drei'

export default function Planets() {
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
        <Float>
          <Text>Welcome to the fruity verse!</Text>
        </Float>
      </group>
    </>
  )
}
