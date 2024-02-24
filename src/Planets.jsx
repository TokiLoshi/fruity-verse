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
  const [abstract1ColorMap, abstract1NormalMap, abstract1RoughnessMap, abstract1OcclusionMap] = useLoader(
    TextureLoader,
    [
      './textures/abstract1/color.jpg',
      './textures/abstract1/normal.jpg',
      './textures/abstract1/roughness.png',
      './textures/abstract1/occlusion.jpg',
    ],
  )

  const abstract1MeshRef = useRef()

  // Abstract8
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
  const [alienColorMap, alienNormalMap, alienRoughnessMap, alienOcclusionMap] = useLoader(TextureLoader, [
    './textures/alien/color.jpg',
    './textures/alien/normal.jpg',
    './textures/alien/displacement.png',
    './textures/alien/occlusion.jpg',
  ])

  // Coffee
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
  const [furColorMap, furNormalMap, furOcclusionMap, furRoughnessMap, furNHeightlMap] = useLoader(TextureLoader, [
    './textures/fur/color.jpg',
    './textures/fur/normal.jpg',
    './textures/fur/roughness.jpg',
    './textures/fur/occlusion.jpg',
    './textures/fur/height.png',
  ])
  // Gems
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
  const [mudColorMap, mudHeightMap, mudNormalMap, mudOcclusionMap, mudRoughnessMap] = useLoader(TextureLoader, [
    './textures/mud/color.jpg',
    './textures/mud/height.png',
    './textures/mud/normal.jpg',
    './textures/mud/occlusion.jpg',
    './textures/mud/roughness.jpg',
  ])

  // Pumpkin
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
  const [watermelonColorMap, watermelonHeightMap, watermelonNormalMap, watermelonOcclusionMap, watermelonRoughnessMap] =
    useLoader(TextureLoader, [
      './textures/watermelon/color.jpg',
      './textures/watermelon/height.png',
      './textures/watermelon/normal.jpg',
      './textures/watermelon/occlusion.jpg',
      './textures/watermelon/roughness.jpg',
    ])

  // wetGround
  const [wetGroundColorMap, wetGroundHeightMap, wetGroundNormalMap, wetGroundOcclusionMap, wetGroundRoughnessMap] =
    useLoader(TextureLoader, [
      './textures/wetGround/color.jpg',
      './textures/wetGround/height.png',
      './textures/wetGround/normal.jpg',
      './textures/wetGround/occlusion.jpg',
      './textures/wetGround/roughness.jpg',
    ])

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
          <meshStandardMaterial
            map={abstract1ColorMap}
            normalMap={abstract1NormalMap}
            displacementMap={abstract1RoughnessMap}
            aoMap={abstract1OcclusionMap}
          />
        </mesh>

        {/* Abstract8 Planet */}
        <mesh position={[-8, -8, -8]}>
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
        <mesh position={[-10, -10, -10]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            map={alienColorMap}
            normalMap={alienNormalMap}
            roughnessMap={alienRoughnessMap}
            aoMap={alienOcclusionMap}
          />
        </mesh>

        {/* Fur Planet */}
        <mesh position={[8, 8, 8]}>
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
        <mesh position={[10, 10, 10]}>
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

        <mesh position={[6, 6, 6]}>
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
        <mesh position={[4, 4, 4]}>
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
        <mesh position={[2, -4, 4]}>
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
        <mesh position={[0, -2, -6]}>
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
        <mesh position={[2, -5, -6]}>
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
        <mesh position={[7, -3, -6]}>
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
        <mesh position={[4, -6, -6]}>
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
