import { prisma } from './db'
import { format } from 'date-fns'

export async function getTodayInventory() {
  const today = format(new Date(), 'yyyy-MM-dd')
  
  let inventory = await prisma.dailyInventory.findUnique({
    where: { date: today }
  })
  
  if (!inventory) {
    inventory = await prisma.dailyInventory.create({
      data: {
        date: today,
        sold: 0,
        maxBoxes: 20
      }
    })
  }
  
  return inventory
}

export async function getAvailableBoxes() {
  const inventory = await getTodayInventory()
  return Math.max(0, inventory.maxBoxes - inventory.sold)
}

export async function reserveBox() {
  const today = format(new Date(), 'yyyy-MM-dd')
  
  const inventory = await prisma.dailyInventory.findUnique({
    where: { date: today }
  })
  
  if (!inventory || inventory.sold >= inventory.maxBoxes) {
    return false
  }
  
  await prisma.dailyInventory.update({
    where: { date: today },
    data: { sold: inventory.sold + 1 }
  })
  
  return true
}
