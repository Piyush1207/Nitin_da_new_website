# Dr. Nitin Satpute Portfolio

A high-performance, visually immersive professional portfolio website showcasing the academic and professional achievements of Dr. Nitin Satpute.

## Description

This project is a modern single-page application (SPA) designed to highlight expertise in Cloud Architecture, HPC/GPU, and AI Platform Solutions. It features an interactive 3D hero section, dynamic skill marquees, and dedicated pages for detailed projects and publications.

The site focuses on providing a seamless user experience across devices, utilizing a dark/light mode compatible design and fluid animations to present a professional academic and industrial narrative.

## Tech Stack

- **Frontend**: React 19, Vite, TypeScript/JavaScript
- **Styling**: Tailwind CSS 4, Styled Components
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations**: Framer Motion, `react-type-animation`
- **Icons**: Lucide React, React Icons (Fa, Si)
- **Routing**: React Router DOM

## Project Structure

- `src/` - Application source code
  - `components/` - Reusable UI components (ProjectsPage, JournalsPage, Button)
  - `assets/` - Static images and media
  - `data.js` - Centralized data store for personal info, experience, projects, and publications
  - `App.jsx` - Main application logic, routing, and section definitions
  - `main.jsx` - Entry point for the React application

## Prerequisites

- Node.js 18+ (Latest LTS recommended)
- npm or yarn

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Key Features

- **Interactive 3D Hero**: A dynamic background featuring floating 3D geometries powered by Three.js.
- **Responsive Navigation**: A mobile-friendly navbar with smooth scrolling to sections.
- **Dynamic Content**: Data-driven rendering of education, experience, and skills using a centralized `data.js` file.
- **Detailed Views**: Dedicated views for an expanded list of projects and academic journals.
- **Skill Marquees**: Animated horizontal scrolls showcasing a wide range of technical competencies.
- **Modern UI**: Built with Tailwind CSS 4 for a clean, professional, and responsive aesthetic.

## Notes

- The site is designed to be highly performant with `Suspense` for 3D assets and lazy loading for images.
- CV is available for download via a direct link in the hero section.
- All professional and academic data is maintained in `src/data.js` for easy updates.
