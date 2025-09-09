'use client'

import { Zap, Flame, Wheat, Droplets, Award, Target } from 'lucide-react'

export default function HeroNutritionDisplay() {
  const macros = [
    {
      icon: Zap,
      label: 'PROTEIN',
      value: '100',
      unit: 'g',
      description: 'Premium lean protein for muscle growth & recovery',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400'
    },
    {
      icon: Flame,
      label: 'CALORIES',
      value: '1,200',
      unit: 'kcal',
      description: 'Perfectly balanced energy for active lifestyles',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400'
    },
    {
      icon: Wheat,
      label: 'CARBS',
      value: '85',
      unit: 'g',
      description: 'Complex carbs for sustained workout energy',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/20',
      textColor: 'text-yellow-400'
    },
    {
      icon: Droplets,
      label: 'HEALTHY FATS',
      value: '35',
      unit: 'g',
      description: 'Essential fats for hormone & brain health',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400'
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 via-transparent to-gold-500/20" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500 text-gold-500 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Award className="w-5 h-5" />
            SCIENTIFICALLY FORMULATED NUTRITION
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">MACRO</span>
            <br />
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
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
          {macros.map((macro, index) => {
            const Icon = macro.icon
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 border-gray-700 hover:border-gold-500 transition-all duration-500 group ${macro.bgColor} backdrop-blur-sm`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${macro.color} shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <div className="text-center mb-4">
                  <div className={`text-5xl font-bold ${macro.textColor} mb-2`}>
                    {macro.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-400">
                    {macro.unit}
                  </div>
                </div>

                {/* Label */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white tracking-wider">
                    {macro.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-center text-sm leading-relaxed">
                  {macro.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-gold-500/10 rounded-2xl transition-all duration-500" />
              </div>
            )
          })}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <Target className="w-8 h-8 text-gold-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">MUSCLE BUILDING</h4>
            <p className="text-gray-400 text-sm">
              Optimal protein-to-calorie ratio for lean muscle development
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <Zap className="w-8 h-8 text-gold-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">PEAK PERFORMANCE</h4>
            <p className="text-gray-400 text-sm">
              Sustained energy for intense training sessions
            </p>
          </div>
          
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <Award className="w-8 h-8 text-gold-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">FASTER RECOVERY</h4>
            <p className="text-gray-400 text-sm">
              Premium nutrients for rapid muscle repair
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-xl text-xl font-bold">
            <span>FUEL YOUR STRENGTH TODAY</span>
            <span className="bg-black text-gold-500 px-3 py-1 rounded-full text-sm">
              $20/box
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Or subscribe for $499.99/month • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  )
}
