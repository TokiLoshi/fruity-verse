import { useFrame } from '@react-three/fiber'
import { Sparkles, Sky, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useControls, folder } from 'leva'
import { EffectComposer, ToneMapping, Bloom } from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import { BlendFunction } from 'postprocessing'

export default function Experience() {
  const sun = useRef()
  console.log(sun.current)

  useFrame((state, delta) => {
    sun.current.rotation.y += delta * 0.2
  })
  const { bloomThreshold, bloomIntensity, bloomRadius } = useControls('Effects', {
    'Sun Glow': folder(
      {
        bloomThreshold: { value: 0.6, min: 0, max: 2, step: 0.1 },
        bloomIntensity: { value: 0.3, min: 0, max: 3, step: 0.1 },
        bloomRadius: { value: 0.9, min: 0, max: 2, step: 0.1 },
        luminanceSmoothing: { value: 0.5, min: 0, max: 1, step: 0.1 },
      },
      { collapsed: false },
    ),
  })

  return (
    <>
      <color args={['#000000']} attach="background" />
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={bloomThreshold}
          intensity={bloomIntensity}
          radius={bloomRadius}
          // luminanceSmoothing={luminanceSmoothing}
        />
        <ToneMapping />
      </EffectComposer>
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />
      <mesh ref={sun}>
        <sphereGeometry />
        <meshStandardMaterial emissive="orange" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <Sparkles color="purple" speed={0.2} scale={3} count={100} opacity={1} />
    </>
  )
}
