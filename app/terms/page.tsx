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
  AlertTriangle,
  Shield,
  ArrowLeft,
  Check
} from "lucide-react";

export default function TermsPage() {
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
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Guardian
          </Link>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text">
              Guardian — Terms & Conditions (Final Version)
            </span>
          </h1>

          {/* Important Legal Notice */}
          <div className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Important Legal Notice</h2>
                <p className="text-gray-300">
                  By using Guardian, you acknowledge that this is an AI-powered analytical platform for informational purposes only. 
                  Guardian does not provide financial advice, and all investment decisions are made at your own risk.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Guardian, users acknowledge that they have read, understood, and agree to be bound by these 
                Terms & Conditions, Privacy Policy, and all applicable disclaimers. Continued use of Guardian constitutes ongoing 
                acceptance of any updated terms.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Educational Use Only</h2>
              <p>
                Guardian provides educational and analytical information only. It does not constitute financial, investment, or 
                legal advice. Users are encouraged to consult with certified financial professionals before making investment 
                decisions. Guardian is not responsible for any financial losses incurred based on platform data or insights.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p>Users agree to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Maintain the confidentiality of login credentials</li>
                <li>Use Guardian for lawful purposes only</li>
                <li>Not share, resell, or redistribute Guardian data or AI outputs</li>
                <li>Not misuse or interfere with platform functionality</li>
                <li>Violations may result in account suspension or termination</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. License to Use Guardian</h2>
              <p>
                Guardian grants users a limited, non-transferable, revocable license for personal educational purposes only. 
                All ownership and copyrights remain with Guardian. Users may not copy, reverse-engineer, or redistribute 
                Guardian&apos;s software, design, 3D logo, or AI components.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Subscription & Billing</h2>
              <p>Guardian operates under three subscription tiers:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><Link href="/pricing" className="text-blue-400 hover:text-blue-300">Guardian ($150/month)</Link></li>
                <li><Link href="/pricing" className="text-blue-400 hover:text-blue-300">Guardian+ ($1500/year)</Link></li>
                <li><Link href="/pricing" className="text-blue-400 hover:text-blue-300">Guardian Elite ($3000 for 2 years)</Link></li>
              </ul>
              <p className="mt-4">
                Subscriptions are billed on a recurring basis until manually canceled by the user. If users do not cancel 
                their subscription manually through their account before the renewal date, it will{" "}
                <span className="text-red-400 font-semibold">automatically renew</span> for the next billing cycle under the same plan. 
                Refunds are provided according to Guardian&apos;s internal refund policy, and no refund will be granted after 
                activation or renewal of a subscription.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                Guardian, its owners, affiliates, partners, and employees are not liable for any direct, indirect, incidental, 
                or consequential damages arising from the use or inability to use the platform. This includes but is not limited 
                to financial loss, data loss, or user misinterpretation of analytics. By using Guardian, users acknowledge they 
                assume full responsibility for all investment decisions.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. No Financial Advice</h2>
              <p>
                Guardian&apos;s AI Assistant provides educational insights derived from public data and financial trends. 
                It does not offer personalized or certified investment advice. Guardian operates as an educational analysis 
                platform only and shall not be held liable for any investment outcomes or decisions made based on its content.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
              <p>
                All intellectual property — including the Guardian brand, 3D sword logo, UI/UX design, codebase, AI algorithms, 
                datasets, and platform visuals — are the sole property of Guardian. Unauthorized use, reproduction, or modification 
                of Guardian&apos;s content or technology is strictly prohibited and may result in legal action.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Collection & Privacy</h2>
              <p>
                Guardian collects minimal user data such as email, subscription status, and usage analytics to improve platform 
                functionality and experience. All data collection complies with global privacy standards (GDPR, CCPA). Users 
                consent to data processing upon signup and can review Guardian&apos;s Privacy Policy for details. Guardian never 
                sells or rents user data to third parties.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Full Legal Protection Summary</h2>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Guardian is not a financial advisor.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>The CEO and team are not liable for financial loss or investment decisions.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Users accept Terms automatically by using Guardian.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>All Guardian intellectual property is legally protected.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Subscriptions auto-renew unless canceled manually.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Guardian reserves full rights to terminate or modify user access.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>Users bear sole responsibility for how they apply Guardian&apos;s insights.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Copyright Notice</h2>
              <p className="text-center text-gray-400">
                © 2025 Guardian. All rights reserved.
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" />
              Return to Guardian
            </Link>
            <p className="text-gray-400">© 2025 Guardian. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
