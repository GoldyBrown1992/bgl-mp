import { NextRequest, NextResponse } from 'next/server'
import { createPaymentIntent } from '@/lib/stripe'
import { getAvailableBoxes, reserveBox } from '@/lib/inventory'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, amount } = await request.json()
    
    if (!email || !amount) {
      return NextResponse.json(
        { error: 'Email and amount are required' },
        { status: 400 }
      )
    }

    // Check if boxes are available
    const availableBoxes = await getAvailableBoxes()
    if (availableBoxes <= 0) {
      return NextResponse.json(
        { error: 'No boxes available today' },
        { status: 400 }
      )
    }

    // Reserve a box
    const reserved = await reserveBox()
    if (!reserved) {
      return NextResponse.json(
        { error: 'Failed to reserve box' },
        { status: 400 }
      )
    }

    // Create payment intent
    const paymentIntent = await createPaymentIntent(amount, email)
    
    // Create order record
    await prisma.order.create({
      data: {
        email,
        stripePaymentIntentId: paymentIntent.id,
        amount: amount * 100, // Store in cents
        status: 'pending',
        type: 'one-time'
      }
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}
