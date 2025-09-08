'use client'

import { useSearchParams } from 'next/navigation'
import { Crown, CheckCircle, Package, Truck, Star } from 'lucide-react'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type') || 'one-time'

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

      {/* Success Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-green-500/20 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-green-500">ORDER</span>
            <span className="text-white"> CONFIRMED!</span>
          </h2>

          {/* Message */}
          <p className="text-xl text-gray-300 mb-8">
            {type === 'subscription' 
              ? 'Welcome to the Power Subscription! Your first box is on its way.'
              : 'Your Power Box has been ordered and will be prepared fresh for delivery.'
            }
          </p>

          {/* Order Details */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">What happens next?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gold-500/20 rounded-full mt-1">
                  <Package className="w-5 h-5 text-gold-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white">Fresh Preparation</h4>
                  <p className="text-gray-400 text-sm">
                    Your Power Box will be prepared fresh with premium ingredients
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/20 rounded-full mt-1">
                  <Truck className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white">Fast Delivery</h4>
                  <p className="text-gray-400 text-sm">
                    {type === 'subscription' 
                      ? 'Monthly delivery on the same date each month'
                      : 'Your box will be delivered within 24-48 hours'
                    }
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/20 rounded-full mt-1">
                  <Star className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white">Fuel Your Goals</h4>
                  <p className="text-gray-400 text-sm">
                    100g+ protein and 1,200 calories of pure nutrition awaits
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          {type === 'subscription' && (
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-6 rounded-xl border border-gold-500 mb-8">
              <h4 className="text-lg font-bold text-gold-500 mb-2">Subscription Benefits</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 25 Power Boxes every month</li>
                <li>• Free delivery (save $10+ per box)</li>
                <li>• Priority access to new flavors</li>
                <li>• Cancel or pause anytime</li>
              </ul>
            </div>
          )}

          {/* Email Confirmation */}
          <div className="bg-blue-900/20 border border-blue-500 p-4 rounded-lg mb-8">
            <p className="text-blue-300 text-sm">
              📧 A confirmation email has been sent to your inbox with all the details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </a>
            {type === 'one-time' && (
              
                href="/subscribe"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg border border-gray-600 transition-all duration-300"
              >
                Subscribe & Save
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Join thousands of strong women fueling their journey
          </h3>
          <p className="text-gray-400 mb-8">
            Tag us @browngirllifts and @goldybrown to share your Power Box experience!
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
              TikTok
            </a>
            <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
