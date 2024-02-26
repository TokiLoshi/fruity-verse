import { useFrame } from '@react-three/fiber'
import { Environment, Sparkles, Sky, OrbitControls } from '@react-three/drei'
import { useRef, useState, Suspense } from 'react'
import { useControls, folder } from 'leva'
import { Physics } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { extend } from '@react-three/fiber'
import { vertexShader, fragmentShader } from './shaders'
import * as THREE from 'three'
import Planets from './Planets'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import Consoles from './Consoles.jsx'
import { Noise, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { Loader } from '@react-three/drei'

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

export default function Experience() {
  const [showPopup, setShowPopup] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const sun = useRef()
  const torus = useRef()

  useFrame((state, delta) => {
    torus.current.position.x += Math.sin(delta * 0.2)
    torus.current.rotation.y += Math.sin(delta * 0.5)
  })

  const purpleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    },
    vertexShader,
    fragmentShader,
  })
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <color attach="background" args={['#001122']} />
      {showPopup && <Consoles />}
      <OrbitControls />
      <directionalLight position={[1, 1, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />
      <Sparkles color="purple" speed={0.2} scale={3} count={100} opacity={1} />
      // dougnut mesh around circular mesh
      <mesh position={[-3, 15, 4]} scale={0.8} ref={torus}>
        <torusGeometry />
        <meshStandardMaterial color="#212010" />
      </mesh>
      <Planets />
    </>
  )
}
