## Database

This project reads/writes answers from Neon Postgres (`public.nine_questions_answers`).

### Required env vars

Create `.env.local` with:

```bash
DATABASE_URL=postgresql://<user>:<password>@<endpoint>.neon.tech/<database>?sslmode=require
```
