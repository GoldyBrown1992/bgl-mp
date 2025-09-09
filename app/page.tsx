import EnhancedProductShowcase from '@/components/EnhancedProductShowcase'
import ProfessionalPricing from '@/components/ProfessionalPricing'
import HeroNutritionDisplay from '@/components/HeroNutritionDisplay'
import ScarcityInventory from '@/components/ScarcityInventory'
import { Crown } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gold-500 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-gold-500" />
              <div>
                <h1 className="text-xl font-bold text-gold-500">Brown Girl Lifts</h1>
                <p className="text-xs text-gray-400">x Goldy Brown</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#nutrition" className="text-gray-400 hover:text-gold-500 transition-colors">Nutrition</a>
              <a href="#products" className="text-gray-400 hover:text-gold-500 transition-colors">Products</a>
              <a href="#pricing" className="text-gray-400 hover:text-gold-500 transition-colors">Pricing</a>
              <a href="/subscribe" className="bg-gold-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO: Nutrition First - Your Main Selling Point */}
      <section id="nutrition">
        <HeroNutritionDisplay />
      </section>

      {/* Product Showcase */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <EnhancedProductShowcase />
          </div>
          <div className="space-y-8">
            <ScarcityInventory />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <ProfessionalPricing />
      </section>
    </div>
  )
}
