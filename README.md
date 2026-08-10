# CalcNest

**CalcNest — All Calculators in One Place**

CalcNest is a modern, extensible calculator platform built with React and TypeScript. It provides simple, easy-to-use calculators with explanations to help users understand the calculations and results.

The project is designed with scalability in mind so that new calculators can be added without restructuring the application.

## ✨ Features

* 📊 Multiple calculators in one application
* 🔎 Calculator search
* 📂 Category-based calculator navigation
* 📱 Responsive layout
* ⚡ Lazy-loaded calculator pages
* 🧩 Reusable React components
* 🔷 TypeScript
* 🧭 React Router
* 🎨 CSS Modules
* 📖 Calculation explanations
* 🚀 Vite-powered development and production builds

## 🧮 Current Calculators

### Financial

* Simple Interest Calculator

### Coming Soon

* Compound Interest Calculator
* EMI Calculator
* SIP Calculator
* Loan Calculator
* Percentage Calculator
* And more...

## 🏗️ Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── icons/
│
├── calculators/
│   ├── calculator.registry.ts
│   ├── calculator.search.ts
│   ├── calculator.types.ts
│   └── simple-interest/
│
├── components/
│   ├── CalculatorCategory/
│   ├── CalculatorLayout/
│   ├── Footer/
│   ├── Header/
│   ├── InputField/
│   ├── ResultCard/
│   └── Sidebar/
│
├── pages/
│
├── utils/
│
├── App.tsx
└── main.tsx
```

## 🧩 Extensible Architecture

CalcNest uses a calculator registry so that calculators can be added independently.

A new calculator can be introduced by adding its calculator configuration and component without modifying the core sidebar architecture.

Conceptually:

```text
Calculator Registry
        │
        ├── Simple Interest
        ├── Compound Interest
        ├── EMI
        ├── SIP
        └── Future calculators
```

The sidebar automatically uses the registry to display calculators by category.

## 🔍 Calculator Search

Users can search calculators directly from the sidebar.

For example:

```text
Search: EMI

Financial
  └── EMI Calculator
```

Matching categories are automatically opened while searching.

## ⚡ Lazy Loading

Calculator pages are loaded dynamically using React lazy loading.

This prevents all calculator components from being included in the initial JavaScript bundle.

```text
Application
    │
    ├── Initial application
    │
    ├── Simple Interest → loaded when needed
    ├── EMI             → loaded when needed
    └── SIP             → loaded when needed
```

This architecture makes CalcNest easier to scale as more calculators are introduced.

## 🛠️ Tech Stack

* React
* TypeScript
* React Router
* Vite
* CSS Modules
* ESLint

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed.

Check your versions:

```bash
node --version
npm --version
```

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/calcnest.git
```

Move into the project:

```bash
cd calcnest
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Code Quality

Run ESLint:

```bash
npm run lint
```

## 🌐 Deployment

CalcNest is designed to be deployed as a static frontend application.

Possible hosting platforms include:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

The production build is generated using:

```bash
npm run build
```

## 📄 License

The project license will be added before the public production release.

## 👨‍💻 Project Status

CalcNest is actively being developed.

The initial version focuses on establishing a scalable calculator architecture before adding a larger collection of calculators.

---

**CalcNest — All Calculators in One Place**