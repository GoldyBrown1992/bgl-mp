import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20'
})

export async function createPaymentIntent(amount: number, email: string) {
  return await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: 'usd',
    receipt_email: email,
    payment_method_types: ['card'],
    metadata: {
      type: 'one-time',
      email: email
    }
  })
}

export async function createSubscription(email: string, paymentMethodId: string) {
  // Create customer
  const customer = await stripe.customers.create({
    email: email,
    payment_method: paymentMethodId,
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  })

  // Attach payment method to customer
  await stripe.paymentMethods.attach(paymentMethodId, {
    customer: customer.id,
  })

  // Create subscription
  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Brown Girl Lifts Power Box Subscription',
          description: '25 boxes per month with free delivery'
        },
        unit_amount: 50000, // $500 in cents
        recurring: {
          interval: 'month'
        }
      }
    }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
  })

  return subscription
}
