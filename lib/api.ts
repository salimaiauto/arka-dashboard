export interface SystemStatus {
  activeAgent: string;
  currentTask: string;
  lastUpdate: string;
}

export interface CampaignMetrics {
  totalKeywords: number;
  publishedContent: number;
  pendingApprovals: number;
}

// Placeholder for API client that would connect to OpenClaw Gateway
// In a real implementation, this would use fetch() to call the Gateway endpoints
// or read from the exposed file system via an API route.

export async function getSystemStatus(): Promise<SystemStatus> {
  // Simulated fetch
  return {
    activeAgent: "Idle",
    currentTask: "Dashboard Generation",
    lastUpdate: new Date().toISOString()
  };
}

export async function getCampaignMetrics(): Promise<CampaignMetrics> {
  // Simulated fetch
  return {
    totalKeywords: 20,
    publishedContent: 0,
    pendingApprovals: 0
  };
}
