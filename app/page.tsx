import ProductShowcase from '@/components/ProductShowcase'
import MacroTabs from '@/components/MacroTabs'
import ScarcityInventory from '@/components/ScarcityInventory'
import CheckoutButton from '@/components/CheckoutButton'
import { Crown, Star, Shield, Truck } from 'lucide-react'

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
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Shop</a>
              <a href="/subscribe" className="text-gray-400 hover:text-gold-500 transition-colors">Subscribe</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ProductShowcase />
          </div>
          
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-4">
                <span className="text-white">POWER</span>
                <span className="text-gold-500"> BOX</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Premium high-protein meals engineered for women who lift. 
                Fuel your strength, feed your ambition.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                <Star className="w-6 h-6 text-gold-500" />
                <div>
                  <p className="font-bold text-sm">100g+ Protein</p>
                  <p className="text-xs text-gray-400">Per box</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                <Shield className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-bold text-sm">Premium Quality</p>
                  <p className="text-xs text-gray-400">Ingredients</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                <Truck className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-bold text-sm">Fresh Daily</p>
                  <p className="text-xs text-gray-400">Delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                <Crown className="w-6 h-6 text-gold-500" />
                <div>
                  <p className="font-bold text-sm">Limited Drop</p>
                  <p className="text-xs text-gray-400">20 boxes/day</p>
                </div>
              </div>
            </div>

            {/* Scarcity Inventory */}
            <div>
              <ScarcityInventory />
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-white">MACRO</span>
              <span className="text-gold-500"> PERFECTION</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every Power Box is scientifically crafted to deliver optimal nutrition 
              for strength training and muscle building.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <MacroTabs />
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-white">CHOOSE YOUR</span>
              <span className="text-gold-500"> POWER</span>
            </h3>
            <p className="text-xl text-gray-300">
              Single box or monthly subscription - fuel your journey your way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* One-time Purchase */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h4 className="text-2xl font-bold text-green-500 mb-2">Single Box</h4>
              <p className="text-gray-300 mb-6">
                Perfect for trying our Power Box or occasional fuel-ups.
              </p>
              <CheckoutButton
                amount={20}
                type="one-time"
                label="ORDER NOW"
                description="Single Power Box"
              />
            </div>

            {/* Subscription */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/10 p-8 rounded-xl border-2 border-gold-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </span>
              </div>
              <h4 className="text-2xl font-bold text-gold-500 mb-2">Power Subscription</h4>
              <p className="text-gray-300 mb-6">
                25 boxes per month with free delivery. Never run out of fuel.
              </p>
              <CheckoutButton
                amount={500}
                type="subscription"
                label="SUBSCRIBE"
                description="25 boxes + free delivery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold-500 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-6 h-6 text-gold-500" />
                <span className="font-bold text-gold-500">Brown Girl Lifts</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering women through fitness and nutrition.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Quick Links</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Shop</a>
                <a href="/subscribe" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Subscribe</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Account</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Support</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">FAQ</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Returns</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Follow Us</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">TikTok</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">YouTube</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Brown Girl Lifts x Goldy Brown. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
