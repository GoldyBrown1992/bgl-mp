'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { ShoppingCart, CreditCard, Loader2 } from 'lucide-react'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutButtonProps {
  disabled?: boolean
  amount: number
  type: 'one-time' | 'subscription'
  label: string
  description: string
}

export default function CheckoutButton({ 
  disabled, 
  amount, 
  type, 
  label, 
  description 
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [showEmailInput, setShowEmailInput] = useState(false)

  const handleCheckout = async () => {
    if (!email) {
      setShowEmailInput(true)
      return
    }

    setLoading(true)
    
    try {
      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe failed to initialize')

      if (type === 'one-time') {
        // Create payment intent for one-time purchase
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, amount })
        })

        const { clientSecret, error } = await response.json()
        
        if (error) {
          alert(error)
          setLoading(false)
          return
        }

        const { error: stripeError } = await stripe.confirmPayment({
          elements: null,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/success?type=one-time`,
            payment_method_data: {
              billing_details: { email }
            }
          }
        })

        if (stripeError) {
          alert(stripeError.message)
        }
      } else {
        // Handle subscription - redirect to subscription page
        window.location.href = `/subscribe?email=${encodeURIComponent(email)}`
      }
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const buttonClasses = type === 'subscription' 
    ? 'bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black' 
    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'

  return (
    <div className="w-full">
      {showEmailInput && (
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold-500 focus:outline-none"
            required
          />
        </div>
      )}
      
      <button
        onClick={handleCheckout}
        disabled={disabled || loading}
        className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${buttonClasses} ${
          !disabled ? 'animate-pulse-gold shadow-lg' : ''
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : type === 'subscription' ? (
            <CreditCard className="w-5 h-5" />
          ) : (
            <ShoppingCart className="w-5 h-5" />
          )}
          
          <div className="text-center">
            <div className="font-bold">{label}</div>
            <div className="text-sm opacity-90">{description}</div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold">${amount}</div>
            {type === 'subscription' && (
              <div className="text-xs opacity-75">/month</div>
            )}
          </div>
        </div>
      </button>
      
      {type === 'subscription' && (
        <p className="text-xs text-gray-400 mt-2 text-center">
          25 boxes per month • Free delivery • Cancel anytime
        </p>
      )}
    </div>
  )
}
