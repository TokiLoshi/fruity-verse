import { useFrame } from '@react-three/fiber'
import { Environment, Sparkles, Sky, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useControls, folder } from 'leva'
import { Vignette, ToneMapping, Bloom, EffectComposer } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { BlendFunction } from 'postprocessing'
import Sun from './Sun'
import { vertexShader, fragmentShader } from './shaders'
import * as THREE from 'three'
import Planets from './Planets'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

/**
 * Loading Screen
 */
// If the scene is not ready then we should show a loading screen

/**
 * Game Over the Black hole has eaten all the planets and you have failed to escape to the next solar system.
 *
 */

/**
 * Add Restart Button if the user would like to play again
 */

/**
 * Add a score to the game
 * For each fruit the whale eats the score should increase
 * If the score increases play a whale sound
 */

/**
 * Add a points / energy bar to show if the player can escapee
 * Should have global state in our game store to manage this state and display
 */

/**
 * Add a soundtrack that can be toggled
 */

/** Add performances and see where we can optimize */

/** Add fonts and make sure they are open source / open to use  */

// Animation and functionality for black hole eating planet or fruit
const getEaten = () => {
  // The fruit or planet should get smaller
  // When they get to a certain size they should disappear and be deleted from the scen
  // There should be a sound effect when they get eaten
  // They should get removed from the state in the store
  // If no more remain then the game should end
  // If the player touches the black hole it gets eaten and the game ends
  // If the blackhole eats a planet or a piece of fruit it should get bigger
  console.log('Black hole at another planet!')
}

console.log(vertexShader)
console.log(fragmentShader)

export default function Experience() {
  // Load an interesting background using blockade labs
  // https://www.blockade.io/

  const sun = useRef()
  const torus = useRef()

  useFrame((state, delta) => {
    torus.current.position.x += Math.sin(delta * 0.2)
  })
  const { offset, darkness, eskil, luminanceThreshold, height, luminanceSmoothing } = useControls('Effects', {
    'Sun Glow': folder(
      {
        offset: { value: 0.15, min: 0, max: 1 },
        darkness: { value: 0.84, min: 0, max: 1 },
        eskil: { value: true },
        luminanceThreshold: { value: 0.15, min: 0, max: 1 },
        height: { value: 300, min: 0, max: 1000 },
        luminanceSmoothing: { value: 0.9, min: 0, max: 1 },
      },
      { collapsed: false },
    ),
  })
  const purpleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    },
    vertexShader,
    fragmentShader,
  })

  return (
    <>
      {/* <Environment background files="./textures/abstract1/color.jpg" /> */}
      <color attach="background" args={['#ff1122']} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={luminanceThreshold} luminanceSmoothing={luminanceSmoothing} height={height} />

        <ToneMapping />
      </EffectComposer>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />
      <mesh ref={sun}>
        <sphereGeometry />
        <meshStandardMaterial emissive="blue" emissiveIntensity={3} toneMapped={false} />
      </mesh>
      <Sparkles color="purple" speed={0.2} scale={3} count={100} opacity={1} />
      // dougnut mesh around circular mesh
      <mesh position={[-1, 3, 4]} scale={0.5} ref={torus}>
        <torusGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
      <Planets />
    </>
  )
}
