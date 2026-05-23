# Shreeji Wealth — Premium Financial Advisory Website

A complete, production-grade, highly responsive premium wealth advisory website built for **Shreeji Wealth**. This platform helps families, executives, and high-net-worth individuals navigate Systematic Investment Plans (SIP), mutual funds, retirement goals, tax-saving schemes, and portfolio allocations.

## 🛠 Tech Stack

- **Frontend**: Next.js 16 (App Router) & React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (smooth, high-end micro-interactions)
- **Icons**: Lucide React
- **Language**: TypeScript

---

## ✨ Features Implemented

1. **Fintech Hero & Dashboard**: A responsive, CSS/SVG-animated mock dashboard displaying a portfolio trajectory, asset allocation summaries, and secure badge highlights.
2. **Interactive SIP Growth Estimator**: A dynamic tool with sliders allowing users to calculate compound returns live. Renders:
   - An **SVG Growth Curve** mapping accumulated wealth against invested capital.
   - An **SVG Ring Chart** displaying asset allocation ratios.
3. **Knowledge Base (Blog)**: Supports interactive category tab filtering (All, SIP, Wealth, Tax-Saving, Retirement) and a live text search bar to filter article cards.
4. **Advisory Intake Forms**: Contact and Consultation booking pages integrated with client-side validation, submit indicators, and dedicated Next.js API endpoints (`/api/contact` and `/api/book`) to securely log user requests.
5. **Modern Premium Aesthetics**: Curated color theme using deep dark tones (`#07111F`, `#0D1B2A`), emerald accents (`#0F766E`, `#14B8A6`), gold accents (`#C6A15B`), glowing animated background orbs, custom scrollbars, and fluid layout cards.
6. **SEBI & Regulatory Compliance**: Standard financial disclosures, disclaimer alerts, and claim statements built directly into the site footer.

---

## 📂 Project Directory Structure

```text
src/
├── app/                  # App Router Routes
│   ├── api/              # Form API Routes
│   │   ├── book/         # POST /api/book endpoint
│   │   └── contact/      # POST /api/contact endpoint
│   ├── about/            # Founder profiles & timeline
│   ├── services/         # 6 detailed advisory pages
│   ├── sip-calculator/   # Interactive sliders & graphs
│   ├── blog/             # Resources catalog and [slug] articles
│   ├── book/             # Intake scheduler
│   ├── contact/          # Helpdesk coordinates & form
│   ├── globals.css       # Custom scrollbars, animations, & glassmorphism
│   ├── layout.tsx        # Injecting Google Fonts (Inter + Plus Jakarta Sans)
│   └── page.tsx          # Landing page
├── components/           # Global components (Navbar, Footer, BackgroundOrbs)
├── data/                 # Dynamic markdown and service catalogs
└── lib/                  # Helper utilities
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository, navigate into the project directory, and install dependencies:
```bash
npm install
```

### 2. Development Mode
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build
Compile and verify the application for production deployment:
```bash
npm run build
```
This checks TypeScript safety, compiles pages, and exports static outputs.
