# HouseCrew 🏠

HouseCrew is a web application designed to help households organize, plan and share everyday duties between their members.

The application allows users to plan tasks, assign them to household members, track their completion, view tasks in a calendar and analyze household members' activity over time.

> 🚧 **Project status:** In development

## Getting Started

### Prerequisites

Before running the frontend, make sure you have installed:

- [Node.js](https://nodejs.org/) — a version 20.19+ or 22.12+ (compatible with the installed Vite 8.2 version)
- npm — installed alongside Node.js - 10+

### Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd house-crew
```

Install the dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to access the application.

### Available Scripts

| Command           | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server                            |
| `npm run build`   | Runs TypeScript project checks and creates a production build |
| `npm run lint`    | Runs ESLint to check the code                                 |
| `npm run preview` | Serves the production build locally for preview               |
| `npm run prepare` | Sets up Husky Git hooks                                       |

### Production Build

To verify the application and generate a production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

### Code Quality

To run ESLint:

```bash
npm run lint
```

Prettier is configured to format staged files automatically through `lint-staged` and Husky Git hooks.

To format files manually, run:

```bash
npx prettier --write .
```

## Features

### 📋 Dashboard - in progress

A personal view of household duties with different time ranges:

- day
- week
- month
- year
- task completion tracking
- marking tasks as completed
- recording time spent on completed tasks

### 📅 Calendar - in progress

A shared calendar presenting tasks for the entire household.

Planned functionality includes:

- displaying scheduled, completed and incomplete tasks
- viewing tasks across the current, previous and following month
- filtering tasks by household member, task status and task name
- displaying task details in a tooltip
- browsing historical tasks up to one year back

### 📝 Tasks management - almost finished

A dedicated section for managing household tasks.

Users will be able to:

- organize tasks into categories
- create new tasks
- add custom categories
- schedule tasks
- create recurring tasks
- assign tasks to specific household members
- view task completion statistics

Example categories include:

- bathroom
- kitchen
- bedroom
- living room
- terrace
- hallway
- pantry
- storage room
- garage
- shopping
- cooking
- childcare
- additional tasks

### 📊 Statistics - in progress

Statistics for individual household members and the household as a whole.

Planned metrics include:

- number of planned tasks
- number of completed tasks
- task completion rate
- time spent completing tasks

Statistics will be available for different periods:

- week
- month
- year

### 🔔 Notifications

The application is planned to support notifications and reminders for upcoming and overdue tasks.

### 📱 PWA

HouseCrew is planned as a Progressive Web App, allowing it to provide a more app-like experience on supported devices.

## Tech Stack

The project is being developed incrementally.

### Frontend

- React
- TypeScript
- Vite
- React Router

Initially, the frontend will use mock data so that the application structure and user experience can be developed independently from the backend.

### Backend — planned

- Python
- FastAPI
- Pydantic
- SQLAlchemy

### Database — planned

- PostgreSQL

### Architecture

The planned architecture is:

```text
React + TypeScript
        ↓
      REST API
        ↓
   Python + FastAPI
        ↓
    SQLAlchemy
        ↓
   PostgreSQL
```

## Development Approach

HouseCrew is being developed in stages.

### 1. Frontend

The first stage focuses entirely on the React application:

- application layout
- routing
- reusable components
- forms
- application state
- responsive design
- basic interactions
- mock data

### 2. Backend

Once the frontend has a solid structure, the backend will be introduced using Python and FastAPI.

The backend stage will cover:

- Python fundamentals
- REST API development
- Pydantic
- error handling
- asynchronous operations
- testing

### 3. Database

The next stage will introduce PostgreSQL and SQLAlchemy.

### 4. Frontend–Backend Integration

Mock data will gradually be replaced with data retrieved from the API.

```text
Mock data
   ↓
FastAPI
   ↓
SQLAlchemy
   ↓
PostgreSQL
```

## Project Structure

The frontend is organized around reusable components and application features.

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── routes/
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── common/
│
├── pages/
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   ├── DashboardPage.tsx
│   ├── CalendarPage.tsx
│   ├── TasksPage.tsx
│   └── StatisticsPage.tsx
│
├── data/
│   └── mock data
│
├── types/
├── hooks/
├── utils/
├── assets/
└── main.tsx
```

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd housecrew
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL displayed by Vite.

## Planned Routes

```text
/
├── /login
├── /register
│
└── /app
    ├── /dashboard
    ├── /calendar
    ├── /tasks
    └── /statistics
```

## Project Goals

HouseCrew is both a portfolio project and a practical application for exploring full-stack web development.

The project is intended to provide hands-on experience with:

- React
- TypeScript
- frontend architecture
- state management
- REST APIs
- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- frontend–backend integration
- testing
- responsive web development
- PWA development

## Future Development

The project will be developed incrementally. Features such as advanced calendar history, notifications, PWA capabilities and the complete backend infrastructure will be introduced in later stages.

---

**HouseCrew** — _One home. One team. Shared responsibilities._
