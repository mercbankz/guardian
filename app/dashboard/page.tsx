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
  Minus
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

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<"1M" | "3M" | "6M" | "1Y">("6M");
  const [tick, setTick] = useState(0);

  // Demo data
  const holdings = [
    { symbol: "BTC", name: "Bitcoin", value: 150000, changePct: 2.5, sector: "Crypto" },
    { symbol: "ETH", name: "Ethereum", value: 120000, changePct: 3.2, sector: "Crypto" },
    { symbol: "AAPL", name: "Apple Inc.", value: 95000, changePct: 1.8, sector: "Tech" },
    { symbol: "TSLA", name: "Tesla", value: 85000, changePct: -0.5, sector: "Auto" },
    { symbol: "MSFT", name: "Microsoft", value: 75000, changePct: 2.1, sector: "Tech" },
    { symbol: "GOOGL", name: "Alphabet", value: 65000, changePct: 1.5, sector: "Tech" },
  ];

  const totalValue = holdings.reduce((sum, holding) => sum + holding.value, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Generate performance data based on time range
  const generatePerformanceData = (range: string) => {
    const dataPoints: Record<string, number> = {
      "1M": 30,
      "3M": 90,
      "6M": 180,
      "1Y": 365
    };
    
    const points = dataPoints[range] || 180;
    const labels: string[] = [];
    const data: number[] = [];
    
    // Generate realistic portfolio growth
    let value = 400000; // Starting value
    const targetValue = totalValue;
    const growthPerDay = (targetValue - value) / points;
    
    for (let i = 0; i < points; i++) {
      if (range === "1M") {
        labels.push(`Day ${i + 1}`);
      } else {
        labels.push("");
      }
      
      // Add some volatility
      const volatility = (Math.random() - 0.5) * 20000;
      value += growthPerDay + volatility;
      data.push(Math.max(value, 0));
    }
    
    // Set last value to current total
    data[data.length - 1] = totalValue;
    
    return { labels, data };
  };

  const perfData = generatePerformanceData(timeRange);

  const performanceChartData: ChartData<"line"> = {
    labels: perfData.labels,
    datasets: [
      {
        label: "Portfolio Value",
        data: perfData.data,
        borderColor: "#00BFFF",
        backgroundColor: "rgba(0, 191, 255, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const performanceChartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(10, 10, 15, 0.95)",
        titleColor: "#00FFFF",
        bodyColor: "#fff",
        borderColor: "#00FFFF",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: (context) => `$${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#8B5CF6",
          callback: (value) => {
            const numValue = typeof value === "number" ? value : 0;
            return "$" + (numValue / 1000).toFixed(0) + "K";
          },
        },
        grid: { color: "rgba(139, 92, 246, 0.1)" },
      },
      x: {
        ticks: { color: "#8B5CF6", maxTicksLimit: 8 },
        grid: { color: "rgba(139, 92, 246, 0.1)" },
      },
    },
  };

  const allocationData: ChartData<"doughnut"> = {
    labels: ["Crypto", "Tech", "Auto", "Other"],
    datasets: [
      {
        data: [45, 35, 15, 5],
        backgroundColor: ["#00FFFF", "#8B5CF6", "#3B82F6", "#A78BFA"],
        borderColor: "#0a0a0f",
        borderWidth: 3,
      },
    ],
  };

  const allocationOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#fff",
          padding: 16,
          font: { size: 13 },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        backgroundColor: "rgba(10, 10, 15, 0.95)",
        titleColor: "#00FFFF",
        bodyColor: "#fff",
        borderColor: "#00FFFF",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed.toFixed(1)}%`,
        },
      },
    },
  };

  // Portfolio Metrics
  const riskLevel = 65;
  const health = 78;
  const performance = 87;

  const metrics = [
    {
      label: "Risk Level",
      value: riskLevel,
      status: riskLevel < 40 ? "Low" : riskLevel < 70 ? "Moderate" : "High",
      icon: riskLevel < 40 ? ArrowDown : riskLevel < 70 ? Activity : AlertTriangle,
      color: riskLevel < 40 ? "text-red-400" : riskLevel < 70 ? "text-blue-400" : "text-orange-400",
      bgColor: riskLevel < 40 ? "bg-red-500/10" : riskLevel < 70 ? "bg-blue-500/10" : "bg-orange-500/10",
    },
    {
      label: "Portfolio Health",
      value: health,
      status: health < 50 ? "Poor" : health < 80 ? "Healthy" : "Excellent",
      icon: health < 50 ? XCircle : health < 80 ? HeartPulse : ShieldCheck,
      color: health < 50 ? "text-red-400" : health < 80 ? "text-green-400" : "text-emerald-400",
      bgColor: health < 50 ? "bg-red-500/10" : health < 80 ? "bg-green-500/10" : "bg-emerald-500/10",
    },
    {
      label: "Performance",
      value: performance,
      status: performance < 50 ? "Below Avg" : performance < 80 ? "Average" : "Above Average",
      detail: "+12.5% vs S&P 500",
      icon: performance < 50 ? TrendingDown : performance < 80 ? Minus : TrendingUp,
      color: performance < 50 ? "text-red-400" : performance < 80 ? "text-yellow-400" : "text-purple-400",
      bgColor: performance < 50 ? "bg-red-500/10" : performance < 80 ? "bg-yellow-500/10" : "bg-purple-500/10",
    },
  ];

  // Financial Events
  const events = [
    { title: "Fed Meeting – Interest Rate Decision", date: "Oct 15, 2025", impact: "High", status: "upcoming", icon: "🟢" },
    { title: "Tech Earnings – Major Companies", date: "Oct 18, 2025", impact: "Medium", status: "upcoming", icon: "🟡" },
    { title: "Bitcoin ETF Review – SEC Evaluation", date: "Oct 22, 2025", impact: "High", status: "pending", icon: "🔵" },
    { title: "Crypto Regulation Hearing", date: "Oct 25, 2025", impact: "High", status: "upcoming", icon: "🟠" },
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
            Portfolio Dashboard
          </h1>
          <p className="text-gray-400 mt-1">Real-time portfolio analytics and insights</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Total Portfolio Value</div>
          <div className="text-3xl font-bold text-white">${totalValue.toLocaleString()}</div>
          <div className="text-green-400 text-sm">+$45,200 (+1.5%) 24h</div>
        </div>
      </div>

      {/* Demo Mode Badge */}
      <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2" />
        <span className="text-xs text-cyan-400">Live Demo: prices update every 15s (Tick #{tick})</span>
      </div>

      {/* Portfolio Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{metric.value}/100</div>
                <div className={`text-sm ${metric.color}`}>{metric.status}</div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">{metric.label}</div>
            {metric.detail && <div className="text-gray-500 text-xs mt-1">{metric.detail}</div>}
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <div className="lg:col-span-2 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-cyan-400">📈 Performance</h2>
            <div className="flex gap-2">
              {(["1M", "3M", "6M", "1Y"] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1 rounded-lg text-sm transition-all ${
                    timeRange === range
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          <div style={{ height: "300px" }}>
            <Line data={performanceChartData} options={performanceChartOptions} />
          </div>
        </div>

        {/* Allocation Chart */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-purple-400 mb-4">💰 Allocation</h2>
          <div style={{ height: "300px" }}>
            <Doughnut data={allocationData} options={allocationOptions} />
          </div>
        </div>
      </div>

      {/* Entire Portfolio */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Entire Portfolio</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {holdings.map((asset, idx) => (
            <Link key={idx} href={`/asset/${asset.symbol.toLowerCase()}`}>
              <div className="card p-4 hover:border-cyan-500/50 hover:scale-105 transition-all cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-white">{asset.symbol}</h3>
                  <span className={`text-sm ${asset.changePct >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {asset.changePct >= 0 ? '+' : ''}{asset.changePct.toFixed(1)}%
                  </span>
                </div>
                <p className="text-sm text-gray-400">{asset.name}</p>
                <p className="text-lg font-semibold text-white mt-2">${asset.value.toLocaleString()}</p>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-gray-500">{asset.sector}</span>
                  <span className="text-cyan-400">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Financial Events & Alerts */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
          📅 Financial Events & Alerts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4 hover:bg-white hover:bg-opacity-10 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{event.icon}</span>
                    <span className="font-semibold text-white">{event.title}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{event.date}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        event.impact === "High"
                          ? "bg-red-500/20 text-red-300"
                          : event.impact === "Medium"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-blue-500/20 text-blue-300"
                      }`}
                    >
                      {event.impact} Impact
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
