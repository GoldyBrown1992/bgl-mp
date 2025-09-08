'use client'

import { useState } from 'react'
import Image from 'next/image'
import { RotateCw, ZoomIn, ZoomOut } from 'lucide-react'

export default function ProductShowcase() {
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)

  const handleRotate = () => {
    setRotation(prev => prev + 90)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.8))
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gold-500">
      {/* Controls */}
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={handleRotate}
          className="p-2 bg-black/50 hover:bg-black/70 border border-gold-500 rounded-lg text-gold-500 transition-all"
          title="Rotate"
        >
          <RotateCw className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomIn}
          className="p-2 bg-black/50 hover:bg-black/70 border border-gold-500 rounded-lg text-gold-500 transition-all"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-black/50 hover:bg-black/70 border border-gold-500 rounded-lg text-gold-500 transition-all"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image */}
      <div className="flex justify-center items-center min-h-[400px] overflow-hidden">
        <div 
          className="transition-all duration-500 ease-in-out"
          style={{ 
            transform: `rotate(${rotation}deg) scale(${zoom})`,
            transformOrigin: 'center'
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop&crop=center"
            alt="Brown Girl Lifts Power Box - High Protein Meal"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          Brown Girl Lifts x Goldy Brown
        </h2>
        <h3 className="text-3xl font-bold text-gold-500 mb-3">
          POWER BOX
        </h3>
        <p className="text-gray-300 max-w-md mx-auto">
          Premium high-protein meals crafted for strong women who lift. 
          Every box delivers 100g+ of quality protein and 1,200 calories 
          of pure fuel for your fitness journey.
        </p>
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-baseline gap-2 bg-gold-500 text-black px-6 py-3 rounded-lg">
          <span className="text-sm font-medium">ONLY</span>
          <span className="text-4xl font-bold">$20</span>
          <span className="text-sm font-medium">PER BOX</span>
        </div>
      </div>

      {/* Premium Badge */}
      <div className="absolute top-8 left-8">
        <div className="bg-gold-500 text-black px-3 py-1 rounded-full text-xs font-bold">
          PREMIUM QUALITY
        </div>
      </div>
    </div>
  )
}
