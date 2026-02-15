<div align="center">
  <br />
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Neon%20Postgres-2496ED?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Drizzle%20ORM-FFDF00?style=for-the-badge&logo=drizzle&logoColor=black"/>
  </div>

  <h3 align="center">Acquisitions - Full Stack Production Ready App</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🐳 [Docker & Deployment](#deployment)
5. 🤸 [Quick Start (Local Dev)](#quick-start)
6. 🔗 [Assets](#links)

## <a name="introduction">🤖 Introduction</a>

Acquisitions is a robust, production-ready full-stack application leveraging the power of modern web technologies. This project demonstrates a complete DevOps lifecycle, taking an application from code to production with Docker, CI/CD, and serverless databases.

It features a clean, minimalist frontend built with **React** and **Tailwind CSS**, communicating securely with a scalable **Node.js/Express** backend. The database layer is managed by **Drizzle ORM** atop **Neon Postgres**, with a focus on developer experience and performance.

### 🖼️ Screenshots
<img src="public/readme/LandingPage.png">
<img src="public/readme/Dashboard.png">


## <a name="tech-stack">⚙️ Tech Stack</a>

### Frontend
-   **[React](https://react.dev/)**: Library for building user interfaces.
-   **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for blazing fast builds.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
-   **[Axios](https://axios-http.com/)**: Promise based HTTP client for the browser.
-   **[Zod](https://zod.dev/)**: TypeScript-first schema validation.

### Backend
-   **[Node.js](https://nodejs.org/)**: JavaScript runtime built on Chrome's V8 engine.
-   **[Express.js](https://expressjs.com/)**: Fast, unopinionated, minimalist web framework for Node.js.
-   **[Neon Postgres](https://neon.tech/)**: Serverless Postgres constructed for the cloud.
-   **[Drizzle ORM](https://orm.drizzle.team/)**: TypeScript-first ORM for SQL databases.

### DevOps & Infrastructure
-   **[Docker](https://www.docker.com/)**: Containerization for consistent environments (Dev & Prod).
-   **[GitHub Actions](https://github.com/features/actions)**: CI/CD automation.
-   **[Railway](https://railway.app/)**: Deployment platform for the final application.
-   **[Arcjet](https://arcjet.com/)**: Security layer for rate limiting and bot protection.

## <a name="features">🔋 Features</a>

### 🎨 Frontend
-   **Minimalist & Professional UI**: Clean design system using Tailwind CSS.
-   **Responsive Layout**: Fully responsive dashboard and landing pages.
-   **Authentication Flow**: Secure Login and Registration pages with error handling.
-   **Dashboard**: User management interface with real-time updates.
-   **Theme Support**: Dark/Light mode toggle.

### �️ Backend
-   **Secure API**: JWT-based authentication with httpOnly cookies.
-   **Role-Based Access Control (RBAC)**: Admin and User roles with permission middleware.
-   **Data Validation**: Strict input validation using Zod.
-   **Structured Logging**: Winston-based logging for easy debugging.
-   **Health Checks**: Endpoints for integrity monitoring.

### 🚀 DevOps
-   **Unified Docker Build**: A single Docker image serving both Frontend and Backend.
-   **Multi-Stage Dockerfile**: Optimized builds for production.
-   **Neon Local**: Local development proxy for seamless database branching.

## <a name="deployment">🐳 Docker & Deployment</a>

This project uses a **Unified Build** strategy. The `Dockerfile` builds the React frontend and allows the Express backend to serve it as static files.

### Deploying to Railway (or any Docker host)
1.  Connect your GitHub repository to Railway.
2.  Railway will detect the `Dockerfile`.
3.  Set the environment variables (DATABASE_URL, etc.).
4.  Deploy! Railway will build the full-stack image and expose it on the defined port (default: 3000).

## <a name="quick-start">🤸 Quick Start (Local Dev)</a>

We support two ways to run the project locally: **Hybrid** (Frontend local + Backend Docker) or **Full Docker**.

### Prerequisites
-   [Docker Desktop](https://www.docker.com/products/docker-desktop)
-   [Node.js](https://nodejs.org/en) (v18+)

### 1. Backend + Database (Docker)
Start the backend and database in development mode (hot-reload enabled for backend):

```bash
npm run dev:docker
```
*This runs `scripts/dev.sh`, starting the backend on port 3000 and Neon Local proxy.*

### 2. Frontend (Local)
For the best React development experience (HMR), run the frontend separately:

```bash
cd frontend
npm install
npm run dev
```
*The frontend will start on http://localhost:5173 and proxy API requests to port 3000.*

### Environment Variables
Create a `.env` file in the root based on `.env.example`:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgres://neon:npg@localhost:5432/neondb
ARCJET_KEY=your_key_here
```

## <a name="links">🔗 Assets</a>

-   **[Project Repository](https://github.com/Oussama-Ms/acquisitions)**
