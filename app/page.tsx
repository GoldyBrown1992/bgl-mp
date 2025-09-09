'use client'

import { useState } from 'react'
import { Home, ShoppingCart, User, Menu } from 'lucide-react'
import ScarcityInventory from '@/components/ScarcityInventory'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* App Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Power Box</h1>
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-4 max-w-lg mx-auto">
        {/* Scarcity Alert */}
        <div className="mb-4">
          <ScarcityInventory />
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          <div className="aspect-square bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=800&fit=crop"
              alt="Power Box"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Quick Macros */}
          <div className="grid grid-cols-4 gap-2 p-4 bg-amber-50">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">100g</p>
              <p className="text-xs text-gray-600">Protein</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">1200</p>
              <p className="text-xs text-gray-600">Calories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">85g</p>
              <p className="text-xs text-gray-600">Carbs</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">35g</p>
              <p className="text-xs text-gray-600">Fats</p>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Daily Power Box</h2>
          <p className="text-gray-600 text-sm mb-4">
            Premium protein-packed meal for women who lift. Fresh ingredients, perfect macros.
          </p>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-gray-900">$20</span>
            <span className="text-gray-500 text-sm">per box</span>
          </div>
        </div>

        {/* Purchase Options */}
        <div className="space-y-3">
          <button className="w-full bg-amber-500 text-white py-4 px-6 rounded-full font-semibold text-lg">
            Buy Single Box - $20
          </button>
          
          <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-full font-semibold text-lg">
            Subscribe Monthly - $499.99
            <span className="block text-sm font-normal opacity-80">Save $224/month</span>
          </button>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="grid grid-cols-3 gap-1">
          <button 
            onClick={() => setActiveTab('home')}
            className={`py-3 px-4 flex flex-col items-center gap-1 ${
              activeTab === 'home' ? 'text-amber-600' : 'text-gray-400'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`py-3 px-4 flex flex-col items-center gap-1 ${
              activeTab === 'orders' ? 'text-amber-600' : 'text-gray-400'
            }`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Orders</span>
          </button>
          <button 
            onClick={() => setActiveTab('account')}
            className={`py-3 px-4 flex flex-col items-center gap-1 ${
              activeTab === 'account' ? 'text-amber-600' : 'text-gray-400'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Account</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
