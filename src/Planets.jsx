import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Planets() {
  // Abstract1

  /**
   * Load all of the textures for the planets
   */
  const abstract1MeshRef = useRef()
  const [abstract1ColorMap, abstract1NormalMap, abstract1RoughnessMap, abstract1OcclusionMap] = useLoader(
    TextureLoader,
    [
      './textures/abstract1/color.jpg',
      './textures/abstract1/normal.jpg',
      './textures/abstract1/roughness.png',
      './textures/abstract1/occlusion.jpg',
    ],
  )

  // Abstract8
  const abstract8MeshRef = useRef()
  const [abstract8ColorMap, abstract8NormalMap, abstract8RoughnessMap, abstract8OcclusionMap] = useLoader(
    TextureLoader,
    [
      './textures/abstract8/color.jpg',
      './textures/abstract8/normal.jpg',
      './textures/abstract8/roughness.jpg',
      './textures/abstract8/occlusion.jpg',
    ],
  )

  // Alien
  const alienMeshRef = useRef()
  const [alienColorMap, alienNormalMap, alienRoughnessMap, alienOcclusionMap] = useLoader(TextureLoader, [
    './textures/alien/color.jpg',
    './textures/alien/normal.jpg',
    './textures/alien/displacement.png',
    './textures/alien/occlusion.jpg',
  ])

  // Coffee
  const coffeeMeshRef = useRef()
  const [coffeeColorMap, coffeeNormalMap, coffeeRoughnessMap, coffeeOcculsionMap, coffeeDisplacementMap] = useLoader(
    TextureLoader,
    [
      './textures/coffee/color.jpg',
      './textures/coffee/normal.jpg',
      './textures/coffee/roughness.jpg',
      './textures/coffee/occlusion.jpg',
      './textures/coffee/displacement.png',
    ],
  )

  // Fur
  const furMeshRef = useRef()
  const [furColorMap, furNormalMap, furOcclusionMap, furRoughnessMap, furNHeightlMap] = useLoader(TextureLoader, [
    './textures/fur/color.jpg',
    './textures/fur/normal.jpg',
    './textures/fur/roughness.jpg',
    './textures/fur/occlusion.jpg',
    './textures/fur/height.png',
  ])

  // Gems
  const gemsMeshRef = useRef()
  const [gemsColorMap, gemsDisplacementMap, gemsNormalMap, gemsRoughnessMap, gemsOcclusionMap] = useLoader(
    TextureLoader,
    [
      './textures/gems/color.jpg',
      './textures/gems/displacement.png',
      './textures/gems/normal.jpg',
      './textures/gems/roughness.jpg',
      './textures/gems/occlusion.jpg',
    ],
  )

  // Mud
  const mudMeshRef = useRef()
  const [mudColorMap, mudHeightMap, mudNormalMap, mudOcclusionMap, mudRoughnessMap] = useLoader(TextureLoader, [
    './textures/mud/color.jpg',
    './textures/mud/height.png',
    './textures/mud/normal.jpg',
    './textures/mud/occlusion.jpg',
    './textures/mud/roughness.jpg',
  ])

  // Pumpkin
  const pumpkinMeshRef = useRef()
  const [pumpkinColorMap, pumpkinHeightMap, pumpkinNormalMap, pumpkinRoughnessMap, pumpkinOcclusionMap] = useLoader(
    TextureLoader,
    [
      './textures/pumpkin/color.jpg',
      './textures/pumpkin/height.png',
      './textures/pumpkin/normal.jpg',
      './textures/pumpkin/roughness.jpg',
      './textures/pumpkin/occlusion.jpg',
    ],
  )

  // Rock047
  const rock047MeshRef = useRef()
  const [rock047ColorMap, rock047NormalMap, rock047RoughnessMap, rock047OcclusionMap, rock047heightMap] = useLoader(
    TextureLoader,
    [
      './textures/rock047/color.jpg',
      './textures/rock047/normal.jpg',
      './textures/rock047/roughness.jpg',
      './textures/rock047/occlusion.jpg',
      './textures/rock047/height.png',
    ],
  )

  // waffle
  const waffleMeshRef = useRef()
  const [waffleColorMap, waffleHeightMap, waffleNormalMap, waffleOcclusionMap, waffleRoughnessMap] = useLoader(
    TextureLoader,
    [
      './textures/waffle/color.jpg',
      './textures/waffle/height.png',
      './textures/waffle/normal.jpg',
      './textures/waffle/occlusion.jpg',
      './textures/waffle/roughness.jpg',
    ],
  )

  // watermelon
  const watermelonMeshRef = useRef()
  const [watermelonColorMap, watermelonHeightMap, watermelonNormalMap, watermelonOcclusionMap, watermelonRoughnessMap] =
    useLoader(TextureLoader, [
      './textures/watermelon/color.jpg',
      './textures/watermelon/height.png',
      './textures/watermelon/normal.jpg',
      './textures/watermelon/occlusion.jpg',
      './textures/watermelon/roughness.jpg',
    ])

  // wetGround
  const wetGroundMeshRef = useRef()
  const [wetGroundColorMap, wetGroundHeightMap, wetGroundNormalMap, wetGroundOcclusionMap, wetGroundRoughnessMap] =
    useLoader(TextureLoader, [
      './textures/wetGround/color.jpg',
      './textures/wetGround/height.png',
      './textures/wetGround/normal.jpg',
      './textures/wetGround/occlusion.jpg',
      './textures/wetGround/roughness.jpg',
    ])

  // Geek Culture Tutorial on creating ecliptics and a solar system
  // Started with xRadius of 5 and z Radius of 8
  // Ones closes to sun should have a faster velocity
  const starterX = 5
  const starterZ = 8

  const planetsData = [
    {
      ref: abstract1MeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    {
      ref: abstract8MeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    {
      ref: alienMeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    {
      ref: coffeeMeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    {
      ref: furMeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    {
      ref: gemsMeshRef,
      xRadius: starterX,
      zRadius: starterZ,
      angularVelocity: 1 / starterX,
      scale: 1,
    },
    // Mud Planet is closest to the sun
    { ref: mudMeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
    { ref: pumpkinMeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
    { ref: rock047MeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
    { ref: waffleMeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
    { ref: watermelonMeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
    { ref: wetGroundMeshRef, xRadius: starterX, zRadius: starterZ, angularVelocity: 1 / starterX, scale: 1 },
  ]

  const baseXRadius = 5
  const baseZRadius = 8
  const spacing = 2

  planetsData.forEach((planet, index) => {
    if (planet.ref.current) {
      const xRadiusIncrement = index * spacing
      const zRadiusIncrement = index * (spacing / 2)

      planet.xRadius = baseXRadius + xRadiusIncrement
      planet.zRadius = baseZRadius + zRadiusIncrement
      const initialAngle = Math.random() * (Math.PI * 2)
      planet.ref.current.position.x = planet.xRadius * Math.cos(initialAngle)
      planet.ref.current.position.z = planet.zRadius * Math.sin(initialAngle)
    }
  })

  useFrame((state, delta) => {
    const orbitalRadius = 50
    const time = state.clock.getElapsedTime()
    planetsData.forEach((planet, index) => {
      if (planet.ref.current) {
        const { ref, xRadius, zRadius, angularVelocity } = planet
        ref.current.position.x = planet.xRadius * Math.cos(time * planet.angularVelocity)
        ref.current.position.z = planet.zRadius * Math.sin(time * planet.angularVelocity)
      }
    })
  })

  // Add colliders to the scene
  // Add Phsyics
  // Add rings around the sun? with a shader? This should be an oval
  // Make the planets rotate around the sun
  // Larger planets should either rotate slower or move faster - need to look this up
  // On hover the planets should display their name
  // Sound effects on howler.js
  // Make sizes random

  // If any of the planets touch the black hole decrease their scale and make them disappear

  // Temporarily removed the random scale as we will want variations in the size
  return (
    <>
      <group>
        {/* Abstract1 Planet */}
        <mesh position={[0, 0, 0]} ref={abstract1MeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={abstract1ColorMap}
            normalMap={abstract1NormalMap}
            displacementMap={abstract1RoughnessMap}
            aoMap={abstract1OcclusionMap}
          />
        </mesh>

        {/* Abstract8 Planet */}
        <mesh position={[-8, 0, -8]} ref={abstract8MeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={abstract8ColorMap}
            normalMap={abstract8NormalMap}
            roughnessMap={abstract8RoughnessMap}
            aoMap={abstract8OcclusionMap}
          />
        </mesh>
        {/* 
      Alien Planet */}
        <mesh position={[-10, 0, -10]} ref={alienMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={alienColorMap}
            normalMap={alienNormalMap}
            roughnessMap={alienRoughnessMap}
            aoMap={alienOcclusionMap}
          />
        </mesh>

        {/* Fur Planet */}
        <mesh position={[8, 0, 8]} ref={furMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={furColorMap}
            normalMap={furNormalMap}
            aoMap={furOcclusionMap}
            roughnessMap={furRoughnessMap}
            heightMap={furNHeightlMap}
          />
        </mesh>

        {/* Coffee Planet */}
        <mesh position={[10, 0, 10]} ref={coffeeMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={coffeeColorMap}
            normalMap={coffeeNormalMap}
            roughnessMap={coffeeRoughnessMap}
            aoMap={coffeeOcculsionMap}
            // displacementMap={coffeeDisplacementMap}
          />
        </mesh>

        {/* Gems Planet */}

        <mesh position={[6, 0, 6]} ref={gemsMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={gemsColorMap}
            displacementMap={gemsDisplacementMap}
            normalMap={gemsNormalMap}
            roughnessMap={gemsRoughnessMap}
            aoMap={gemsOcclusionMap}
          />
        </mesh>

        {/* Mud Planet */}
        <mesh position={[4, 0, 4]} ref={mudMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={mudColorMap}
            heightMap={mudHeightMap}
            normalMap={mudNormalMap}
            roughnessMap={mudRoughnessMap}
            aoMap={mudOcclusionMap}
          />
        </mesh>

        {/* Pumpkin Planet */}
        <mesh position={[2, 0, 4]} ref={pumpkinMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={pumpkinColorMap}
            heightMap={pumpkinHeightMap}
            normalMap={pumpkinNormalMap}
            roughnessMap={pumpkinRoughnessMap}
            aoMap={pumpkinOcclusionMap}
          />
        </mesh>

        {/* Rock047 Planet */}
        <mesh position={[0, 0, -6]} ref={rock047MeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={rock047ColorMap}
            heightMap={rock047heightMap}
            normalMap={rock047NormalMap}
            roughnessMap={rock047RoughnessMap}
            aoMap={rock047OcclusionMap}
          />
        </mesh>

        {/* waffle Planet */}
        <mesh position={[2, 0, -6]} ref={waffleMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={waffleColorMap}
            heightMap={waffleHeightMap}
            normalMap={waffleNormalMap}
            roughnessMap={waffleRoughnessMap}
            aoMap={waffleOcclusionMap}
          />
        </mesh>

        {/* watermelon Planet */}
        <mesh position={[7, 0, -6]} ref={watermelonMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={watermelonColorMap}
            heightMap={watermelonHeightMap}
            normalMap={watermelonNormalMap}
            roughnessMap={watermelonRoughnessMap}
            aoMap={watermelonOcclusionMap}
          />
        </mesh>

        {/* wetGround Planet */}
        <mesh position={[4, 0, -6]} ref={wetGroundMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={wetGroundColorMap}
            heightMap={wetGroundHeightMap}
            normalMap={wetGroundNormalMap}
            roughnessMap={wetGroundRoughnessMap}
            aoMap={wetGroundOcclusionMap}
          />
        </mesh>
      </group>
    </>
  )
}
