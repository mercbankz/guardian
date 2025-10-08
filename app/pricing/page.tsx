"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Bot, 
  Users, 
  BookOpen, 
  Trophy, 
  Settings,
  Brain,
  Moon,
  Check,
  Star
} from "lucide-react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("guardian-plus");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-green-400 rounded-lg flex items-center justify-center logo-hover">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
              Guardian
            </Link>
            <Moon className="w-5 h-5 text-white ml-auto cursor-pointer hover:text-cyan-400 transition-colors" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <BarChart3 className="w-5 h-5" />
              Home
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/signup" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Users className="w-5 h-5" />
              Sign Up
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">Guardian Plans</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan. All tiers unlock the full Guardian experience equally.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div 
              className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 cursor-pointer transition-all ${
                selectedPlan === "guardian" 
                  ? "border-cyan-500/60 neon-glow" 
                  : "border-cyan-500/30 hover:border-cyan-400/60"
              }`}
              onClick={() => setSelectedPlan("guardian")}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Guardian</h3>
              <div className="text-3xl font-bold text-white mb-4">$150 per month</div>
              <p className="text-gray-300 mb-6">Flexible monthly access to all features</p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>

            <div 
              className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 cursor-pointer transition-all relative ${
                selectedPlan === "guardian-plus" 
                  ? "border-yellow-500/80 neon-glow" 
                  : "border-yellow-500/60 hover:border-yellow-400/80"
              }`}
              onClick={() => setSelectedPlan("guardian-plus")}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Guardian+</h3>
              <div className="text-3xl font-bold text-white mb-4">$1500 per year</div>
              <p className="text-gray-300 mb-2">Full access with savings</p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                Save $300/year
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>

            <div 
              className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 cursor-pointer transition-all ${
                selectedPlan === "guardian-elite" 
                  ? "border-blue-500/60 neon-glow" 
                  : "border-blue-500/30 hover:border-blue-400/60"
              }`}
              onClick={() => setSelectedPlan("guardian-elite")}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Guardian Elite</h3>
              <div className="text-3xl font-bold text-white mb-4">$3000 for 2 years</div>
              <p className="text-gray-300 mb-2">Ultimate commitment to growth</p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                Save $600
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* Everything You Get Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              Everything You Get with <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">Guardian</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-12"></div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Unlimited portfolio tracking</h3>
                <p className="text-gray-300 text-sm">Track unlimited portfolios and assets</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 hover-glow cursor-pointer neon-glow">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI-powered insights</h3>
                <p className="text-gray-300 text-sm">Advanced machine learning analytics</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow cursor-pointer neon-glow">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time market data</h3>
                <p className="text-gray-300 text-sm">Live price feeds and instant updates</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Become a <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">Guardian</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who trust Guardian for their portfolio management needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                Start Your Journey
              </Link>
              <Link href="/" className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400 hover:text-black transition-all transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
