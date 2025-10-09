"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Bot, 
  Users, 
  BookOpen, 
  Trophy, 
  Settings,
  TrendingUp,
  Star,
  Shield,
  Brain,
  Zap,
  Book,
  Activity,
  Moon
} from "lucide-react";

export default function Home() {
  const [logoPosition, setLogoPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoPosition(prev => (prev + 1) % 20);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const logoY = Math.sin(logoPosition * 0.1) * 5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo with animation */}
          <div className="flex items-center gap-3 mb-8">
            {/* Exact Glowing Interconnected Sphere Logo */}
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full relative">
                  {/* Glowing Sphere with Geodesic Pattern */}
                  <div className="absolute inset-0 rounded-full relative">
                    {/* Complex Geodesic Network Lines */}
                    <div className="absolute inset-0">
                      {/* Primary Horizontal Lines */}
                      <div className="absolute top-1/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform rotate-6"></div>
                      <div className="absolute top-2/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform -rotate-3"></div>
                      <div className="absolute top-3/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform rotate-3"></div>
                      <div className="absolute top-4/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform -rotate-6"></div>
                      
                      {/* Primary Vertical Lines */}
                      <div className="absolute left-1/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform rotate-6"></div>
                      <div className="absolute left-2/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform -rotate-3"></div>
                      <div className="absolute left-3/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform rotate-3"></div>
                      <div className="absolute left-4/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform -rotate-6"></div>
                      
                      {/* Secondary Diagonal Lines */}
                      <div className="absolute top-1/5 left-1/5 w-3/5 h-3/5 border-l border-t border-cyan-400/60 rounded-tl-full transform rotate-12"></div>
                      <div className="absolute top-1/5 right-1/5 w-3/5 h-3/5 border-r border-t border-cyan-400/60 rounded-tr-full transform -rotate-12"></div>
                      <div className="absolute bottom-1/5 left-1/5 w-3/5 h-3/5 border-l border-b border-cyan-400/60 rounded-bl-full transform -rotate-12"></div>
                      <div className="absolute bottom-1/5 right-1/5 w-3/5 h-3/5 border-r border-b border-cyan-400/60 rounded-br-full transform rotate-12"></div>
                    </div>
                    
                    {/* Glowing Network Nodes */}
                    <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/5 left-2/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/5 left-3/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/5 left-2/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/5 left-3/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/5 left-2/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/5 left-3/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/5 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/5 left-2/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/5 left-3/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/5 right-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    
                    {/* Glowing Halo Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Guardian
            </h1>
            <Moon className="w-5 h-5 text-white ml-auto cursor-pointer hover:text-blue-400 transition-colors" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/ai-assistant" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Bot className="w-5 h-5" />
              AI Assistant
            </Link>
            <Link href="/community" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Users className="w-5 h-5" />
              Community
            </Link>
            <Link href="/library" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <BookOpen className="w-5 h-5" />
              Library
            </Link>
            <Link href="/badges" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Trophy className="w-5 h-5" />
              Badges
            </Link>
            <Link href="/settings" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Exact Glowing Interconnected Sphere Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 relative">
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="w-full h-full relative">
                      {/* Glowing Sphere with Geodesic Pattern */}
                      <div className="absolute inset-0 rounded-full relative">
                        {/* Complex Geodesic Network Lines */}
                        <div className="absolute inset-0">
                          {/* Primary Horizontal Lines */}
                          <div className="absolute top-1/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform rotate-6"></div>
                          <div className="absolute top-2/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform -rotate-3"></div>
                          <div className="absolute top-3/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform rotate-3"></div>
                          <div className="absolute top-4/5 left-1/5 right-1/5 h-px bg-cyan-400/80 transform -rotate-6"></div>
                          
                          {/* Primary Vertical Lines */}
                          <div className="absolute left-1/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform rotate-6"></div>
                          <div className="absolute left-2/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform -rotate-3"></div>
                          <div className="absolute left-3/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform rotate-3"></div>
                          <div className="absolute left-4/5 top-1/5 bottom-1/5 w-px bg-cyan-400/80 transform -rotate-6"></div>
                          
                          {/* Secondary Diagonal Lines */}
                          <div className="absolute top-1/5 left-1/5 w-3/5 h-3/5 border-l border-t border-cyan-400/60 rounded-tl-full transform rotate-12"></div>
                          <div className="absolute top-1/5 right-1/5 w-3/5 h-3/5 border-r border-t border-cyan-400/60 rounded-tr-full transform -rotate-12"></div>
                          <div className="absolute bottom-1/5 left-1/5 w-3/5 h-3/5 border-l border-b border-cyan-400/60 rounded-bl-full transform -rotate-12"></div>
                          <div className="absolute bottom-1/5 right-1/5 w-3/5 h-3/5 border-r border-b border-cyan-400/60 rounded-br-full transform rotate-12"></div>
                        </div>
                        
                        {/* Glowing Network Nodes */}
                        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/5 left-2/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/5 left-3/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2/5 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2/5 left-2/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2/5 left-3/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2/5 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-3/5 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-3/5 left-2/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-3/5 left-3/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-3/5 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/5 left-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/5 left-2/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/5 left-3/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        
                        {/* Glowing Halo Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Portfolio Intelligence.
              </span>
              <br />
              <span className="text-white">Learn. Grow. Win.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The world&apos;s most advanced non-custodial portfolio analytics platform. 
              Transform your investments with AI-powered insights and gamified learning.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center mb-16">
              <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Sign Up
              </Link>
              <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-blue-300 transition-all transform hover:scale-105 flex items-center gap-2">
                <Star className="w-5 h-5" />
                View Dashboard
              </Link>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-4 gap-6 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover-glow-green cursor-pointer neon-glow-green">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Brain className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-green-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-green-400">0</div>
                <div className="text-gray-400 text-sm">AI Insights Generated</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Activity className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-blue-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">0%</div>
                <div className="text-gray-400 text-sm">Real-Time Insights</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover-glow-red cursor-pointer neon-glow-red">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Book className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-red-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-red-400">0</div>
                <div className="text-gray-400 text-sm">Books Read</div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover-glow-purple cursor-pointer neon-glow-purple">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-purple-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-gray-400 text-sm">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Why Choose Guardian Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Experience the future of portfolio management with cutting-edge AI and real-time analytics
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 hover-glow-green cursor-pointer group neon-glow-green">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform pulse-glow">
                  <Brain className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI-Powered Analysis</h3>
                <p className="text-gray-300 mb-6">Advanced machine learning algorithms analyze your portfolio</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    Real-time risk assessment
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    Predictive analytics
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    Automated rebalancing
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover-glow-purple cursor-pointer group neon-glow-purple">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform pulse-glow">
                  <Activity className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-Time Analytics</h3>
                <p className="text-gray-300 mb-6">Live market data and instant portfolio updates</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full pulse-glow"></div>
                    Live price feeds
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full pulse-glow"></div>
                    Instant notifications
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full pulse-glow"></div>
                    Performance tracking
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-xl p-8 hover-glow-green cursor-pointer group neon-glow-green">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform pulse-glow">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Non-Custodial</h3>
                <p className="text-gray-300 mb-6">Your keys, your assets, your control</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    Private key security
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    No asset custody
          </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                    Full transparency
          </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guardian Plans Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian Plans</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Choose your plan. All tiers unlock the full Guardian experience equally.
            </p>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover-glow cursor-pointer neon-glow">
                <h3 className="text-2xl font-bold text-white mb-4">Guardian</h3>
                <div className="text-3xl font-bold text-white mb-4">$150 per month</div>
                <p className="text-gray-300 mb-6">Flexible monthly access to all features</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/60 rounded-xl p-8 hover-glow cursor-pointer neon-glow relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-green-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Guardian+</h3>
                <div className="text-3xl font-bold text-white mb-4">$1500 per year</div>
                <p className="text-gray-300 mb-2">Full access with savings</p>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                  Save $300/year
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover-glow cursor-pointer neon-glow">
                <h3 className="text-2xl font-bold text-white mb-4">Guardian Elite</h3>
                <div className="text-3xl font-bold text-white mb-4">$3000 for 2 years</div>
                <p className="text-gray-300 mb-2">Ultimate commitment to growth</p>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                  Save $600
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>

          {/* Everything You Get Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              Everything You Get with <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-6 mb-16">
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
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time market data</h3>
                <p className="text-gray-300 text-sm">Live price feeds and instant updates</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Automated rebalancing</h3>
                <p className="text-gray-300 text-sm">Smart portfolio optimization</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover-glow-purple cursor-pointer neon-glow-purple">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Predictive analytics</h3>
                <p className="text-gray-300 text-sm">Future performance forecasting</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover-glow-green cursor-pointer neon-glow-green">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Private key security</h3>
                <p className="text-gray-300 text-sm">Non-custodial, your keys your assets</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-6 hover-glow cursor-pointer neon-glow">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Community access</h3>
                <p className="text-gray-300 text-sm">Connect with fellow investors</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow cursor-pointer neon-glow">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">API access</h3>
                <p className="text-gray-300 text-sm">Integrate with external tools</p>
              </div>
            </div>
          </div>

          {/* Why Choose Guardian Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              A revolution in portfolio analytics — built to give power back to investors.
            </p>
            
            {/* About Cards */}
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-400/60 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-white mb-4">Why Guardian Was Created</h3>
                <p className="text-gray-300">
                  Guardian was born from a vision to bring transparency, accuracy, and AI-assisted portfolio mastery to every investor. We believe that sophisticated portfolio analysis shouldn&apos;t be reserved for institutional players — every individual investor deserves access to professional-grade insights and tools.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-purple-500/60 rounded-xl p-8 hover:border-purple-400/80 hover:bg-white/10 transition-all cursor-pointer neon-glow-purple">
                <h3 className="text-xl font-bold text-white mb-4">Guardian&apos;s Mission</h3>
                <p className="text-gray-300">
                  We&apos;re leading the next evolution in portfolio analysis through non-custodial AI, user ownership, and predictive analytics. Our mission is to democratize investment intelligence by making complex data analysis accessible, understandable, and actionable for investors of all levels.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-400/60 hover:bg-white/10 transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-white mb-4">Our Impact</h3>
                <p className="text-gray-300">
                  Guardian is transforming investment intelligence by automating complex data analysis and making professional-grade insights accessible to everyone. We&apos;re empowering investors to make smarter decisions, optimize their portfolios, and achieve their financial goals with confidence and clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Ready to Become a Guardian Section */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Become a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who trust Guardian for their portfolio management needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105">
                Start Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
