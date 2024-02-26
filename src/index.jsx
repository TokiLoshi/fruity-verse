import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'

const root = ReactDOM.createRoot(document.getElementById('root'))

function CustomLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <h1 style={{ color: 'black' }}>{progress} % loaded</h1>
    </Html>
  )
}

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-50, 13, 6]
    }}>
    <Suspense fallback={<CustomLoader />}>
      <Experience />
    </Suspense>
  </Canvas>
)
