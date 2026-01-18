<<<<<<< HEAD
# Me API Playground

A small Next.js + Mongoose example that stores a single candidate profile and exposes REST-like API routes from the Next app (app/api/*). 

---

## Architecture

- Frontend + API: Next.js (App Router). UI components live in `app/components/*` and pages in `app/*`.
- Server-side persistence: MongoDB accessed via Mongoose models (`models/Profile.js`).
- DB connection helper: `lib/db.js` (exports `connectDB()`).
- API endpoints: implemented as route handlers under `app/api/*` (examples: `app/api/profile/route.js`, `app/api/projects/route.js`, `app/api/search/route.js`).
- Single-profile assumption: the code uses `Profile.findOne()` and operates on a single profile document.

---

## Setup

Prerequisites
- Node.js (recommended >=18)
- npm or yarn
- MongoDB (local or remote) or Docker

1) Clone repository
```bash
git clone https://github.com/Kajal-Maurya563/Me-api-playground.git
cd Me-api-playground
```

2) Environment
Create a `.env` file in project root with at least the following variables (the code expects `MONGODB_URI`; admin endpoints also check `ADMIN_KEY`):

MONGODB_URI=mongodb://<user>:<pass>@<host>:27017/<db>

3) Install dependencies
```bash
npm install
# or
yarn
```

4) Run locally
```bash
# development (Next dev server)
npm run dev
# or
yarn dev
```
By default the Next dev server serves the app and the API routes under `/api/*` (e.g. `GET /api/profile`).

---

## Schema

Profile model (from `models/Profile.js` — Mongoose schema)

- Project subdocument:
  - title: String
  - description: String
  - links: [String]

- Profile document fields:
  - name: String
  - email: String
  - education: String
  - skills: [String]
  - projects: [ProjectSchema]
  - work: [String]
  - links: { github: String, linkedin: String, portfolio: String }

Example document (JSON)
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "education": "B.Tech CSE",
  "skills": ["JavaScript", "Node", "Python"],
  "projects": [
    {
      "title": "Me API Playground",
      "description": "Intern assessment project",
      "links": ["https://github.com/yourrepo"]
    }
  ],
  "work": ["Intern"],
  "links": {
    "github": "https://github.com/yourname",
    "linkedin": "https://linkedin.com/in/yourname",
    "portfolio": "https://yourportfolio.com"
  }
}
```

API behavior notes about data:
- Many endpoints call `Profile.findOne()` and expect one profile document.
- `app/api/projects/route.js` filters `profile.projects` by a `skill` query param using a word-boundary regex.
- Admin endpoints require an `x-admin-key` header and compare it to `process.env.ADMIN_KEY`.

---

## Postman (minimal collection)

You can import this minimal collection JSON into Postman. Replace `{{baseUrl}}` with your server base URL.

```json
{
  "info": { "name": "Me API Playground - Minimal", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" },
  "item": [
    { "name": "Get profile", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/profile", "host": ["{{baseUrl}}"], "path": ["api","profile"] } } },
    { "name": "Create profile", "request": { "method": "POST", "header": [{ "key": "Content-Type", "value": "application/json" }], "body": { "mode": "raw", "raw": "{ \"name\": \"Alice\", \"email\": \"alice@example.com\" }" }, "url": { "raw": "{{baseUrl}}/api/profile" } } },
    { "name": "Search", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/search?q=node" } } },
    { "name": "Projects by skill", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/projects?skill=python" } } }
  ],
  "variable": [{ "key": "baseUrl", "value": "http://localhost:3000" }]
}
```

---

## Known limitations (reflecting repository code)

- Single-profile design: code uses `Profile.findOne()` — repository treats profile as a single document rather than supporting multiple users.
- No authentication: API routes do not require user authentication (only admin endpoints accept a single `x-admin-key` header).
- No input validation/sanitization: request payloads are accepted and passed to Mongoose without explicit validation in route handlers.
- No rate limiting / brute-force protection.
- No migrations: MongoDB schema changes are manual (Mongoose schema only).
- Admin key in env: `ADMIN_KEY` is compared directly; storing and rotating secrets is left to deployment.
- Minimal error handling: route handlers assume happy-path flows; some branches return simple error objects or HTTP 400/401.
- Tests: repository contains a `test.js` seeder script that requires `MONGODB_URI` — there are no automated test suites in the codebase.

---

=======
# Me API Playground

A small Next.js + Mongoose example that stores a single candidate profile and exposes REST-like API routes from the Next app (app/api/*). 

---

## Architecture

- Frontend + API: Next.js (App Router). UI components live in `app/components/*` and pages in `app/*`.
- Server-side persistence: MongoDB accessed via Mongoose models (`models/Profile.js`).
- DB connection helper: `lib/db.js` (exports `connectDB()`).
- API endpoints: implemented as route handlers under `app/api/*` (examples: `app/api/profile/route.js`, `app/api/projects/route.js`, `app/api/search/route.js`).
- Single-profile assumption: the code uses `Profile.findOne()` and operates on a single profile document.

---

## Setup

Prerequisites
- Node.js (recommended >=18)
- npm or yarn
- MongoDB (local or remote) or Docker

1) Clone repository
```bash
git clone https://github.com/Kajal-Maurya563/Me-api-playground.git
cd Me-api-playground
```

2) Environment
Create a `.env` file in project root with at least the following variables (the code expects `MONGODB_URI`; admin endpoints also check `ADMIN_KEY`):

MONGODB_URI=mongodb://<user>:<pass>@<host>:27017/<db>

3) Install dependencies
```bash
npm install
# or
yarn
```

4) Run locally
```bash
# development (Next dev server)
npm run dev
# or
yarn dev
```
By default the Next dev server serves the app and the API routes under `/api/*` (e.g. `GET /api/profile`).

---

## Schema

Profile model (from `models/Profile.js` — Mongoose schema)

- Project subdocument:
  - title: String
  - description: String
  - links: [String]

- Profile document fields:
  - name: String
  - email: String
  - education: String
  - skills: [String]
  - projects: [ProjectSchema]
  - work: [String]
  - links: { github: String, linkedin: String, portfolio: String }

Example document (JSON)
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "education": "B.Tech CSE",
  "skills": ["JavaScript", "Node", "Python"],
  "projects": [
    {
      "title": "Me API Playground",
      "description": "Intern assessment project",
      "links": ["https://github.com/yourrepo"]
    }
  ],
  "work": ["Intern"],
  "links": {
    "github": "https://github.com/yourname",
    "linkedin": "https://linkedin.com/in/yourname",
    "portfolio": "https://yourportfolio.com"
  }
}
```

API behavior notes about data:
- Many endpoints call `Profile.findOne()` and expect one profile document.
- `app/api/projects/route.js` filters `profile.projects` by a `skill` query param using a word-boundary regex.
- Admin endpoints require an `x-admin-key` header and compare it to `process.env.ADMIN_KEY`.

---

## Postman (minimal collection)

You can import this minimal collection JSON into Postman. Replace `{{baseUrl}}` with your server base URL.

```json
{
  "info": { "name": "Me API Playground - Minimal", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json" },
  "item": [
    { "name": "Get profile", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/profile", "host": ["{{baseUrl}}"], "path": ["api","profile"] } } },
    { "name": "Create profile", "request": { "method": "POST", "header": [{ "key": "Content-Type", "value": "application/json" }], "body": { "mode": "raw", "raw": "{ \"name\": \"Alice\", \"email\": \"alice@example.com\" }" }, "url": { "raw": "{{baseUrl}}/api/profile" } } },
    { "name": "Search", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/search?q=node" } } },
    { "name": "Projects by skill", "request": { "method": "GET", "header": [], "url": { "raw": "{{baseUrl}}/api/projects?skill=python" } } }
  ],
  "variable": [{ "key": "baseUrl", "value": "http://localhost:3000" }]
}
```

---

## Known limitations (reflecting repository code)

- Single-profile design: code uses `Profile.findOne()` — repository treats profile as a single document rather than supporting multiple users.
- No authentication: API routes do not require user authentication (only admin endpoints accept a single `x-admin-key` header).
- No input validation/sanitization: request payloads are accepted and passed to Mongoose without explicit validation in route handlers.
- No rate limiting / brute-force protection.
- No migrations: MongoDB schema changes are manual (Mongoose schema only).
- Admin key in env: `ADMIN_KEY` is compared directly; storing and rotating secrets is left to deployment.
- Minimal error handling: route handlers assume happy-path flows; some branches return simple error objects or HTTP 400/401.
- Tests: repository contains a `test.js` seeder script that requires `MONGODB_URI` — there are no automated test suites in the codebase.

---
>>>>>>> 19904a51daa1358de9f85aa550243e03079685a9
