"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowDown,
  HeartPulse,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  XCircle,
  Trophy,
  Calendar,
  Minus,
  Moon,
  BarChart3,
  Bot,
  Users,
  BookOpen,
  Settings,
  Star,
  Zap,
  Brain,
  Plus,
  Bell,
  Key,
  RefreshCw
} from "lucide-react";
import type { ChartData, ChartOptions } from "chart.js";

// Dynamically import charts to avoid SSR issues
const Line = dynamic(() => import("react-chartjs-2").then(mod => mod.Line), { ssr: false });
const Doughnut = dynamic(() => import("react-chartjs-2").then(mod => mod.Doughnut), { ssr: false });

// Register Chart.js components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [portfolioData, setPortfolioData] = useState({
    totalValue: 2500000,
    crypto: 1200000,
    venture: 1870000,
    presale: 560000,
    ipo: 2330000
  });

  const [tradingBots, setTradingBots] = useState([
    { id: 1, name: "Alpha Bot", status: "Active", profit: "+12.5%", trades: 45 },
    { id: 2, name: "Beta Bot", status: "Active", profit: "+8.3%", trades: 32 },
    { id: 3, name: "Gamma Bot", status: "Active", profit: "+15.7%", trades: 28 }
  ]);

  const [assets, setAssets] = useState([
    // Crypto Assets
    { type: "Crypto", name: "Bitcoin", ticker: "BTC", value: 450000, change: "+12.5%", icon: "BT" },
    { type: "Crypto", name: "Ethereum", ticker: "ETH", value: 320000, change: "+8.3%", icon: "ET" },
    { type: "Crypto", name: "Solana", ticker: "SOL", value: 180000, change: "+15.7%", icon: "SO" },
    
    // Venture Capital
    { type: "Venture", name: "Andreessen Horowitz", ticker: "a16z", value: 500000, change: "+22.1%", icon: "a1" },
    { type: "Venture", name: "Pantera Capital", ticker: "PANTERA", value: 350000, change: "+18.7%", icon: "PA" },
    { type: "Venture", name: "Paradigm", ticker: "PARADIGM", value: 280000, change: "+15.3%", icon: "PA" },
    
    // Presale Tokens
    { type: "Presale", name: "BlastUP", ticker: "BLASTUP", value: 150000, change: "+45.2%", icon: "BL" },
    { type: "Presale", name: "Saga Protocol", ticker: "SAGA", value: 120000, change: "+38.7%", icon: "SA" },
    { type: "Presale", name: "Stratos", ticker: "STOS", value: 95000, change: "+52.1%", icon: "ST" },
    
    // IPO Projects
    { type: "IPO", name: "SpaceX", ticker: "SPACEX", value: 800000, change: "+28.5%", icon: "SP" },
    { type: "IPO", name: "Stripe", ticker: "STRIPE", value: 650000, change: "+25.3%", icon: "ST" },
    { type: "IPO", name: "Reddit", ticker: "REDDIT", value: 180000, change: "+8.7%", icon: "RE" }
  ]);

  const [financialEvents, setFinancialEvents] = useState([
    { name: "Fed Meeting", description: "Federal Reserve interest rate decision", date: "2024-01-31", status: "Upcoming", color: "blue" },
    { name: "Tech Earnings", description: "Q4 2023 earnings reports from major tech companies", date: "2024-02-15", status: "Completed", color: "green" },
    { name: "Bitcoin ETF Review", description: "SEC review of Bitcoin ETF applications", date: "2024-02-20", status: "Upcoming", color: "orange" },
    { name: "Jobs Report", description: "January 2024 employment data release", date: "2024-02-02", status: "Completed", color: "pink" }
  ]);

  const [portfolioMetrics, setPortfolioMetrics] = useState({
    riskLevel: { value: 5, max: 100, status: "Moderate" },
    portfolioHealth: { value: 78, max: 100, status: "Healthy" },
    performance: { value: 87, max: 100, status: "Above Average +12.5% vs S&P 500" }
  });

  const [globalRankings, setGlobalRankings] = useState([
    { rank: "#45", performance: "+12.5% above avg", stability: "Strong" },
    { rank: "#23", performance: "+18.3% above avg", stability: "Excellent" },
    { rank: "#67", performance: "+8.7% above avg", stability: "Good" },
    { rank: "#12", performance: "+24.1% above avg", stability: "Outstanding" }
  ]);

  // Portfolio allocation data for donut chart
  const allocationData = {
    labels: ['Crypto', 'Venture Capital', 'Presale Tokens', 'IPO Projects'],
    datasets: [{
      data: [1200000, 1870000, 560000, 2330000],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(168, 85, 247, 0.8)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(34, 197, 94, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(168, 85, 247, 1)'
      ],
      borderWidth: 2
    }]
  };

  // Portfolio performance chart data (1M, 3M, 6M, 1Y)
  const performanceData = {
    labels: ['1M', '3M', '6M', '1Y'],
    datasets: [{
      label: 'Portfolio Performance',
      data: [8.5, 15.2, 22.8, 35.4],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6
    }]
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };

  const donutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Simulate real-time updates every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate trading bot updates
      setTradingBots(prev => prev.map(bot => ({
        ...bot,
        profit: `+${(Math.random() * 20 + 5).toFixed(1)}%`,
        trades: bot.trades + Math.floor(Math.random() * 3)
      })));

      // Simulate asset price changes
      setAssets(prev => prev.map(asset => ({
        ...asset,
        value: asset.value * (1 + (Math.random() - 0.5) * 0.02),
        change: `${Math.random() > 0.5 ? '+' : ''}${(Math.random() * 20 + 5).toFixed(1)}%`
      })));

      // Update portfolio metrics
      setPortfolioMetrics(prev => ({
        ...prev,
        performance: {
          ...prev.performance,
          value: Math.min(100, prev.performance.value + (Math.random() - 0.5) * 2),
          status: `Above Average +${(Math.random() * 20 + 10).toFixed(1)}% vs S&P 500`
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getAssetIconColor = (type: string) => {
    switch (type) {
      case 'Crypto': return 'from-blue-400 to-cyan-400';
      case 'Venture': return 'from-green-400 to-emerald-400';
      case 'Presale': return 'from-orange-400 to-yellow-400';
      case 'IPO': return 'from-purple-400 to-pink-400';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'bg-blue-500';
      case 'Completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getEventColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-400';
      case 'green': return 'bg-green-400';
      case 'orange': return 'bg-orange-400';
      case 'pink': return 'bg-pink-400';
      default: return 'bg-gray-400';
    }
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Portfolio Dashboard</h1>
            <p className="text-gray-400">Real-time portfolio tracking and AI-powered insights</p>
          </div>

          {/* Trading Bots Status */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {tradingBots.map((bot) => (
              <div key={bot.id} className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Bot className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{bot.name}</h3>
                      <p className="text-sm text-gray-400">{bot.trades} trades</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{bot.profit}</p>
                    <p className="text-xs text-gray-400">{bot.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Performance Chart */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Portfolio Performance Tracker</h2>
            </div>
            <div className="h-80">
              <Line data={performanceData} options={chartOptions} />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">+8.5%</p>
                <p className="text-sm text-gray-400">1 Month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">+15.2%</p>
                <p className="text-sm text-gray-400">3 Months</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">+22.8%</p>
                <p className="text-sm text-gray-400">6 Months</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">+35.4%</p>
                <p className="text-sm text-gray-400">1 Year</p>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Entire Portfolio */}
            <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
              <h2 className="text-2xl font-bold text-white mb-6">Entire Portfolio</h2>
              
              {/* Crypto Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Crypto</h3>
                <div className="space-y-3">
                  {assets.filter(asset => asset.type === 'Crypto').map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getAssetIconColor(asset.type)} rounded-lg flex items-center justify-center text-black font-bold`}>
                          {asset.icon}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{asset.name}</p>
                          <p className="text-gray-400 text-sm">{asset.ticker}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">${asset.value.toLocaleString()}</p>
                        <p className="text-green-400 text-sm">{asset.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Venture Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Venture</h3>
                <div className="space-y-3">
                  {assets.filter(asset => asset.type === 'Venture').map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getAssetIconColor(asset.type)} rounded-lg flex items-center justify-center text-black font-bold`}>
                          {asset.icon}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{asset.name}</p>
                          <p className="text-gray-400 text-sm">{asset.ticker}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">${asset.value.toLocaleString()}</p>
                        <p className="text-green-400 text-sm">{asset.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Presale Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Presale</h3>
                <div className="space-y-3">
                  {assets.filter(asset => asset.type === 'Presale').map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getAssetIconColor(asset.type)} rounded-lg flex items-center justify-center text-black font-bold`}>
                          {asset.icon}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{asset.name}</p>
                          <p className="text-gray-400 text-sm">{asset.ticker}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">${asset.value.toLocaleString()}</p>
                        <p className="text-green-400 text-sm">{asset.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IPO Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">IPO</h3>
                <div className="space-y-3">
                  {assets.filter(asset => asset.type === 'IPO').map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${getAssetIconColor(asset.type)} rounded-lg flex items-center justify-center text-black font-bold`}>
                          {asset.icon}
                        </div>
                        <div>
                          <p className="text-white font-semibold">{asset.name}</p>
                          <p className="text-gray-400 text-sm">{asset.ticker}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">${asset.value.toLocaleString()}</p>
                        <p className="text-green-400 text-sm">{asset.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Events & Alerts */}
            <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
              <h2 className="text-2xl font-bold text-white mb-6">Financial Events & Alerts</h2>
              <div className="space-y-4">
                {financialEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 ${getEventColor(event.color)} rounded-full`}></div>
                      <div>
                        <h3 className="text-white font-semibold">{event.name}</h3>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                        <p className="text-gray-500 text-xs">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)} text-white`}>
                        {event.status}
                      </span>
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors">
                        Set Alert
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Allocation */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Portfolio Allocation</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-80">
                <Doughnut data={allocationData} options={donutOptions} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-semibold">Crypto</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$1,200,000</p>
                    <p className="text-gray-400 text-sm">40.0%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <span className="text-white font-semibold">Venture Capital</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$1,870,000</p>
                    <p className="text-gray-400 text-sm">62.3%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                    <span className="text-white font-semibold">Presale Tokens</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$560,000</p>
                    <p className="text-gray-400 text-sm">18.7%</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-semibold">IPO Projects</span>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$2,330,000</p>
                    <p className="text-gray-400 text-sm">77.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Metrics */}
          <div className="card p-6 mb-8 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Portfolio Metrics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Risk Level</h3>
                <p className="text-gray-400 mb-3">{portfolioMetrics.riskLevel.status}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${portfolioMetrics.riskLevel.value}%` }}></div>
                </div>
                <p className="text-white font-bold">{portfolioMetrics.riskLevel.value}/{portfolioMetrics.riskLevel.max}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Portfolio Health</h3>
                <p className="text-gray-400 mb-3">{portfolioMetrics.portfolioHealth.status}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: `${portfolioMetrics.portfolioHealth.value}%` }}></div>
                </div>
                <p className="text-white font-bold">{portfolioMetrics.portfolioHealth.value}/{portfolioMetrics.portfolioHealth.max}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">Performance</h3>
                <p className="text-gray-400 mb-3">{portfolioMetrics.performance.status}</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${portfolioMetrics.performance.value}%` }}></div>
                </div>
                <p className="text-white font-bold">{portfolioMetrics.performance.value}/{portfolioMetrics.performance.max}</p>
              </div>
            </div>
          </div>

          {/* Global Performance Rankings */}
          <div className="card p-6 hover-glow-blue cursor-pointer neon-glow-blue">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Global Performance Rankings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {globalRankings.map((ranking, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{ranking.rank}</h3>
                  <p className="text-gray-400 mb-2">Guardian Rank</p>
                  <p className="text-green-400 font-semibold mb-2">{ranking.performance}</p>
                  <p className="text-gray-500 text-sm">Stability: {ranking.stability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}