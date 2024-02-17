import { useFrame } from '@react-three/fiber'
import { Sparkles, Sky, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useControls, folder } from 'leva'
import { Vignette, ToneMapping, Bloom, EffectComposer } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { BlendFunction } from 'postprocessing'
import Sun from './Sun'
import { vertexShader, fragmentShader } from './shaders'
import * as THREE from 'three'

console.log(vertexShader)
console.log(fragmentShader)

export default function Experience() {
  const sun = useRef()
  const torus = useRef()
  console.log(EffectComposer)

  useFrame((state, delta) => {
    // sun.current.rotation.y += delta * 0.2
    // console.log(sun.current.position.y)
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
      <color args={['#000000']} attach="background" />
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
    </>
  )
}
