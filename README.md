# 🚀 Portfolio

A modern, high-performance personal portfolio website built with **React** and **Vite**, showcasing projects, skills, and professional experience.

---

## ✨ Features

- ⚡ **Blazing fast** — Built on Vite with React 19 for near-instant HMR
- 🎨 **Premium UI** — Dark-themed design with glassmorphism, smooth animations, and micro-interactions
- 📱 **Fully responsive** — Optimized for all screen sizes and devices
- 🔀 **Client-side routing** — Smooth navigation with React Router DOM
- 🗂️ **Project detail pages** — Dedicated pages per project with challenges, solutions, and tech stack
- 📩 **Contact section** — Integrated contact form for direct outreach
- 📄 **CV download** — Direct download link for the resume

---

## 🛠️ Tech Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Framework  | React 19                            |
| Build Tool | Vite 7                              |
| Routing    | React Router DOM 7                  |
| Styling    | CSS Modules + Vanilla CSS           |
| Linting    | ESLint 9                            |

---

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets (images, CV, etc.)
├── src/
│   ├── assets/         # Internal assets
│   ├── components/     # UI components (Navbar, Hero, Projects, etc.)
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── HireMe/
│   │   ├── Marquee/
│   │   ├── Navbar/
│   │   ├── ProjectDetail/
│   │   └── Projects/
│   ├── data/
│   │   └── projects.js  # Project data source
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🖥️ Projects Showcased

| Project | Category | Stack |
|---|---|---|
| **Chat Verde** | Conversational App | F# · .NET · NLP · C# |
| **Allegra E-Commerce** | E-Commerce | React · Vite · Tailwind CSS |
| **Business Directory** | Directory App | JavaScript · Tailwind CSS · Google Maps API |
| **Prod System** | ERP System | Java · SQL · MySQL |
| **Cash Crafter** | Fintech Tool | Java · C# · .NET · Windows Forms |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20.19 or higher
- **pnpm** v11

### Installation

```bash
# Clone the repository
git clone https://github.com/xItzHypeR/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (also accessible on your local network).

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server (with network host) |
| `pnpm build` | Build for production and prerender project metadata |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ — feel free to reach out!
</div>
