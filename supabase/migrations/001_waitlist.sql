-- Waitlist 테이블 생성
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  created_at timestamp with time zone default now()
);

-- RLS 활성화
alter table waitlist enable row level security;

-- 누구나 insert 가능 (anon key로)
create policy "Anyone can insert" on waitlist
  for insert with check (true);

-- 인덱스 추가
create index if not exists waitlist_email_idx on waitlist (email);
create index if not exists waitlist_created_at_idx on waitlist (created_at desc);
