
create table
  public.reviews (
    id uuid not null default gen_random_uuid (),
    created_at timestamp with time zone not null default now(),
    enjoyment smallint not null,
    difficulty smallint not null,
    comment text null default ''::text,
    grade character varying not null default ''::character varying,
    professor_id character varying not null,
    constraint reviews_pkey primary key (id)
  ) tablespace pg_default;