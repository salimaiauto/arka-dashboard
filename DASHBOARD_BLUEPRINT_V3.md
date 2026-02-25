# ARKA Command Center - Dashboard Blueprint (V3: Enterprise Edition)
**Context for Antigravity App Builder**

## 1. Project Overview (Enterprise)
**Name:** ARKA Command Center V3
**Purpose:** An Enterprise-Grade Management Interface for a high-volume Programmatic SEO operation.
**Key Upgrades:** Job Queues (Redis), Robust Logging, Cost Tracking, Version Control.
**Backend:** **Supabase (PostgreSQL) + Redis (Job Queue)**.
**Frontend:** React / Next.js (App Router).

## 2. Advanced Data Integration Requirements

### A. Job Queue Monitoring (Redis/BullMQ)
The dashboard must visualize the state of the background job processing system.
*   **Data Source:** Query the `job_history` table (for persistent logs) and integrate with Redis API (for real-time queue depth).
*   **Key Metrics:**
    *   **Active Jobs:** Currently running agents.
    *   **Pending Jobs:** Queued tasks.
    *   **Failed Jobs:** Errors requiring attention.
    *   **Throughput:** Jobs completed per hour.

### B. Cost & Token Tracking
*   **Data Source:** `articles` table (`cost_usd`, `total_tokens`).
*   **Visualization:**
    *   **Cost per Article:** Bar chart.
    *   **Total Campaign Cost:** Aggregated sum.
    *   **Model Usage:** Pie chart (e.g., GPT-4 vs Gemini Pro).

### C. Content Version Control
*   **Data Source:** `article_versions` table.
*   **Interface:** Timeline view showing "Version 1 (Draft)", "Version 2 (Optimized)", etc.
*   **Functionality:** "Revert to Version" button.

## 3. Core Modules & Features (Expanded)

### A. "Mission Control" (Home)
*   **System Health:** CPU/Memory usage (mock/API), Redis Queue Depth.
*   **Live Job Feed:** Real-time stream of `job_history` updates (e.g., "MRA: Researching 'Solar' - Started").
*   **Cost Alert:** Widget showing MTD (Month-to-Date) spend vs Budget.

### B. Job Monitor (New Module)
*   **Table View:** ID, Agent, Status (Success/Fail), Duration, Retries.
*   **Actions:**
    *   **Retry Failed:** Trigger API to re-queue a specific job ID.
    *   **Cancel Job:** Stop a running process.
    *   **View Logs:** Modal showing full JSON output/error stack.

### C. Content Pipeline (Enhanced)
*   **Kanban Board:** Now includes "Processing" column (linked to Active Jobs).
*   **Cost Badge:** Each card shows estimated cost (e.g., "$0.12").

### D. Article Editor (Version Controlled)
*   **History Tab:** List of previous versions with timestamps and "Changed By".
*   **Diff View:** (Optional) Visual comparison of changes.

## 4. UI/UX Style
*   **Theme:** "Data-Dense Enterprise Dashboard" (Dark Mode default).
*   **Components:**
    *   **Status Badges:** Green (Success), Yellow (Pending), Red (Failed), Blue (Processing).
    *   **Charts:** Recharts/Visx for Cost and Queue depth.
    *   **Logs Terminal:** Monospace font area for viewing raw job logs.

## 5. API Endpoints (Conceptual)
*   `POST /api/jobs/retry`: Re-queue a failed job.
*   `GET /api/stats/cost`: Aggregate token usage.
*   `GET /api/articles/:id/history`: Fetch versions.
