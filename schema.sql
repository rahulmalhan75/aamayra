create extension if not exists pgcrypto;

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  whatsapp_phone_number_id text,
  created_at timestamptz default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  name text,
  phone text not null,
  location text,
  property_type text,
  bedrooms integer,
  budget_min numeric,
  budget_max numeric,
  timeline text,
  score integer default 0,
  status text default 'new',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists conversations (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references conversations(id) on delete cascade,
  direction text not null check (direction in ('inbound','outbound')),
  message text not null,
  whatsapp_message_id text,
  created_at timestamptz default now()
);

create table if not exists properties (
  id uuid primary key default gen_random_uuid(),
  business_id uuid references businesses(id) on delete cascade,
  title text not null,
  location text,
  price numeric,
  bedrooms integer,
  area_sqft integer,
  description text,
  available boolean default true,
  created_at timestamptz default now()
);

create table if not exists followups (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  scheduled_at timestamptz not null,
  message text,
  status text default 'pending'
);
