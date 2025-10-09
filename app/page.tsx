"use client";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo with animation */}
          <div className="flex items-center gap-3 mb-8">
            {/* 3D Animated Dragonfly Logo */}
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0">
                <div className="w-full h-full relative">
                  {/* Dragonfly Body */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* Central Body */}
                    <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full relative">
                      {/* Body Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/50 to-blue-400/50 rounded-full blur-sm"></div>
                    </div>
                    
                    {/* Wings - Top Left */}
                    <div className="absolute top-0 left-0 transform -translate-x-1 -translate-y-1">
                      <div className="dragonfly-wing-top-left">
                        <div className="w-2 h-1 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full transform rotate-45 origin-left"></div>
                        <div className="w-1.5 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full transform rotate-30 origin-left mt-0.5"></div>
                        <div className="w-1 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full transform rotate-15 origin-left mt-0.5"></div>
                      </div>
                    </div>
                    
                    {/* Wings - Top Right */}
                    <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
                      <div className="dragonfly-wing-top-right">
                        <div className="w-2 h-1 bg-gradient-to-l from-cyan-400/80 to-transparent rounded-full transform -rotate-45 origin-right"></div>
                        <div className="w-1.5 h-0.5 bg-gradient-to-l from-cyan-400/60 to-transparent rounded-full transform -rotate-30 origin-right mt-0.5"></div>
                        <div className="w-1 h-0.5 bg-gradient-to-l from-cyan-400/40 to-transparent rounded-full transform -rotate-15 origin-right mt-0.5"></div>
                      </div>
                    </div>
                    
                    {/* Wings - Bottom Left */}
                    <div className="absolute bottom-0 left-0 transform -translate-x-1 translate-y-1">
                      <div className="dragonfly-wing-bottom-left">
                        <div className="w-2 h-1 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full transform -rotate-45 origin-left"></div>
                        <div className="w-1.5 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full transform -rotate-30 origin-left mt-0.5"></div>
                        <div className="w-1 h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full transform -rotate-15 origin-left mt-0.5"></div>
                      </div>
                    </div>
                    
                    {/* Wings - Bottom Right */}
                    <div className="absolute bottom-0 right-0 transform translate-x-1 translate-y-1">
                      <div className="dragonfly-wing-bottom-right">
                        <div className="w-2 h-1 bg-gradient-to-l from-cyan-400/80 to-transparent rounded-full transform rotate-45 origin-right"></div>
                        <div className="w-1.5 h-0.5 bg-gradient-to-l from-cyan-400/60 to-transparent rounded-full transform rotate-30 origin-right mt-0.5"></div>
                        <div className="w-1 h-0.5 bg-gradient-to-l from-cyan-400/40 to-transparent rounded-full transform rotate-15 origin-right mt-0.5"></div>
                      </div>
                    </div>
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
            {/* Circular Dragonfly Logo with Guardian Text */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-40 relative">
                  {/* Circular Path for Dragonfly */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/20"></div>
                  
                  {/* Dragonfly flying in circle */}
                  <div className="absolute inset-0">
                    <div className="dragonfly-circular-path">
                      {/* Dragonfly Body */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {/* Central Body */}
                        <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full relative">
                          {/* Body Glow */}
                          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/50 to-blue-400/50 rounded-full blur-sm"></div>
                        </div>
                        
                        {/* Wings - Top Left */}
                        <div className="absolute top-0 left-0 transform -translate-x-3 -translate-y-3">
                          <div className="dragonfly-wing-top-left">
                            <div className="w-6 h-2 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full transform rotate-45 origin-left"></div>
                            <div className="w-4 h-1.5 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full transform rotate-30 origin-left mt-0.5"></div>
                            <div className="w-3 h-1 bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full transform rotate-15 origin-left mt-0.5"></div>
                          </div>
                        </div>
                        
                        {/* Wings - Top Right */}
                        <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3">
                          <div className="dragonfly-wing-top-right">
                            <div className="w-6 h-2 bg-gradient-to-l from-cyan-400/80 to-transparent rounded-full transform -rotate-45 origin-right"></div>
                            <div className="w-4 h-1.5 bg-gradient-to-l from-cyan-400/60 to-transparent rounded-full transform -rotate-30 origin-right mt-0.5"></div>
                            <div className="w-3 h-1 bg-gradient-to-l from-cyan-400/40 to-transparent rounded-full transform -rotate-15 origin-right mt-0.5"></div>
                          </div>
                        </div>
                        
                        {/* Wings - Bottom Left */}
                        <div className="absolute bottom-0 left-0 transform -translate-x-3 translate-y-3">
                          <div className="dragonfly-wing-bottom-left">
                            <div className="w-6 h-2 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full transform -rotate-45 origin-left"></div>
                            <div className="w-4 h-1.5 bg-gradient-to-r from-cyan-400/60 to-transparent rounded-full transform -rotate-30 origin-left mt-0.5"></div>
                            <div className="w-3 h-1 bg-gradient-to-r from-cyan-400/40 to-transparent rounded-full transform -rotate-15 origin-left mt-0.5"></div>
                          </div>
                        </div>
                        
                        {/* Wings - Bottom Right */}
                        <div className="absolute bottom-0 right-0 transform translate-x-3 translate-y-3">
                          <div className="dragonfly-wing-bottom-right">
                            <div className="w-6 h-2 bg-gradient-to-l from-cyan-400/80 to-transparent rounded-full transform rotate-45 origin-right"></div>
                            <div className="w-4 h-1.5 bg-gradient-to-l from-cyan-400/60 to-transparent rounded-full transform rotate-30 origin-right mt-0.5"></div>
                            <div className="w-3 h-1 bg-gradient-to-l from-cyan-400/40 to-transparent rounded-full transform rotate-15 origin-right mt-0.5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Guardian Text that appears/disappears */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="guardian-text-animation">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Guardian</span>
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
              <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Brain className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-blue-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">0</div>
                <div className="text-gray-400 text-sm">AI Insights Generated</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow-cyan cursor-pointer neon-glow-cyan">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center pulse-glow">
                    <Activity className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-cyan-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold text-cyan-400">0%</div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover-glow-blue cursor-pointer neon-glow-blue">
              <h3 className="text-2xl font-bold text-white mb-4">Guardian</h3>
              <div className="text-4xl font-bold text-white mb-4">$150 <span className="text-lg text-gray-400">/ month</span></div>
              <p className="text-gray-300 mb-6">Flexible monthly access to all features</p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/60 rounded-xl p-8 hover-glow-cyan cursor-pointer neon-glow-cyan relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Guardian+</h3>
              <div className="text-4xl font-bold text-white mb-4">$1500 <span className="text-lg text-gray-400">/ year</span></div>
              <p className="text-gray-300 mb-2">Full access with savings</p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                Save $300/year
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105">
                Subscribe Now
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover-glow-blue cursor-pointer neon-glow-blue">
              <h3 className="text-2xl font-bold text-white mb-4">Guardian Elite</h3>
              <div className="text-4xl font-bold text-white mb-4">$3000 <span className="text-lg text-gray-400">/ 2 years</span></div>
              <p className="text-gray-300 mb-2">Ultimate commitment to growth</p>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mb-6 inline-block">
                Save $600
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105">
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
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Non-Custodial Security</h3>
              <p className="text-gray-400">Your assets, your control. We never hold your keys.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow-cyan cursor-pointer neon-glow-cyan">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered Insights</h3>
              <p className="text-gray-400">Advanced analytics and predictive modeling at your fingertips.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-Time Monitoring</h3>
              <p className="text-gray-400">Stay ahead with live updates and instant alerts.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow-cyan cursor-pointer neon-glow-cyan">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gamified Learning</h3>
              <p className="text-gray-400">Earn badges, track progress, and master investing.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover-glow-blue cursor-pointer neon-glow-blue">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Support</h3>
              <p className="text-gray-400">Connect with other investors and share insights.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover-glow-cyan cursor-pointer neon-glow-cyan">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Comprehensive Analytics</h3>
              <p className="text-gray-400">Deep dive into your portfolio&apos;s performance.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Guardian Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover-glow-blue cursor-pointer neon-glow-blue">
              <h3 className="text-2xl font-bold text-white mb-4">Why Guardian Was Created</h3>
              <p className="text-gray-300">
                Guardian was born from a vision to bring transparency, accuracy, and AI-assisted portfolio mastery to every investor. We believe sophisticated analysis should be accessible to all, not just institutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover-glow-cyan cursor-pointer neon-glow-cyan">
              <h3 className="text-2xl font-bold text-white mb-4">Guardian&apos;s Mission</h3>
              <p className="text-gray-300">
                Our mission is to lead the evolution in portfolio analysis through non-custodial AI, user ownership, and predictive analytics. We are dedicated to democratizing investment intelligence, empowering you to make smarter decisions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover-glow-blue cursor-pointer neon-glow-blue">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-300">
                Guardian is transforming investment intelligence by automating complex data analysis, providing actionable insights, and empowering investors to achieve their financial goals with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center py-16 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-xl neon-glow-cyan">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Become a Guardian?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of investors who trust Guardian for their portfolio management needs.
          </p>
          <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto w-fit">
            <TrendingUp className="w-5 h-5" />
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
