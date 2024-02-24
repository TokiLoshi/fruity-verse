import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { useMemo, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Planets() {
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

  useFrame((state, delta) => {
    const orbitalRadius = 5
    const time = state.clock.getElapsedTime()
    abstract1MeshRef.current.position.z = Math.cos(time * 0.2)

    abstract1MeshRef.current.rotation.y = time * 0.2
    abstract8MeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius

    abstract8MeshRef.current.rotation.y = time * 0.2
    alienMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    alienMeshRef.current.rotation.y = time * 0.2
    coffeeMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    coffeeMeshRef.current.rotation.y = time * 0.2
    furMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    furMeshRef.current.rotation.y = time * 0.2
    gemsMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    gemsMeshRef.current.rotation.y = time * 0.2
    mudMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    mudMeshRef.current.rotation.y = time * 0.2
    pumpkinMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    pumpkinMeshRef.current.rotation.y = time * 0.2
    rock047MeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    rock047MeshRef.current.rotation.y = time * 0.2
    waffleMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    waffleMeshRef.current.rotation.y = time * 0.2
    watermelonMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    watermelonMeshRef.current.rotation.y = time * 0.2
    wetGroundMeshRef.current.position.x = Math.cos(time * 0.2) * orbitalRadius
    wetGroundMeshRef.current.rotation.y = time * 0.2
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
  return (
    <>
      <group>
        {/* Abstract1 Planet */}
        <mesh position={[-2, -2, -2]} ref={abstract1MeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={abstract1ColorMap}
            normalMap={abstract1NormalMap}
            displacementMap={abstract1RoughnessMap}
            aoMap={abstract1OcclusionMap}
          />
        </mesh>

        {/* Abstract8 Planet */}
        <mesh position={[-8, -8, -8]} ref={abstract8MeshRef}>
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
        <mesh position={[-10, -10, -10]} ref={alienMeshRef}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={alienColorMap}
            normalMap={alienNormalMap}
            roughnessMap={alienRoughnessMap}
            aoMap={alienOcclusionMap}
          />
        </mesh>

        {/* Fur Planet */}
        <mesh position={[8, 8, 8]} ref={furMeshRef}>
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
        <mesh position={[10, 10, 10]} ref={coffeeMeshRef}>
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

        <mesh position={[6, 6, 6]} ref={gemsMeshRef}>
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
        <mesh position={[4, 4, 4]} ref={mudMeshRef}>
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
        <mesh position={[2, -4, 4]} ref={pumpkinMeshRef}>
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
        <mesh position={[0, -2, -6]} ref={rock047MeshRef}>
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
        <mesh position={[2, -5, -6]} ref={waffleMeshRef}>
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
        <mesh position={[7, -3, -6]} ref={watermelonMeshRef}>
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
        <mesh position={[4, -6, -6]} ref={wetGroundMeshRef}>
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
