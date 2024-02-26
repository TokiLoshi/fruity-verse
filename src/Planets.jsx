import * as THREE from 'three'
import { CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { ToneMapping, Bloom, EffectComposer } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useControls, folder } from 'leva'

export default function Planets() {
  // Set up the size of the blackhole in the store
  // Constantly check if the size of the blackhold is increasing
  // If the blackhole collides with a planet or a piece of fruit it should get bigger
  // If the blackhole gets too big the game should end

  const sun = useRef()
  const { offset, darkness, luminanceThreshold, height, luminanceSmoothing } = useControls('Effects', {
    'Sun Glow': folder(
      {
        luminanceThreshold: { value: 0.15, min: 0, max: 2 },
        height: { value: 300, min: 0, max: 1000 },
      },
      { collapsed: false },
    ),
  })

  /**
   * Load all of the textures for the planets
   */
  // Abstract1
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
  // const starterX = Math.random() * 5 + 4
  // const starterZ = Math.random() * 8 + 4

  // console.log('StarterX: ', starterX)
  // console.log('StarterZ: ', starterZ)

  const baseXRadius = 5
  const baseZRadius = 8
  const spacing = 6

  const calculateOrbit = (index, baseXRadius, baseZRadius, spacing) => {
    return {
      xRadius: baseXRadius + index * spacing,
      zRadius: baseZRadius + index * (spacing / 2),
    }
  }

  const planetsData = [
    {
      id: 1,
      name: 'Abstract1',
      position: [4, 0, 4],
      ref: abstract1MeshRef,
      xRadius: calculateOrbit(0, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(0, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 1.3,
      scale: Math.random(),
    },
    {
      id: 2,
      name: 'Abstract8',
      position: [8, 0, 4],
      ref: abstract8MeshRef,
      xRadius: calculateOrbit(1, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(1, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 1.2,
      scale: Math.random(),
    },
    {
      id: 3,
      name: 'Alien',
      position: [10, 0, -10],
      ref: alienMeshRef,
      xRadius: calculateOrbit(2, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(2, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 1.1,
      scale: Math.random(),
    },
    {
      id: 4,
      name: 'Coffee',
      position: [10, 0, 10],
      ref: coffeeMeshRef,
      xRadius: calculateOrbit(3, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(3, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 1,
      scale: Math.random(),
    },
    {
      id: 5,
      name: 'Fur',
      position: [12, 0, 8],
      ref: furMeshRef,
      xRadius: calculateOrbit(4, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(4, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.9,
      scale: Math.random(),
    },
    {
      id: 6,
      name: 'Gems',
      position: [6, 0, 6],
      ref: gemsMeshRef,
      xRadius: calculateOrbit(5, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(5, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.8,
      scale: Math.random(),
    },
    {
      id: 7,
      name: 'Mud',
      position: [4, 0, 4],
      ref: mudMeshRef,
      xRadius: calculateOrbit(6, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(6, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.7,
      scale: Math.random(),
    },

    {
      id: 8,
      name: 'Pumpkin',
      position: [2, 0, 4],
      ref: pumpkinMeshRef,
      xRadius: calculateOrbit(7, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(7, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.6,
      scale: Math.random(),
    },
    {
      id: 9,
      name: 'rock047',
      position: [14, 0, 9],
      ref: rock047MeshRef,
      xRadius: calculateOrbit(8, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(8, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.5,
      scale: Math.random(),
    },
    {
      id: 10,
      name: 'waffles',
      position: [16, 0, 6],
      ref: waffleMeshRef,
      xRadius: calculateOrbit(9, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(9, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.4,
      scale: Math.random(),
    },
    {
      id: 11,
      name: 'watermelon',
      position: [-4, 0, 8],
      ref: watermelonMeshRef,
      xRadius: calculateOrbit(10, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(10, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.3,
      scale: Math.random(),
    },
    {
      id: 12,
      name: 'weGround',
      position: [-1, 0, -3],
      ref: wetGroundMeshRef,
      xRadius: calculateOrbit(11, baseXRadius, baseZRadius, spacing).xRadius,
      zRadius: calculateOrbit(11, baseXRadius, baseZRadius, spacing).zRadius,
      angularVelocity: 0.2,
      scale: Math.random(),
    },
  ]

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()
    planetsData.forEach((planet, index) => {
      if (planet.ref.current) {
        planet.ref.current.position.x = planet.xRadius * Math.cos(time * planet.angularVelocity)
        planet.ref.current.position.z = planet.zRadius * Math.sin(time * planet.angularVelocity)
      }
    })
  })

  // Add colliders to the scene
  // Add Phsyics
  // Larger planets should either rotate slower or move faster - need to look this up
  // On hover the planets should display their name
  // Sound effects on howler.js
  // Make sizes random

  // If any of the planets touch the black hole decrease their scale and make them disappear
  return (
    <>
      <Physics debug>
        <group>
          {/* Sun */}
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={luminanceThreshold} mipmapBlur />
            <mesh ref={sun} scale={3}>
              <sphereGeometry />
              <meshStandardMaterial emissive="orange" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <ToneMapping />
          </EffectComposer>
          {/* Abstract1 Planet */}
          <mesh ref={abstract1MeshRef}>
            <sphereGeometry />
            <meshStandardMaterial
              map={abstract1ColorMap}
              normalMap={abstract1NormalMap}
              displacementMap={abstract1RoughnessMap}
              aoMap={abstract1OcclusionMap}
            />
          </mesh>

          {/* Abstract8 Planet */}
          <mesh position={[8, 0, 4]} ref={abstract8MeshRef}>
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
          <mesh position={[10, 0, -10]} ref={alienMeshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              map={alienColorMap}
              normalMap={alienNormalMap}
              roughnessMap={alienRoughnessMap}
              aoMap={alienOcclusionMap}
            />
          </mesh>

          {/* Fur Planet */}
          <mesh position={[12, 0, 8]} ref={furMeshRef}>
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
              color="#492201"
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
      </Physics>
    </>
  )
}
