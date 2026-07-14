# Database Schema (inferred)

The clone ships with an in-memory store in `server/server.js`. For a real
deployment, here is the relational schema that mirrors the current data
model.

## Tables

### `services`
| Column     | Type          | Notes                                  |
|------------|---------------|----------------------------------------|
| id         | VARCHAR(64)   | PK — slug, e.g. `asset-recovery`       |
| number     | VARCHAR(4)    | Display order, e.g. `01`               |
| title      | VARCHAR(120)  | NOT NULL                               |
| headline   | VARCHAR(255)  | Subheading shown on home dark section  |
| summary    | TEXT          | One-sentence summary                   |
| image      | VARCHAR(512)  | Image URL                              |
| category   | VARCHAR(80)   | For grouping/filtering                 |
| created_at | TIMESTAMPTZ   | DEFAULT now()                          |

### `team_members`
| Column     | Type          | Notes                              |
|------------|---------------|------------------------------------|
| id         | SERIAL        | PK                                 |
| name       | VARCHAR(120)  | NOT NULL                           |
| role       | VARCHAR(120)  | e.g. `Founding Partner`            |
| image      | VARCHAR(512)  | Headshot URL                       |
| bio        | TEXT          | Long-form biography                |
| created_at | TIMESTAMPTZ   | DEFAULT now()                      |

### `articles`
| Column      | Type          | Notes                          |
|-------------|---------------|--------------------------------|
| id          | SERIAL        | PK                             |
| title       | VARCHAR(255)  | NOT NULL                       |
| slug        | VARCHAR(255)  | UNIQUE, derived from title     |
| excerpt     | TEXT          |                                |
| body        | TEXT          | Markdown / HTML                |
| image       | VARCHAR(512)  |                                |
| published_at| TIMESTAMPTZ   |                                |
| author_id   | INT           | FK → team_members(id)          |

### `reviews`
| Column     | Type          | Notes                              |
|------------|---------------|------------------------------------|
| id         | SERIAL        | PK                                 |
| initials   | VARCHAR(4)    | Avatar fallback, e.g. `DP`         |
| name       | VARCHAR(120)  |                                    |
| date       | DATE          |                                    |
| text       | TEXT          |                                    |
| rating     | SMALLINT      | 1–5                                |

### `leads` (writes from the contact form)
| Column     | Type          | Notes                              |
|------------|---------------|------------------------------------|
| id         | SERIAL        | PK                                 |
| slug       | VARCHAR(255)  | UNIQUE — name + timestamp          |
| fname      | VARCHAR(120)  | NOT NULL                           |
| mobile     | VARCHAR(40)   |                                    |
| email      | VARCHAR(255)  | NOT NULL — regex-validated         |
| subject    | VARCHAR(255)  |                                    |
| message    | TEXT          | NOT NULL                           |
| status     | VARCHAR(20)   | `received` → `in_review` → `closed`|
| created_at | TIMESTAMPTZ   | DEFAULT now()                      |

## Relationships

```
articles.author_id   → team_members.id
```

`services` and `reviews` are reference data — no FKs.

## Sample seed

See `server/data.js` for the full seed catalog (10 services, 12 team
members, 2 articles, 3 reviews). To bootstrap a real database, run:

```sql
INSERT INTO services (id, number, title, headline, summary, image, category) VALUES
  ('asset-recovery', '01', 'Asset Recovery',
   'Investigating and litigating sophisticated investment and corporate fraud.',
   'Tracing, freezing, and reclaiming assets across borders.',
   'https://www.gp-dm.com/assets/img/service/service-details-01.jpg',
   'financial disputes');
-- ...remaining rows
```

## Auth (not inferred)

The source site does not appear to expose an authenticated area — the
clone has no auth flow. If you add one, the recommended shape is:

- `users` table (`id`, `email` UNIQUE, `password_hash`, `role`, `created_at`)
- `sessions` table (`id`, `user_id` FK, `token`, `expires_at`)
- Issue JWTs signed with `JWT_SECRET` and validate via Express middleware
