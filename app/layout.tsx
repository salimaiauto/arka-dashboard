import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Globe, FileText, Settings, BarChart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARKA Dashboard",
  description: "Autonomous Ranking & Knowledge Architect Control Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">ARKA</h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Autonomous SEO Commander</p>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              <Link href="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20">
                <LayoutDashboard size={20} />
                <span className="font-medium">Overview</span>
              </Link>
              <Link href="/campaigns" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
                <Globe size={20} />
                <span className="font-medium">Campaigns</span>
              </Link>
              <Link href="/content" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
                <FileText size={20} />
                <span className="font-medium">Content Pipeline</span>
              </Link>
              <Link href="/rankings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
                <BarChart size={20} />
                <span className="font-medium">Rankings</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
                <Settings size={20} />
                <span className="font-medium">Settings</span>
              </Link>
            </nav>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">System Online</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
