-- ARKA Command Center Database Schema
-- Run this in the Supabase SQL Editor to create your tables.

-- 1. Campaigns Table
create table public.campaigns (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name text not null,
  niche text not null,
  target_country text not null,
  status text not null default 'active'::text, -- active, paused, completed
  constraint campaigns_pkey primary key (id)
);

-- 2. Keywords Table
create table public.keywords (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  campaign_id uuid references public.campaigns (id),
  keyword text not null,
  search_volume int4 null,
  difficulty int4 null,
  intent text null, -- informational, commercial, transactional
  status text not null default 'pending'::text, -- pending, clustered, ignored
  constraint keywords_pkey primary key (id)
);

-- 3. Content Clusters Table
create table public.clusters (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  campaign_id uuid references public.campaigns (id),
  pillar_topic text not null,
  status text not null default 'planned'::text,
  constraint clusters_pkey primary key (id)
);

-- 4. Articles Table (The Content)
create table public.articles (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  cluster_id uuid references public.clusters (id),
  title text not null,
  slug text not null,
  content_html text null, -- The full blog post body
  meta_title text null,
  meta_description text null,
  status text not null default 'draft'::text, -- draft, review, approved, published
  ai_score int4 null,
  seo_score int4 null,
  ranking_prob int4 null,
  published_url text null,
  constraint articles_pkey primary key (id)
);

-- 5. Agent Logs (System History)
create table public.agent_logs (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  agent_name text not null, -- MRA, CWA, KCA, etc.
  action text not null,
  details text null,
  status text not null default 'success'::text,
  constraint agent_logs_pkey primary key (id)
);

-- Enable Row Level Security (RLS) - Optional for now, good for security later
alter table public.campaigns enable row level security;
alter table public.keywords enable row level security;
alter table public.clusters enable row level security;
alter table public.articles enable row level security;
alter table public.agent_logs enable row level security;

-- Create basic policies to allow read/write (since you are the admin)
create policy "Enable all access for all users" on public.campaigns for all using (true) with check (true);
create policy "Enable all access for all users" on public.keywords for all using (true) with check (true);
create policy "Enable all access for all users" on public.clusters for all using (true) with check (true);
create policy "Enable all access for all users" on public.articles for all using (true) with check (true);
create policy "Enable all access for all users" on public.agent_logs for all using (true) with check (true);
