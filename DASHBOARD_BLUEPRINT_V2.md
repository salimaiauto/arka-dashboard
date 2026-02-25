# ARKA Command Center - Dashboard Blueprint (V2: Supabase Edition)
**Context for Antigravity App Builder**

## 1. Project Overview (Updated)
**Name:** ARKA Command Center
**Purpose:** A centralized management interface for a high-volume Programmatic SEO operation.
**Backend:** **Supabase (PostgreSQL)**. All data resides in the cloud tables created via `ARKA_SCHEMA.sql`.
**Frontend:** React / Next.js (App Router).

## 2. Supabase Integration Requirements
**The App MUST connect to the provided Supabase Project.**

### Environment Variables
The app requires these secrets to function:
*   `NEXT_PUBLIC_SUPABASE_URL`: (User provided)
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (User provided)

### Data Fetching Logic (Crucial)
Instead of mock data, use the `supabase-js` client to query tables:

1.  **Dashboard Home:**
    *   **Active Campaigns:** `SELECT count(*) FROM campaigns WHERE status = 'active'`
    *   **Total Keywords:** `SELECT count(*) FROM keywords`
    *   **Recent Logs:** `SELECT * FROM agent_logs ORDER BY created_at DESC LIMIT 5`

2.  **Campaign Manager:**
    *   **List:** `SELECT * FROM campaigns`
    *   **Create:** `INSERT INTO campaigns (name, niche, target_country)`

3.  **Keyword Hub:**
    *   **List:** `SELECT * FROM keywords`
    *   **Filter:** Allow filtering by `volume`, `difficulty`, `intent`.

4.  **Content Pipeline:**
    *   **Kanban Board:** Group articles by `status` column (`draft`, `review`, `approved`, `published`).
    *   **Query:** `SELECT * FROM articles`

5.  **Approval Center:**
    *   **List Pending:** `SELECT * FROM articles WHERE status = 'review'`
    *   **Approve Action:** Update `articles` table -> SET `status = 'approved'` WHERE `id = [ID]`.
    *   **Reject Action:** Update `articles` table -> SET `status = 'draft'` (send back for revision).

## 3. Core Modules & Features (Refined)

### A. Dashboard Home
*   **KPI Cards:** Real-time counts from DB.
*   **Live Agent Feed:** Real-time subscription to `agent_logs` table.

### B. Campaign Manager
*   **Create Campaign Modal:** Simple form to add new rows to `campaigns` table.

### C. Keyword Intelligence
*   **Data Table:** Sortable columns (Volume, KD).
*   **"Add to Cluster" Action:** Select keywords -> Create new `clusters` entry.

### D. Content Production (The Factory)
*   **Kanban View:** Drag-and-drop cards between statuses (updates DB `status` field).
*   **Article Preview:** Clicking a card fetches `content_html` from `articles` table.

### E. Approval Center (The Human Gate)
*   **Review Mode:** Side-by-side view of Article HTML and Metadata.
*   **One-Click Publish:** Updates `status` to `published` (ARKA triggers actual publishing).

## 4. UI/UX Style
*   **Theme:** "Clean Enterprise SaaS" (Dark Mode toggle).
*   **Components:** Shadcn UI (Tables, Cards, Dialogs).
*   **Feedback:** Toast notifications on successful DB updates ("Campaign Created", "Article Approved").
