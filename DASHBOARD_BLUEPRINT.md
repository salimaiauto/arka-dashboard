# ARKA Command Center - Dashboard Blueprint
**Context for Antigravity App Builder**

## 1. Project Overview
**Name:** ARKA Command Center
**Purpose:** A centralized management interface for a high-volume Programmatic SEO operation driven by autonomous AI agents.
**User Persona:** "The Operator" (Salim Sandhey) - Needs high-level visibility, strategic control, and efficient approval workflows.
**Vibe:** Professional, Data-Dense, "Mission Control," Enterprise SaaS.

## 2. Core Modules & Features

### A. Dashboard Home (The "Cockpit")
*   **Global Stats:** Total Articles Published, Total Keywords Tracked, Avg. Ranking Position, Pending Approvals.
*   **Agent Status Widget:** Real-time pulse of the AI system.
    *   *Visual:* A list of agents (Market Research, Content Writer, etc.) with status indicators (Idle [Grey], Working [Green/Pulse], Error [Red]).
*   **Recent Activity Stream:** A log of system actions (e.g., "MRA finished research for 'Solar Panels'", "CWA drafted 'Best Solar Inverters'").

### B. Campaign Manager
*   **Function:** Define high-level strategy.
*   **Input Fields:**
    *   Niche/Vertical (e.g., "AI Automation")
    *   Target Country (Dropdown: US, UK, Global)
    *   Domain Authority Level (Slider: 0-100)
    *   Monetization Model (Tags: Ads, Affiliate, Lead Gen)
*   **List View:** Active campaigns with progress bars (e.g., "AI Automation: 15/50 Articles Published").

### C. Keyword Intelligence Hub
*   **Function:** Database of opportunities.
*   **Data Table:**
    *   Columns: Keyword, Search Volume, Keyword Difficulty (KD), CPC, Status (Targeted / Ignored / Published).
*   **Cluster Visualization:** A visual grouping (mind map or nested list) showing "Pillar Topics" and their supported "Cluster Keywords."

### D. Content Production Pipeline (The "Factory Floor")
*   **Visual Style:** Kanban Board (Columns: Backlog, Drafting, Quality Review, Tech SEO, Ready for Approval, Published).
*   **Card Details:** Article Title, Target Keyword, Current Agent Working.
*   **Interactivity:** Drag-and-drop (optional, primarily automated by agents).

### E. Approval Center (Critical Path)
*   **Function:** The "Human-in-the-Loop" gate.
*   **Interface:** A focused list of items in "Ready for Approval" state.
*   **Review Modal:** Clicking an item opens a detailed view:
    *   **Title & Meta:** Editable fields.
    *   **Scores:** AI Detection Score (0-100%), SEO Score (0-100%).
    *   **Preview:** Rendered HTML of the blog post.
    *   **Actions:** Large "Approve & Publish" button (Green), "Reject/Revise" button (Red) with comment field.

### F. Ranking & Performance
*   **Visuals:** Line charts showing ranking history for top keywords over time.
*   **Table:** "Winners & Losers" (Biggest rank gains/drops in last 24h).

## 3. Data Schema (Relational)

*   **Campaigns:** `id, name, niche, country, status`
*   **Keywords:** `id, campaign_id, text, volume, kd, intent, status`
*   **Clusters:** `id, campaign_id, pillar_topic, keywords_list`
*   **Articles:**
    *   `id, cluster_id, title, slug, content_html, status (draft/review/published)`
    *   `metrics: { ai_score, seo_score, ranking_prob }`
    *   `metadata: { meta_title, meta_desc, schema_json }`
*   **AgentLogs:** `id, agent_name, timestamp, action, details`

## 4. Technical Requirements for Antigravity
*   **Frontend:** React / Next.js (App Router preferred).
*   **Styling:** Tailwind CSS + Shadcn UI (for clean, accessible components).
*   **State Management:** React Query or similar for real-time data fetching.
*   **Responsiveness:** Must work seamlessly on Desktop and Tablet.
