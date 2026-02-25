-- ARKA Command Center Database Schema (V3: Enterprise Edition)
-- Run this in Supabase SQL Editor to UPGRADE your existing schema.

-- 1. Job Queue History (For persistent logs beyond Redis)
create table public.job_history (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  job_id text not null, -- Redis Job ID
  agent_name text not null,
  status text not null default 'pending', -- pending, processing, completed, failed
  retry_count int4 default 0,
  error_message text,
  duration_ms int4,
  meta_data jsonb, -- input params
  constraint job_history_pkey primary key (id)
);

-- 2. Article Version History
create table public.article_versions (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  article_id uuid references public.articles (id),
  version_number int4 not null,
  content_html text not null,
  changed_by text default 'ARKA', -- or user email
  change_summary text,
  constraint article_versions_pkey primary key (id)
);

-- 3. Cost & Token Tracking (Add columns to articles)
alter table public.articles 
add column if not exists cost_usd float8 default 0,
add column if not exists total_tokens int4 default 0,
add column if not exists model_used text;

-- 4. Enable RLS for new tables
alter table public.job_history enable row level security;
alter table public.article_versions enable row level security;

create policy "Enable all access" on public.job_history for all using (true) with check (true);
create policy "Enable all access" on public.article_versions for all using (true) with check (true);
