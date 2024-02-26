import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Suspense } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-50, 13, 6],
    }}>
    <Suspense fallback={null}>
      <Experience />
    </Suspense>
  </Canvas>,
)
