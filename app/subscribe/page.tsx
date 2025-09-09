'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Crown, Check, Star, Truck, Shield, Zap } from 'lucide-react'

function SubscribeContent() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

  // ... rest of your component code stays the same

  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter your email address')
      return
    }

    setLoading(true)
    
    // In a real implementation, you would handle the Stripe subscription flow here
    // For now, we'll just show a placeholder
    setTimeout(() => {
      alert('Subscription feature coming soon! Check back later.')
      setLoading(false)
    }, 1000)
  }

  const benefits = [
    { icon: Star, title: '25 Power Boxes', description: 'Monthly delivery of premium meal boxes' },
    { icon: Truck, title: 'Free Delivery', description: 'No shipping costs ever' },
    { icon: Shield, title: 'Priority Access', description: 'Never miss a drop' },
    { icon: Zap, title: 'Exclusive Recipes', description: 'Subscriber-only meal variations' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gold-500 bg-black/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-gold-500" />
              <div>
                <h1 className="text-xl font-bold text-gold-500">Brown Girl Lifts</h1>
                <p className="text-xs text-gray-400">x Goldy Brown</p>
              </div>
            </div>
            <a href="/" className="text-gray-400 hover:text-gold-500 transition-colors">
              ← Back to Shop
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">POWER</span>
            <span className="text-gold-500"> SUBSCRIPTION</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Never run out of fuel again. Get 25 Power Boxes delivered monthly 
            with exclusive perks and free shipping.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-gold-500 text-black px-8 py-4 rounded-lg text-2xl font-bold">
            <span>Only $500/month</span>
            <span className="text-sm bg-black text-gold-500 px-3 py-1 rounded-full">
              Save $100
            </span>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">SUBSCRIPTION</span>
            <span className="text-gold-500"> BENEFITS</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-black rounded-xl border border-gray-700">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gold-500/20 rounded-full">
                      <Icon className="w-8 h-8 text-gold-500" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-xl border-2 border-gold-500">
            <h3 className="text-2xl font-bold text-center mb-6">Start Your Subscription</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">25 Power Boxes</span>
                <span className="text-white">$600.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-500">Subscription Discount</span>
                <span className="text-green-500">-$100.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Shipping</span>
                <span className="text-green-500">FREE</span>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-gold-500">$500.00/month</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubscribe}
              disabled={loading || !email}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                'Subscribe Now'
              )}
            </button>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Cancel anytime • No commitment • Secure payment
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default function SubscribePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubscribeContent />
    </Suspense>
  )
}
