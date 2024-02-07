import { Bloom, EffectComposer } from '@react-three/postprocessing'
export default function Sun ({props}) {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial props={props} />
    </mesh>
  )
}