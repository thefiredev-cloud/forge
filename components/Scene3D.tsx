'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function CentralCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#f97316"
        emissive="#f97316"
        emissiveIntensity={0.3}
        wireframe={false}
      />
    </mesh>
  )
}

function OrbitingCubes() {
  const groupRef = useRef<THREE.Group>(null)

  const cubes = useMemo(() => {
    const count = 12
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      const radiusVariance = 0.3
      const radius = 2.0 + (i % 3) * radiusVariance
      const yOffset = ((i % 3) - 1) * 0.5
      const size = 0.12 + (i % 4) * 0.04
      return { angle, radius, yOffset, size, speed: 0.2 + (i % 3) * 0.1 }
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const cube = cubes[i]
      const t = state.clock.elapsedTime * cube.speed
      child.position.x = Math.cos(cube.angle + t) * cube.radius
      child.position.z = Math.sin(cube.angle + t) * cube.radius
      child.position.y = cube.yOffset + Math.sin(t * 1.5 + i) * 0.2
      child.rotation.x = t * 1.5
      child.rotation.y = t * 2
    })
  })

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i}>
          <boxGeometry args={[cube.size, cube.size, cube.size]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#f97316' : '#fb923c'}
            emissive={i % 2 === 0 ? '#f97316' : '#fb923c'}
            emissiveIntensity={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}
    </group>
  )
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const count = 8
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2
      const radius = 2.0
      return [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
      ]
    })
  }, [])

  return (
    <group>
      {lines.map((points, i) => {
        const positions = new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        return (
          <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#f97316', transparent: true, opacity: 0.15 }))} />
        )
      })}
    </group>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#f97316" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#fb923c" />
        <CentralCube />
        <OrbitingCubes />
        <ConnectionLines />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  )
}
