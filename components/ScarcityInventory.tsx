'use client'

import { useEffect, useState } from 'react'
import { Package, AlertTriangle, CheckCircle } from 'lucide-react'

interface InventoryData {
  availableBoxes: number
  maxBoxes: number
}

export default function ScarcityInventory() {
  const [inventory, setInventory] = useState<InventoryData>({ availableBoxes: 20, maxBoxes: 20 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/api/inventory')
        const data = await response.json()
        setInventory(data)
      } catch (error) {
        console.error('Error fetching inventory:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchInventory()
    const interval = setInterval(fetchInventory, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-700 animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-3"></div>
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
      </div>
    )
  }

  const percentage = (inventory.availableBoxes / inventory.maxBoxes) * 100
  const isCritical = inventory.availableBoxes <= 3
  const isLow = inventory.availableBoxes <= 7 && inventory.availableBoxes > 3
  const isSoldOut = inventory.availableBoxes === 0

  // Dynamic messaging based on inventory levels
  const getScarcityMessage = () => {
    if (isSoldOut) return "SOLD OUT FOR TODAY"
    if (isCritical) return "ALMOST GONE!"
    if (isLow) return "RUNNING LOW!"
    return "LIMITED AVAILABILITY"
  }

  const getUrgencyMessage = () => {
    if (isSoldOut) return "Check back tomorrow for fresh drops"
    if (isCritical) return `ONLY ${inventory.availableBoxes} LEFT - Order now before they're gone!`
    if (isLow) return `Only ${inventory.availableBoxes} boxes remaining today`
    return `${inventory.availableBoxes} of ${inventory.maxBoxes} boxes available today`
  }

  const getColorScheme = () => {
    if (isSoldOut) return {
      border: 'border-red-500',
      bg: 'bg-red-900/20',
      text: 'text-red-500',
      icon: 'text-red-500',
      bar: 'bg-red-500'
    }
    if (isCritical) return {
      border: 'border-red-500',
      bg: 'bg-red-900/10',
      text: 'text-red-400',
      icon: 'text-red-500',
      bar: 'bg-red-500'
    }
    if (isLow) return {
      border: 'border-yellow-500',
      bg: 'bg-yellow-900/10',
      text: 'text-yellow-400',
      icon: 'text-yellow-500',
      bar: 'bg-yellow-500'
    }
    return {
      border: 'border-green-500',
      bg: 'bg-green-900/10',
      text: 'text-green-400',
      icon: 'text-green-500',
      bar: 'bg-green-500'
    }
  }

  const colors = getColorScheme()
  const IconComponent = isSoldOut ? AlertTriangle : isLow || isCritical ? AlertTriangle : CheckCircle

  return (
    <div className={`px-8 py-6 rounded-xl border-2 ${colors.border} ${colors.bg} relative overflow-hidden`}>
      {/* Pulsing background for critical inventory */}
      {isCritical && !isSoldOut && (
        <div className="absolute inset-0 bg-red-500 opacity-5 animate-pulse"></div>
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <IconComponent className={`w-6 h-6 ${colors.icon}`} />
          <span className={`font-bold text-lg ${colors.text}`}>
            {getScarcityMessage()}
          </span>
        </div>
        
        <div className="text-right">
          <div className={`text-3xl font-bold ${colors.text}`}>
            {inventory.availableBoxes}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide">
            LEFT TODAY
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4 relative z-10">
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 ${colors.bar} ${
              isCritical ? 'animate-pulse' : ''
            }`}
            style={{ width: `${Math.max(percentage, 5)}%` }} // Minimum 5% width for visibility
          ></div>
        </div>
      </div>
      
      {/* Urgency Message */}
      <div className="relative z-10">
        <p className={`text-sm font-medium ${isCritical ? 'text-white' : 'text-gray-300'}`}>
          {getUrgencyMessage()}
        </p>
        
        {!isSoldOut && (
          <div className="mt-2 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${colors.bar} ${isCritical ? 'animate-pulse' : ''}`}></div>
            <span className="text-xs text-gray-400">
              {isCritical ? 'High demand - Order immediately!' : 
               isLow ? 'Popular item - Don\'t wait!' : 
               'Fresh daily drop - Limited quantity'}
            </span>
          </div>
        )}
      </div>
      
      {/* Social Proof */}
      {!isSoldOut && inventory.maxBoxes - inventory.availableBoxes > 0 && (
        <div className="mt-4 pt-3 border-t border-gray-700 relative z-10">
          <p className="text-xs text-gray-400">
            🔥 {inventory.maxBoxes - inventory.availableBoxes} people ordered today
          </p>
        </div>
      )}
    </div>
  )
}
