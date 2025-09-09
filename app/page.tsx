import EnhancedProductShowcase from '@/components/EnhancedProductShowcase'
import ProfessionalPricing from '@/components/ProfessionalPricing'
import MacroTabs from '@/components/MacroTabs'
import ScarcityInventory from '@/components/ScarcityInventory'
import { Crown, Star, Shield, Truck, Users, Award, Zap } from 'lucide-react'

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
              <a href="#products" className="text-gray-400 hover:text-gold-500 transition-colors">Products</a>
              <a href="#nutrition" className="text-gray-400 hover:text-gold-500 transition-colors">Nutrition</a>
              <a href="#pricing" className="text-gray-400 hover:text-gold-500 transition-colors">Pricing</a>
              <a href="/subscribe" className="bg-gold-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-gold-600 transition-colors">
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <EnhancedProductShowcase />
          </div>
          
          <div className="space-y-8">
            {/* Title */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500 text-gold-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Premium Athletic Nutrition
              </div>
              <h2 className="text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">FUEL YOUR</span>
                <br />
                <span className="text-gold-500">STRENGTH</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Premium high-protein meals engineered specifically for women who lift. 
                Every Power Box delivers 100g+ of quality protein and 1,200 calories 
                of scientifically-formulated nutrition to fuel your fitness journey.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <Zap className="w-6 h-6 text-gold-500" />
                <div>
                  <p className="font-bold text-sm">100g+ Protein</p>
                  <p className="text-xs text-gray-400">Per box</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <Shield className="w-6 h-6 text-green-500" />
                <div>
                  <p className="font-bold text-sm">Premium Quality</p>
                  <p className="text-xs text-gray-400">Ingredients</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <Truck className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-bold text-sm">Fast Delivery</p>
                  <p className="text-xs text-gray-400">Next day available</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <Users className="w-6 h-6 text-purple-500" />
                <div>
                  <p className="font-bold text-sm">5000+ Athletes</p>
                  <p className="text-xs text-gray-400">Trust our nutrition</p>
                </div>
              </div>
            </div>

            {/* Scarcity Inventory */}
            <div>
              <ScarcityInventory />
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Pricing Plans
              </a>
              <a
                href="#nutrition"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl border-2 border-gray-600 hover:border-gray-500 transition-all duration-300 text-center"
              >
                See Nutrition Facts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">TRUSTED BY</span>
              <span className="text-gold-500"> CHAMPIONS</span>
            </h3>
            <p className="text-xl text-gray-300">
              Join thousands of strong women fueling their fitness journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gold-500 mb-2">5,000+</div>
              <div className="text-gray-400">Active Athletes</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">4.9★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">50M+</div>
              <div className="text-gray-400">Grams Protein Delivered</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">98%</div>
              <div className="text-gray-400">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-16">
        <ProfessionalPricing />
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
                Empowering women through premium athletic nutrition and fitness excellence.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Products</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Power Box</a>
                <a href="/subscribe" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Subscription</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Gift Cards</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Support</h5>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">FAQ</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Contact</a>
                <a href="#" className="block text-gray-400 hover:text-gold-500 text-sm transition-colors">Nutrition Support</a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-4">Community</h5>
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
