import { NextRequest, NextResponse } from 'next/server'
import { createSubscription } from '@/lib/stripe'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const { email, paymentMethodId } = await request.json()
    
    if (!email || !paymentMethodId) {
      return NextResponse.json(
        { error: 'Email and payment method are required' },
        { status: 400 }
      )
    }

    // Create subscription
    const subscription = await createSubscription(email, paymentMethodId)
    
    // Create subscription record
    await prisma.subscription.create({
      data: {
        email,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        status: subscription.status,
        currentPeriodStart: new Date(subscription.current_period_start * 1000),
        currentPeriodEnd: new Date(subscription.current_period_end * 1000)
      }
    })

    const invoice = subscription.latest_invoice as any
    const paymentIntent = invoice.payment_intent

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret: paymentIntent.client_secret
    })
  } catch (error) {
    console.error('Error creating subscription:', error)
    return NextResponse.json(
      { error: 'Failed to create subscription' },
      { status: 500 }
    )
  }
}
