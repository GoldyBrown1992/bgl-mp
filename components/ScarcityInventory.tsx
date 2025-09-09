'use client'

import { useEffect, useState } from 'react'
import { AlertCircle } from 'lucide-react'

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
    const interval = setInterval(fetchInventory, 15000)
    return () => clearInterval(interval)
  }, [])

  if (loading) return null

  const isLow = inventory.availableBoxes <= 5

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
      isLow ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
    }`}>
      <AlertCircle className="w-4 h-4" />
      <span>
        {inventory.availableBoxes === 0 
          ? 'SOLD OUT TODAY' 
          : `Only ${inventory.availableBoxes} boxes left today!`
        }
      </span>
    </div>
  )
}
