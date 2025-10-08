"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Shield,
  Brain,
  Moon
} from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      {/* Navigation Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-purple-900/20 to-blue-900/20 backdrop-blur-sm border-r border-white/10 z-50">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center logo-hover">
              <Brain className="w-5 h-5 text-black" />
            </div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Guardian
            </Link>
            <Moon className="w-5 h-5 text-white ml-auto cursor-pointer hover:text-cyan-400 transition-colors" />
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Shield className="w-5 h-5" />
              Home
            </Link>
            <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Shield className="w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/pricing" className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all">
              <Shield className="w-5 h-5" />
              Pricing
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Futuristic Glowing Interconnected Sphere Logo */}
            <div className="w-16 h-16 relative mx-auto mb-4">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full relative">
                  {/* Main Glowing Sphere */}
                  <div className="absolute inset-0 rounded-full relative">
                    {/* Geodesic Network Lines */}
                    <div className="absolute inset-0">
                      {/* Horizontal Curved Lines */}
                      <div className="absolute top-1/4 left-1/4 right-1/4 h-px bg-cyan-400/80 transform rotate-12"></div>
                      <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-cyan-400/80"></div>
                      <div className="absolute top-3/4 left-1/4 right-1/4 h-px bg-cyan-400/80 transform -rotate-12"></div>
                      
                      {/* Vertical Curved Lines */}
                      <div className="absolute left-1/4 top-1/4 bottom-1/4 w-px bg-cyan-400/80 transform rotate-12"></div>
                      <div className="absolute left-1/2 top-1/4 bottom-1/4 w-px bg-cyan-400/80"></div>
                      <div className="absolute left-3/4 top-1/4 bottom-1/4 w-px bg-cyan-400/80 transform -rotate-12"></div>
                      
                      {/* Diagonal Network Lines */}
                      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-l border-t border-cyan-400/60 rounded-tl-full transform rotate-45"></div>
                      <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 border-r border-t border-cyan-400/60 rounded-tr-full transform -rotate-45"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 border-l border-b border-cyan-400/60 rounded-bl-full transform -rotate-45"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 border-r border-b border-cyan-400/60 rounded-br-full transform rotate-45"></div>
                    </div>
                    
                    {/* Glowing Network Nodes */}
                    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                    
                    {/* Glowing Halo Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-400/30 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Join <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Guardian</span>
            </h1>
            <p className="text-gray-300">
              Create your account and start your portfolio intelligence journey.
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-cyan-400 bg-white/5 border-white/20 rounded focus:ring-cyan-400/50 focus:ring-2"
                required
              />
              <label className="text-sm text-gray-300">
                I agree to the{" "}
                <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-black font-bold rounded-lg hover:from-cyan-300 hover:to-green-300 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              Create My Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
