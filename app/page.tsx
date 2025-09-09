
import ScarcityInventory from '@/components/ScarcityInventory'
import { Leaf, Zap, Flame, Wheat, Droplets, Check, Star, Heart, ArrowRight, Quote } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold uppercase tracking-tight text-gray-900">BROWN GIRL LIFTS</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider">x Goldy Brown</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#nutrition" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Nutrition</a>
              <a href="#benefits" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Benefits</a>
              <a href="#pricing" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Pricing</a>
              <a href="/subscribe" className="bg-amber-500 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-amber-600 transition-colors flex items-center gap-2">
                Order Now <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Split Design */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE - Food Image */}
          <div className="relative h-[600px] bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=800&fit=crop"
              alt="Healthy Power Box Meals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            
            {/* Floating nutrition badges */}
            <div className="absolute bottom-8 left-8 flex gap-3">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-2xl font-extrabold text-gray-900">100g</p>
                <p className="text-xs text-gray-600 uppercase">Protein</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <p className="text-2xl font-extra bold text-gray-900">1200</p>
                <p className="text-xs text-gray-600 uppercase">Calories</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="bg-amber-50 flex items-center">
            <div className="px-12 py-16 max-w-xl">
              {/* Scarcity Alert */}
              <div className="mb-8">
                <ScarcityInventory />
              </div>

              <h1 className="text-5xl font-extrabold uppercase text-gray-900 mb-6 leading-tight">
                FUEL UP YOUR<br />
                DAY WITH OUR<br />
                <span className="text-amber-600">POWER BOX!</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Premium protein-packed meals designed for women who lift. 
                Fresh ingredients, perfect macros, delivered daily.
              </p>

              <button className="bg-amber-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-amber-600 transition-all transform hover:scale-105 flex items-center gap-2">
                ORDER TODAY <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">5,000+</span> happy lifters
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION SECTION - Clean Grid */}
      <section id="nutrition" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              CLEAN EATING
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              NURTURE THE BODY WITH<br />
              <span className="text-amber-600">FARM-FRESH</span> NUTRITION
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=600&fit=crop"
                alt="Fresh ingredients"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900">100% Natural</p>
                    <p className="text-sm text-gray-600">No preservatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Macro Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">100g</h3>
                <p className="text-gray-600 font-medium">High Protein</p>
                <p className="text-sm text-gray-500 mt-2">Premium lean proteins for muscle growth</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">1,200</h3>
                <p className="text-gray-600 font-medium">Calories</p>
                <p className="text-sm text-gray-500 mt-2">Balanced energy for peak performance</p>
              </div>

              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Wheat className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">85g</h3>
                <p className="text-gray-600 font-medium">Healthy Carbs</p>
                <p className="text-sm text-gray-500 mt-2">Complex carbs for sustained energy</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-1">35g</h3>
                <p className="text-gray-600 font-medium">Good Fats</p>
                <p className="text-sm text-gray-500 mt-2">Essential fats for hormone health</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                EVERYTHING YOU NEED TO
                <span className="text-amber-600"> THRIVE</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Flame className="w-10 h-10 text-amber-500" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">High in Richness</h3>
                <p className="text-gray-600">Nutrient-dense meals packed with antioxidants, vitamins, and minerals</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Heart className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">Love in Every Bite</h3>
                <p className="text-gray-600">Carefully crafted recipes that taste as good as they make you feel</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Leaf className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">Un-refined Goodness</h3>
                <p className="text-gray-600">Whole foods, no processed ingredients, just pure nutrition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900">
              OUR CUSTOMERS <span className="text-amber-600">LOVE US</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-pink-50 p-8 rounded-2xl">
              <Quote className="w-8 h-8 text-pink-300 mb-4" />
              <p className="text-gray-700 mb-4 italic">"I never knew I could eat healthy meals until I found BGL. My lifts have improved, and I'm volunteering my journey with Bitebox."</p>
              <p className="font-extrabold text-gray-900">FELICIA JOHNSON</p>
              <p className="text-sm text-gray-600">CrossFit Athlete</p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl">
              <Quote className="w-8 h-8 text-green-300 mb-4" />
              <p className="text-gray-700 mb-4 italic">"Finding meal prep that actually tastes good AND hits my macros seemed impossible until BGL. Game changer!"</p>
              <p className="font-extrabold text-gray-900">MAYA PATEL</p>
              <p className="text-sm text-gray-600">Powerlifter</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl">
              <Quote className="w-8 h-8 text-blue-300 mb-4" />
              <p className="text-gray-700 mb-4 italic">"Quick and amazing service. The 100g protein per meal helps me recover faster between training sessions."</p>
              <p className="font-extrabold text-gray-900">SARAH CHEN</p>
              <p className="text-sm text-gray-600">Olympic Weightlifter</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              SIMPLE PRICING, <span className="text-amber-600">POWERFUL RESULTS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Box */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Try It Out</h3>
              <p className="text-gray-600 mb-6">Perfect for first-timers</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-900">$20</span>
                <span className="text-gray-500 ml-2">per box</span>
              </div>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 rounded-lg font-semibold text-lg transition-colors mb-6">
                Order Single Box
              </button>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100g premium protein</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Fresh daily preparation</span>
                </div>
              </div>
            </div>
            
            {/* Subscription */}
            <div className="bg-amber-500 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 rounded-bl-2xl text-sm font-semibold">
                SAVE $224/MONTH
              </div>
              <h3 className="text-2xl font-extrabold mb-2">Power Subscription</h3>
              <p className="text-amber-100 mb-6">Commit to your goals</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold">$499.99</span>
                <span className="text-amber-100 ml-2">per month</span>
              </div>
              <button className="w-full bg-white text-amber-600 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mb-6">
                Start Subscription
              </button>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>25 boxes every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Free priority delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold">BROWN GIRL LIFTS</h3>
            </div>
            <p className="text-gray-400 mb-8">Fuel Your Strength, Feed Your Soul</p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-500">About</a>
              <a href="#" className="hover:text-amber-500">Contact</a>
              <a href="#" className="hover:text-amber-500">Terms</a>
              <a href="#" className="hover:text-amber-500">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
