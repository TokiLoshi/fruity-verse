import { useFrame } from '@react-three/fiber'
import { Sparkles, Sky, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Experience() {
  const cube = useRef()
  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
  })
  return (
    <>
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={0.5} />
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh position-x={1} ref={cube}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Sparkles color="purple" speed={0.2} scale={3} count={100} opacity={1} />
    </>
  )
}
