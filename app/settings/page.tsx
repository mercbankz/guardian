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
  Moon,
  User,
  Link as LinkIcon,
  Shield,
  Key,
  Eye,
  Copy,
  RefreshCw,
  Check
} from "lucide-react";

export default function SettingsPage() {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://prism.app/ref/PRISM-USER123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
            <Link href="/badges" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Trophy className="w-5 h-5" />
              Badges
            </Link>
            <Link href="/settings" className="flex items-center gap-3 p-3 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 transition-all">
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your profile, connections, security, and data preferences</p>
          </div>

          {/* Referral Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center hover-glow-blue cursor-pointer neon-glow-blue">
              <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-gray-400">Total Referrals</div>
            </div>
            <div className="card p-6 text-center hover-glow-green cursor-pointer neon-glow-green">
              <div className="text-3xl font-bold text-green-400 mb-2">8</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="card p-6 text-center hover-glow-orange cursor-pointer neon-glow-orange">
              <div className="text-3xl font-bold text-orange-400 mb-2">4</div>
              <div className="text-gray-400">Pending</div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Profile</h2>
            </div>
            <p className="text-gray-400 mb-6">Your personal information and account details</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  value="John Doe"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  value="john.doe@example.com"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Member Since</label>
                <input
                  type="text"
                  value="1/14/2024"
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Account Connections */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <LinkIcon className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Account Connections</h2>
            </div>
            <p className="text-gray-400 mb-6">Connect your wallets and exchanges for portfolio tracking (read-only)</p>
            
            <div className="space-y-4">
              {/* Coinbase Pro */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Coinbase Pro</h3>
                    <p className="text-gray-400 text-sm">Last synced: 1/19/2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg cursor-not-allowed opacity-50">
                    Connected
                  </button>
                  <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors">
                    Sync Now
                  </button>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors">
                    Disconnect
                  </button>
                </div>
              </div>

              {/* MetaMask Wallet */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">MetaMask Wallet</h3>
                    <p className="text-gray-400 text-sm">Last synced: 1/18/2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-green-500 text-white text-sm rounded-lg cursor-not-allowed opacity-50">
                    Connected
                  </button>
                  <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors">
                    Sync Now
                  </button>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors">
                    Disconnect
                  </button>
                </div>
              </div>

              {/* Binance */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Binance</h3>
                    <p className="text-gray-400 text-sm">Not connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                    + Connect
                  </button>
                </div>
              </div>

              {/* Kraken */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Kraken</h3>
                    <p className="text-gray-400 text-sm">Not connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                    + Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Non-Custodial Warning */}
            <div className="mt-6 p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-orange-400" />
                <div>
                  <h3 className="text-orange-400 font-semibold">Non-Custodial & Read-Only</h3>
                  <p className="text-gray-300 text-sm">We never store private keys or execute trades. All connections are read-only for portfolio analysis only.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Program */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Referral Program</h2>
            </div>
            <p className="text-gray-400 mb-6">Invite friends and earn rewards</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Your Referral Link</h3>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value="https://prism.app/ref/PRISM-USER123"
                  className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
                <button
                  onClick={copyReferralLink}
                  className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Ambassador Program Banner */}
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
              <h3 className="text-blue-400 font-semibold mb-2">Ambassador Program</h3>
              <p className="text-gray-300 text-sm">Refer 50 active users to earn the Ambassador badge and unlock 1 free year of Guardian AI Premium!</p>
            </div>
          </div>

          {/* Security Section */}
          <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Security</h2>
            </div>
            <p className="text-gray-400 mb-6">Manage your account security and privacy settings</p>
            
            <div className="space-y-4">
              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="text-white font-semibold">Two-Factor Authentication</h3>
                  <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors">
                  Enable 2FA
                </button>
              </div>

              {/* Password */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="text-white font-semibold">Password</h3>
                  <p className="text-gray-400 text-sm">Last changed 30 days ago</p>
                </div>
                <button className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors">
                  Change Password
                </button>
              </div>

              {/* Active Sessions */}
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h3 className="text-white font-semibold">Active Sessions</h3>
                  <p className="text-gray-400 text-sm">Manage your active login sessions</p>
                </div>
                <button className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg transition-colors">
                  View Sessions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
