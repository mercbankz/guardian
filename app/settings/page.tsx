"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Bot, Users, BookOpen, Trophy, Settings, Moon, User, Link as LinkIcon, Shield, Lock, Key, Copy, RefreshCw } from "lucide-react";

export default function SettingsPage() {
  const [connectedAccounts, setConnectedAccounts] = useState([
    { name: "MetaMask Wallet", status: "Connected", lastSync: "1/18/2024", type: "wallet" },
    { name: "Binance", status: "Not connected", lastSync: null, type: "exchange" },
    { name: "Kraken", status: "Not connected", lastSync: null, type: "exchange" },
    { name: "Coinbase Pro", status: "Connected", lastSync: "1/19/2024", type: "exchange" }
  ]);

  const [referralStats] = useState({
    total: 12,
    active: 8,
    pending: 4
  });

  const [profileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "1/14/2024"
  });

  const copyReferralLink = () => {
    navigator.clipboard.writeText("https://prism.app/ref/PRISM-USER123");
    // You could add a toast notification here
  };

  const syncAccount = (accountName: string) => {
    setConnectedAccounts(prev => prev.map(account => 
      account.name === accountName 
        ? { ...account, lastSync: new Date().toLocaleDateString() }
        : account
    ));
  };

  const disconnectAccount = (accountName: string) => {
    setConnectedAccounts(prev => prev.map(account => 
      account.name === accountName 
        ? { ...account, status: "Not connected", lastSync: null }
        : account
    ));
  };

  const connectAccount = (accountName: string) => {
    setConnectedAccounts(prev => prev.map(account => 
      account.name === accountName 
        ? { ...account, status: "Connected", lastSync: new Date().toLocaleDateString() }
        : account
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            {/* Official Guardian Logo with Hover Effect */}
            <div className="w-8 h-8 relative cursor-pointer hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full relative">
                  {/* Glowing Sphere with Complex Geodesic Pattern */}
                  <div className="absolute inset-0 rounded-full relative">
                    {/* Complex Geodesic Network Lines - Exact Match */}
                    <div className="absolute inset-0">
                      {/* Horizontal Geodesic Lines */}
                      <div className="absolute top-1/6 left-1/6 right-1/6 h-px bg-cyan-400/90 transform rotate-12"></div>
                      <div className="absolute top-2/6 left-1/6 right-1/6 h-px bg-cyan-400/90 transform rotate-6"></div>
                      <div className="absolute top-3/6 left-1/6 right-1/6 h-px bg-cyan-400/90"></div>
                      <div className="absolute top-4/6 left-1/6 right-1/6 h-px bg-cyan-400/90 transform -rotate-6"></div>
                      <div className="absolute top-5/6 left-1/6 right-1/6 h-px bg-cyan-400/90 transform -rotate-12"></div>
                      
                      {/* Vertical Geodesic Lines */}
                      <div className="absolute left-1/6 top-1/6 bottom-1/6 w-px bg-cyan-400/90 transform rotate-12"></div>
                      <div className="absolute left-2/6 top-1/6 bottom-1/6 w-px bg-cyan-400/90 transform rotate-6"></div>
                      <div className="absolute left-3/6 top-1/6 bottom-1/6 w-px bg-cyan-400/90"></div>
                      <div className="absolute left-4/6 top-1/6 bottom-1/6 w-px bg-cyan-400/90 transform -rotate-6"></div>
                      <div className="absolute left-5/6 top-1/6 bottom-1/6 w-px bg-cyan-400/90 transform -rotate-12"></div>
                      
                      {/* Diagonal Geodesic Lines */}
                      <div className="absolute top-1/6 left-1/6 w-4/6 h-4/6 border-l border-t border-cyan-400/70 rounded-tl-full transform rotate-15"></div>
                      <div className="absolute top-1/6 right-1/6 w-4/6 h-4/6 border-r border-t border-cyan-400/70 rounded-tr-full transform -rotate-15"></div>
                      <div className="absolute bottom-1/6 left-1/6 w-4/6 h-4/6 border-l border-b border-cyan-400/70 rounded-bl-full transform -rotate-15"></div>
                      <div className="absolute bottom-1/6 right-1/6 w-4/6 h-4/6 border-r border-b border-cyan-400/70 rounded-br-full transform rotate-15"></div>
                      
                      {/* Additional Geodesic Lines for Complex Pattern */}
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-cyan-400/60 rounded-full transform rotate-45"></div>
                      <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-cyan-400/60 rounded-full transform -rotate-45"></div>
                    </div>
                    
                    {/* Glowing Network Nodes - Exact Pattern */}
                    <div className="absolute top-1/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/6 left-2/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/6 left-3/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/6 left-4/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/6 left-2/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/6 left-3/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/6 left-4/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/6 left-2/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/6 left-3/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/6 left-4/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4/6 left-2/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4/6 left-3/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4/6 left-4/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/6 left-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/6 left-2/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/6 left-3/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/6 left-4/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/6 right-1/6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    
                    {/* Glowing Halo Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-sm"></div>
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your profile, connections, security, and data preferences</p>
          </div>

          {/* Referral Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center hover-glow-blue cursor-pointer neon-glow-blue">
              <p className="text-3xl font-bold text-blue-400 mb-2">{referralStats.total}</p>
              <p className="text-gray-400">Total Referrals</p>
            </div>
            <div className="card p-6 text-center hover-glow-green cursor-pointer neon-glow-green">
              <p className="text-3xl font-bold text-green-400 mb-2">{referralStats.active}</p>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="card p-6 text-center hover-glow-orange cursor-pointer neon-glow-orange">
              <p className="text-3xl font-bold text-orange-400 mb-2">{referralStats.pending}</p>
              <p className="text-gray-400">Pending</p>
            </div>
          </div>

          {/* Profile Section */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Profile</h2>
            </div>
            <p className="text-gray-400 mb-6">Your personal information and account details</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={profileData.name}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-bold mb-2">Member Since</label>
                <input
                  type="text"
                  value={profileData.memberSince}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
              </div>
            </div>
            
            <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-blue-300 hover:to-cyan-300 transition-all transform hover:scale-105">
              Edit Profile
            </button>
          </div>

          {/* Account Connections */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <LinkIcon className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Account Connections</h2>
            </div>
            <p className="text-gray-400 mb-6">Connect your wallets and exchanges for portfolio tracking (read-only)</p>
            
            <div className="space-y-4">
              {connectedAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                      {account.type === 'wallet' ? <Key className="w-5 h-5 text-black" /> : <LinkIcon className="w-5 h-5 text-black" />}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{account.name}</h3>
                      {account.lastSync && (
                        <p className="text-gray-400 text-sm">Last synced: {account.lastSync}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {account.status === 'Connected' ? (
                      <>
                        <span className="px-3 py-1 bg-green-500 text-white text-sm rounded-full">Connected</span>
                        <button
                          onClick={() => syncAccount(account.name)}
                          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded-lg transition-colors"
                        >
                          Sync Now
                        </button>
                        <button
                          onClick={() => disconnectAccount(account.name)}
                          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
                        >
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => connectAccount(account.name)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors"
                      >
                        + Connect
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Custodial Warning */}
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 mb-8 neon-glow-orange">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-orange-400" />
              <h3 className="text-lg font-bold text-white">Non-Custodial & Read-Only</h3>
            </div>
            <p className="text-gray-300">
              We never store private keys or execute trades. All connections are read-only for portfolio analysis only.
            </p>
          </div>

          {/* Referral Program */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <h2 className="text-2xl font-bold text-white mb-4">Referral Program</h2>
            <p className="text-gray-400 mb-6">Invite friends and earn rewards</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Your Referral Link</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  value="https://prism.app/ref/PRISM-USER123"
                  className="flex-1 p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  readOnly
                />
                <button
                  onClick={copyReferralLink}
                  className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">Ambassador Program</h4>
              <p className="text-gray-300">
                Refer 50 active users to earn the Ambassador badge and unlock 1 free year of Guardian AI Premium!
              </p>
            </div>
          </div>

          {/* Security Section */}
          <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Security</h2>
            </div>
            <p className="text-gray-400 mb-6">Manage your account security and privacy settings</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">Two-Factor Authentication</h3>
                <p className="text-gray-400 mb-4">Add an extra layer of security to your account</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                  Enable 2FA
                </button>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">Password</h3>
                <p className="text-gray-400 mb-4">Last changed 30 days ago</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                  Change Password
                </button>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">Active Sessions</h3>
                <p className="text-gray-400 mb-4">Manage your active login sessions</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
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
