'use client'

import { useState } from 'react'
import { Zap, Flame, Wheat, Droplets } from 'lucide-react'

interface MacroData {
  protein: { value: number; description: string }
  calories: { value: number; description: string }
  carbs: { value: number; description: string }
  fat: { value: number; description: string }
}

const macroData: MacroData = {
  protein: { 
    value: 100, 
    description: 'High-quality lean proteins to fuel your gains and recovery.' 
  },
  calories: { 
    value: 1200, 
    description: 'Perfectly balanced calories to support your active lifestyle.' 
  },
  carbs: { 
    value: 85, 
    description: 'Complex carbs for sustained energy throughout your day.' 
  },
  fat: { 
    value: 35, 
    description: 'Healthy fats for hormone production and nutrient absorption.' 
  }
}

export default function MacroTabs() {
  const [activeTab, setActiveTab] = useState<keyof MacroData>('protein')

  const tabs = [
    { key: 'protein', label: 'Protein', icon: Zap, color: 'text-green-400', bg: 'bg-green-500', unit: 'g' },
    { key: 'calories', label: 'Calories', icon: Flame, color: 'text-red-400', bg: 'bg-red-500', unit: 'kcal' },
    { key: 'carbs', label: 'Carbs', icon: Wheat, color: 'text-yellow-400', bg: 'bg-yellow-500', unit: 'g' },
    { key: 'fat', label: 'Fat', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-500', unit: 'g' },
  ] as const

  return (
    <div className="bg-black rounded-xl border border-gold-500 overflow-hidden">
      {/* Tab Headers */}
      <div className="flex">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.key
          
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 px-4 py-4 text-center transition-all duration-300 border-b-2 ${
                isActive 
                  ? `border-gold-500 bg-gold-500/10 ${tab.color}` 
                  : 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm">{tab.label}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {tabs.map((tab) => {
          if (activeTab !== tab.key) return null
          
          const data = macroData[tab.key]
          const Icon = tab.icon
          
          return (
            <div key={tab.key} className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full ${tab.bg} bg-opacity-20`}>
                  <Icon className={`w-8 h-8 ${tab.color}`} />
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${tab.color}`}>
                  {data.value}
                </span>
                <span className="text-gray-400 text-lg ml-1">
                  {tab.unit}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {data.description}
              </p>
              
              {/* Visual indicator */}
              <div className="mt-4 flex justify-center">
                <div className="w-full max-w-xs bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${tab.bg} transition-all duration-1000`}
                    style={{ 
                      width: tab.key === 'protein' ? '90%' : 
                             tab.key === 'calories' ? '85%' : 
                             tab.key === 'carbs' ? '70%' : '60%' 
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
