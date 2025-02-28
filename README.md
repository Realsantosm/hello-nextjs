# Hello Next.js Project

This is a comprehensive [Next.js](https://nextjs.org) project created for [the Modern Full Stack Next.js Course](https://nextjscourse.dev/?utm_source=github).

## Project Overview

This project demonstrates:

- Next.js 15 with App Router
- React 19 with latest features
- TypeScript for type safety
- TailwindCSS for styling
- Client and Server Components
- Dynamic routing with blog posts
- Modern ESLint configuration

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Contains all page routes using the App Router
- `components/` - Reusable UI components
- `app/page.tsx` - Main homepage with a demo button component
- `app/about/page.tsx` - About page route
- `app/blog/[id]/page.tsx` - Dynamic blog post routes

## Features

- **App Router**: Utilizes Next.js 15's App Router for improved routing
- **React 19**: Takes advantage of the latest React features
- **TailwindCSS**: Modern utility-first CSS framework
- **TypeScript**: Full type safety throughout the application
- **Turbopack**: Enabled for faster development experience
- **Client Components**: Interactive UI elements with client-side JavaScript
- **Dynamic Routes**: Demonstrates parameterized routes for blog posts

## Styling

This project uses:

- TailwindCSS for utility-based styling
- CSS variables for theming with dark mode support
- Inter font from Google Fonts

## Getting Started with this Repository

### Fork the Repository

Forking creates your own copy of this repository under your GitHub account, allowing you to:

- Make changes without affecting the original project
- Contribute back to the original project via pull requests
- Track the original repository for updates

To fork this repository:

1. Click the "Fork" button in the top-right corner of this GitHub repository
2. Select your GitHub account as the destination
3. Wait for GitHub to create your fork

### Clone Your Fork

After forking, clone your fork to your local machine:

```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/hello-nextjs.git
cd hello-nextjs
```

### Install Dependencies

Install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run the Development Server

Start the development server as described in the Getting Started section above.

### Keeping Your Fork Updated

To keep your fork in sync with the original repository:

```bash
# Add the original repository as a remote called "upstream"
git remote add upstream https://github.com/ORIGINAL-OWNER/hello-nextjs.git

# Fetch changes from the upstream repository
git fetch upstream

# Merge changes from upstream into your local main branch
git checkout main
git merge upstream/main
```
