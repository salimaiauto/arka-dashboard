"use client";

import { Activity, CheckCircle, AlertCircle, FileText, Database } from "lucide-react";
import { useEffect, useState } from "react";

// Mock Data for Initial Dashboard State
const mockStatus = {
  system: "Operational",
  activeAgent: "Idle",
  lastAction: "Dashboard Generation Initialized",
  campaign: "AI Automation for Business",
  queueLength: 0
};

const mockStats = [
  { label: "Drafts In Progress", value: 1, icon: FileText, color: "text-blue-500" },
  { label: "Published Content", value: 0, icon: CheckCircle, color: "text-green-500" },
  { label: "Pending Approval", value: 0, icon: AlertCircle, color: "text-yellow-500" },
  { label: "Keywords Tracked", value: 20, icon: Database, color: "text-purple-500" },
];

export default function DashboardOverview() {
  const [status, setStatus] = useState(mockStatus);

  // In a real implementation, useEffect would fetch from API
  // useEffect(() => { fetch('/api/status').then(...) }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Real-time system monitoring for ARKA.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Agent:</span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{status.activeAgent}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockStats.map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg bg-opacity-10 ${stat.color.replace('text-', 'bg-')}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Log */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Activity</h3>
            <button className="text-sm text-blue-600 hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100 dark:border-gray-700">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Dashboard Generation Initiated</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">ARKA paused content workflow to prioritize dashboard build.</p>
                <span className="text-xs text-gray-400 mt-1 block">Just now</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 pb-4 border-b border-gray-100 dark:border-gray-700">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Content Writer Agent Active</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Drafting "The Complete Guide to AI Automation..."</p>
                <span className="text-xs text-gray-400 mt-1 block">5 mins ago</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Keyword Cluster Agent Completed</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Organized 20 keywords into 3 pillar clusters.</p>
                <span className="text-xs text-gray-400 mt-1 block">15 mins ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Health / Status */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">System Health</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400">Memory Usage</span>
                <span className="font-medium text-gray-900 dark:text-white">45%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400">API Latency</span>
                <span className="font-medium text-gray-900 dark:text-white">120ms</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400">Error Rate</span>
                <span className="font-medium text-gray-900 dark:text-white">0%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Active Campaign</h4>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <p className="text-sm font-bold text-blue-700 dark:text-blue-300">AI Automation for Business</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">Target: Global • Goal: Topical Authority</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
