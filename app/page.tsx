import ScarcityInventory from '@/components/ScarcityInventory'
import { Crown, Zap, Flame, Wheat, Droplets, Award, Target } from 'lucide-react'

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
              <a href="#nutrition" className="text-gray-400 hover:text-yellow-500 transition-colors">Nutrition</a>
              <a href="#pricing" className="text-gray-400 hover:text-yellow-500 transition-colors">Pricing</a>
              <a href="/subscribe" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Subscribe
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* NUTRITION HERO SECTION - LEAD WITH YOUR VALUE PROP */}
      <section id="nutrition" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500 text-yellow-500 px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Award className="w-5 h-5" />
              SCIENTIFICALLY FORMULATED NUTRITION
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">MACRO</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                PERFECTION
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every Power Box delivers precisely what your body needs to build strength, 
              recover faster, and dominate your fitness goals.
            </p>
          </div>

          {/* Macro Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Protein */}
            <div className="relative p-8 rounded-2xl border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 bg-green-500/20 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-green-400 mb-2">100</div>
                <div className="text-lg font-semibold text-gray-400">g</div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white tracking-wider">PROTEIN</h3>
              </div>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Premium lean protein for muscle growth & recovery
              </p>
            </div>

            {/* Calories */}
            <div className="relative p-8 rounded-2xl border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 bg-red-500/20 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg">
                  <Flame className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-red-400 mb-2">1,200</div>
                <div className="text-lg font-semibold text-gray-400">kcal</div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white tracking-wider">CALORIES</h3>
              </div>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Perfectly balanced energy for active lifestyles
              </p>
            </div>

            {/* Carbs */}
            <div className="relative p-8 rounded-2xl border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 bg-yellow-500/20 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg">
                  <Wheat className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-yellow-400 mb-2">85</div>
                <div className="text-lg font-semibold text-gray-400">g</div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white tracking-wider">CARBS</h3>
              </div>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Complex carbs for sustained workout energy
              </p>
            </div>

            {/* Fats */}
            <div className="relative p-8 rounded-2xl border-2 border-gray-700 hover:border-yellow-500 transition-all duration-500 bg-blue-500/20 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-blue-400 mb-2">35</div>
                <div className="text-lg font-semibold text-gray-400">g</div>
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white tracking-wider">HEALTHY FATS</h3>
              </div>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Essential fats for hormone & brain health
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <Target className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">MUSCLE BUILDING</h4>
              <p className="text-gray-400 text-sm">
                Optimal protein-to-calorie ratio for lean muscle development
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">PEAK PERFORMANCE</h4>
              <p className="text-gray-400 text-sm">
                Sustained energy for intense training sessions
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <Award className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">FASTER RECOVERY</h4>
              <p className="text-gray-400 text-sm">
                Premium nutrients for rapid muscle repair
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl text-xl font-bold">
              <span>FUEL YOUR STRENGTH TODAY</span>
              <span className="bg-black text-yellow-500 px-3 py-1 rounded-full text-sm">
                $20/box
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Or subscribe for $499.99/month • Cancel anytime
            </p>
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
      <section id="pricing" className="container mx-auto px-4 py-16">
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
      </section>
    </div>
  )
}
