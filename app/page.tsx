import ScarcityInventory from '@/components/ScarcityInventory'
import { Crown, Zap, Flame, Wheat, Droplets, Award, Target, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-500 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-yellow-500">Brown Girl Lifts</h1>
                <p className="text-xs text-gray-400">x Goldy Brown</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#pricing" className="text-gray-400 hover:text-yellow-500 transition-colors">Pricing</a>
              <a href="/subscribe" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO SECTION - FOOD + NUTRITION SIDE BY SIDE */}
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT SIDE - FOOD IMAGES */}
            <div className="relative">
              {/* Product Showcase */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border-2 border-yellow-500 overflow-hidden">
                {/* Premium Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    PREMIUM QUALITY
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="bg-black/80 border border-yellow-500 text-yellow-500 px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    4.9
                  </div>
                </div>

                {/* Main Food Image */}
                <div className="relative h-96 mb-6">
                  <div className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=800&fit=crop&crop=center"
                      alt="Power Box - Premium Protein Meal"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with nutrition preview */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="bg-green-500 px-2 py-1 rounded">100g Protein</span>
                        <span className="bg-red-500 px-2 py-1 rounded">1,200 Cal</span>
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded">85g Carbs</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-3 justify-center">
                  {[
                    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop&crop=center',
                    'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop&crop=center',
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=200&fit=crop&crop=center',
                    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop&crop=center'
                  ].map((src, index) => (
                    <button
                      key={index}
                      className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 hover:border-yellow-500 transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={src}
                        alt={`Power Box view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Product Name & Price */}
                <div className="text-center mt-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Brown Girl Lifts x Goldy Brown
                  </h2>
                  <h3 className="text-3xl font-bold text-yellow-500 mb-3">
                    POWER BOX
                  </h3>
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-lg inline-block">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium">FROM</span>
                      <span className="text-3xl font-bold">$20</span>
                      <span className="text-sm font-medium">PER BOX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - NUTRITION FACTS */}
            <div className="space-y-8">
              {/* Title */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full text-sm font-bold mb-6">
                  <Award className="w-5 h-5" />
                  SCIENTIFICALLY FORMULATED
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">MACRO</span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    PERFECTION
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Every Power Box delivers precisely what your body needs to build strength, 
                  recover faster, and dominate your fitness goals.
                </p>
              </div>

              {/* Macro Grid - Compact */}
              <div className="grid grid-cols-2 gap-4">
                {/* Protein */}
                <div className="p-6 rounded-xl border-2 border-green-500 bg-green-500/20 text-center">
                  <Zap className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-green-400 mb-1">100</div>
                  <div className="text-sm text-gray-400 mb-2">GRAMS</div>
                  <div className="text-lg font-bold text-white">PROTEIN</div>
                  <div className="text-xs text-gray-400 mt-2">Lean muscle building</div>
                </div>

                {/* Calories */}
                <div className="p-6 rounded-xl border-2 border-red-500 bg-red-500/20 text-center">
                  <Flame className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-red-400 mb-1">1,200</div>
                  <div className="text-sm text-gray-400 mb-2">CALORIES</div>
                  <div className="text-lg font-bold text-white">ENERGY</div>
                  <div className="text-xs text-gray-400 mt-2">Sustained performance</div>
                </div>

                {/* Carbs */}
                <div className="p-6 rounded-xl border-2 border-yellow-500 bg-yellow-500/20 text-center">
                  <Wheat className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-yellow-400 mb-1">85</div>
                  <div className="text-sm text-gray-400 mb-2">GRAMS</div>
                  <div className="text-lg font-bold text-white">CARBS</div>
                  <div className="text-xs text-gray-400 mt-2">Workout fuel</div>
                </div>

                {/* Fats */}
                <div className="p-6 rounded-xl border-2 border-blue-500 bg-blue-500/20 text-center">
                  <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-4xl font-bold text-blue-400 mb-1">35</div>
                  <div className="text-sm text-gray-400 mb-2">GRAMS</div>
                  <div className="text-lg font-bold text-white">HEALTHY FATS</div>
                  <div className="text-xs text-gray-400 mt-2">Hormone support</div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Target className="w-6 h-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-white">MUSCLE BUILDING</h4>
                    <p className="text-gray-400 text-sm">Optimal protein-to-calorie ratio</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-white">PEAK PERFORMANCE</h4>
                    <p className="text-gray-400 text-sm">Sustained energy for intense training</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-white">FASTER RECOVERY</h4>
                    <p className="text-gray-400 text-sm">Premium nutrients for muscle repair</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-left">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold hover:scale-105 transition-all">
                  FUEL YOUR STRENGTH TODAY
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  Or subscribe for $499.99/month • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <ScarcityInventory />
        </div>
      </section>

      {/* Simple Pricing */}
      <section id="pricing" className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">CHOOSE YOUR</span>
              <span className="text-yellow-500"> POWER</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-green-500 mb-4">Single Box</h3>
              <div className="text-4xl font-bold text-white mb-4">$20</div>
              <p className="text-gray-400 mb-6">Perfect for trying our Power Box</p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all">
                Order Now
              </button>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border-2 border-yellow-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Power Subscription</h3>
              <div className="text-4xl font-bold text-white mb-1">$499.99</div>
              <div className="text-sm text-gray-400 mb-4">per month</div>
              <p className="text-gray-400 mb-6">25 boxes monthly + free delivery</p>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-lg font-bold text-lg transition-all">
                Subscribe Now
              </button>
              <p className="text-xs text-gray-400 mt-3 text-center">Cancel anytime • Free shipping</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
