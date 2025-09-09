import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Return mock data for now - we'll add real database later
    const availableBoxes = Math.floor(Math.random() * 15) + 3 // Random 3-17 boxes
    
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
