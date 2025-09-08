import { NextResponse } from 'next/server'
import { getAvailableBoxes } from '@/lib/inventory'

export async function GET() {
  try {
    const availableBoxes = await getAvailableBoxes()
    
    return NextResponse.json({
      availableBoxes,
      maxBoxes: 20
    })
  } catch (error) {
    console.error('Error fetching inventory:', error)
    return NextResponse.json(
      { error: 'Failed to fetch inventory' },
      { status: 500 }
    )
  }
}
