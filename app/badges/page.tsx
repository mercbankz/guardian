"use client";

import Link from "next/link";
import {
  BarChart3,
  Bot,
  Users,
  BookOpen,
  Trophy,
  Settings,
  Moon,
  Book,
  Shield,
  Star,
  Crown,
  Gem,
  UserCheck,
  Calendar,
  Check
} from "lucide-react";

export default function BadgesPage() {
  const badges = [
    {
      id: 1,
      name: "Library Master",
      description: "Complete 5 books in the library",
      tier: "gold",
      points: 25,
      icon: Book,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 2,
      name: "Portfolio Guru",
      description: "Maintain 90+ health score for 30 days",
      tier: "gold",
      points: 25,
      icon: Shield,
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 3,
      name: "Knowledge Seeker",
      description: "Earn 15 different badges",
      tier: "gold",
      points: 25,
      icon: Star,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 4,
      name: "Veteran",
      description: "Use Guardian AI for 365 consecutive days",
      tier: "platinum",
      points: 50,
      icon: Shield,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 5,
      name: "Chess Champion",
      description: "Win 10 Financial Chess games",
      tier: "platinum",
      points: 50,
      icon: Crown,
      color: "from-red-400 to-pink-400"
    },
    {
      id: 6,
      name: "Scholar Supreme",
      description: "Complete all books in the library",
      tier: "platinum",
      points: 50,
      icon: Gem,
      color: "from-indigo-400 to-purple-400"
    },
    {
      id: 7,
      name: "Ambassador",
      description: "Refer 50 active users to Guardian AI",
      tier: "platinum",
      points: 50,
      icon: UserCheck,
      color: "from-cyan-400 to-blue-400"
    },
    {
      id: 8,
      name: "Master Investor",
      description: "Maintain perfect 100 health score for 90 days",
      tier: "platinum",
      points: 50,
      icon: Shield,
      color: "from-emerald-400 to-green-400"
    }
  ];

  const getTierColor = (tier: string) => {
    return tier === "gold" ? "bg-blue-500" : "bg-red-500";
  };

  const getTierText = (tier: string) => {
    return tier === "gold" ? "gold" : "platinum";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            {/* Glowing Sword Logo */}
            <div className="w-8 h-8 relative cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className="relative w-full h-full">
                {/* Glowing Sword Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-8 relative">
                    {/* Sword Blade */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-green-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                    {/* Sword Handle */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                    {/* Cross Guard */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400"></div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-green-400/30 blur-sm rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Guardian
            </Link>
            <Moon className="w-5 h-5 text-white ml-auto cursor-pointer hover:text-cyan-400 transition-colors" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
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
            <Link href="/badges" className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all">
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Badges</h1>
            <p className="text-gray-400">Earn achievements and unlock rewards through your Guardian journey</p>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {badges.map((badge) => {
              const IconComponent = badge.icon;
              return (
                <div key={badge.id} className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${badge.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 ${getTierColor(badge.tier)}`}>
                      {getTierText(badge.tier)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{badge.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{badge.description}</p>
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-semibold">{badge.points} pts</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Rewards Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Special Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Free Subscription Months */}
              <div className="card p-6 hover-glow-green cursor-pointer neon-glow-green">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Free Subscription Months</h3>
                    <p className="text-gray-400 mb-3">
                      Earn 100 points to unlock 1 free month of Guardian AI Premium (max 6 months total)
                    </p>
                    <div className="text-green-400 font-semibold">
                      Current: 0/6 months unlocked
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambassador Program */}
              <div className="card p-6 hover-glow-purple cursor-pointer neon-glow-purple">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Ambassador Program</h3>
                    <p className="text-gray-400 mb-3">
                      Refer 50 active users to earn the Ambassador badge and unlock 1 free year
                    </p>
                    <div className="text-purple-400 font-semibold">
                      This reward is exempt from the 6-month cap
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
            <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">0</div>
                <div className="text-gray-400">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                <div className="text-gray-400">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-gray-400">Rewards Unlocked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
