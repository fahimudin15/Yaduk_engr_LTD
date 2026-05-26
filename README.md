# ☀️ Yaduk Engineering LTD - Solar Power Solutions

Welcome to the official repository of **Yaduk Engineering LTD**'s web portal. This is a premium, high-performance web application designed for a modern solar engineering firm. It features an interactive Solar Savings Calculator, product catalog, services showcase, blog, and integrated customer contact channels.

---

## 🚀 Key Features

- **🔋 Interactive Solar Load Calculator**
  - Select household/commercial appliances from an interactive grid.
  - Specify appliance quantities and custom daily runtimes.
  - Customize battery backup storage capacity (in kWh).
  - **Instant Recommendation Engine**: Calculates total load (Watts), daily energy consumption (kWh), required system size (kW), required number of 400W solar panels, battery units, and matches the correct inverter tier.
  - **Dynamic Price Estimation**: Computes installation and components cost breakdowns in Nigerian Naira (₦).
  - **Interactive PDF Quotation**: Generates a professional, print-ready PDF quotation client-side via `html2pdf.js`. Includes an edit mode to update company details and terms on the fly before exporting.

- **🛠️ Service Catalog**
  - Showcases core technical offerings: Solar Panel Installation, System Maintenance, Battery Storage Installation, Inverter Setup, Energy Consultations, and custom Commercial Solar Projects.

- **📦 Premium Product Catalog**
  - Features high-quality solar products (Monocrystalline Panels, Smart Hybrid/String Inverters, Lithium-ion/Deep Cycle Batteries, MPPT Charge Controllers, Solar Street Lights, and Accessories) with complete technical specifications and pricing.

- **📞 Connected Contact Hub**
  - An interactive contact form along with corporate office hours, email, phone lines, and social links to capture client inquiries.

- **📰 Resources & FAQs**
  - Contains educational blogs on clean energy transition and interactive FAQ accordions to handle customer pre-sales inquiries.

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/) for optimized Server-Side Rendering (SSR), Static Site Generation (SSG), and routing.
- **Frontend Library**: [React 19](https://react.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/) for robust static typing.
- **Styling & Layout**: 
  - [Tailwind CSS v4](https://tailwindcss.com/) for custom utility classes and high-fidelity responsive layout design.
  - [PostCSS](https://postcss.org/) for modern CSS transforms.
  - Curated gradient themes (Emerald ⇄ Cyan ⇄ Blue) to embody clean energy aesthetics.
- **UI Components**: Built using customizable Radix UI primitives (e.g., Dialog, Accordion, Dropdown, Navigation Menu, Sidebar) via the shadcn design pattern.
- **Data Modeling & Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/) for reliable input handling.
- **Client-Side PDF Compiler**: [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Repository Structure

```text
Yaduk_engr_LTD/
├── app/                  # Next.js App Router (Layouts, pages, global CSS)
│   ├── about/            # About page route
│   ├── blog/             # Blog page route
│   ├── calculator/       # Interactive Solar Calculator route
│   ├── contact/          # Contact page route
│   ├── products/         # Product catalog page route
│   ├── services/         # Services page route
│   ├── globals.css       # Core design system & CSS custom properties
│   ├── layout.tsx        # App layout wrapper (Sidebar, Navigation)
│   └── page.tsx          # Homepage landing wrapper
├── components/           # Reusable React components
│   ├── ui/               # Lower-level Radix/shadcn UI primitives
│   ├── solar-calculator.tsx  # Interactive Solar Load & Quotation component
│   ├── hero.tsx          # Landing section with brand metrics
│   ├── products.tsx      # Solar products grid
│   ├── services.tsx      # Solar services overview
│   ├── contact.tsx       # Contact form and business hours card
│   ├── top-navbar.tsx    # Header navigation bar
│   ├── app-sidebar.tsx   # Sidebar drawer component
│   └── footer.tsx        # Footer navigation & social links
├── hooks/                # Custom React Hooks
├── lib/                  # Shared helper functions & utility scripts
├── public/               # Static assets (images, icons, and SVGs)
├── package.json          # Node dependencies & project script scripts
└── tsconfig.json         # TypeScript compiler configurations
```

---

## ⚙️ Getting Started & Installation

Follow these steps to run the application locally on your machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) installed on your system. Using **pnpm** or **npm** is recommended for package management.

### 2. Clone the Repository
```bash
git clone <repository-url>
cd Yaduk_engr_LTD
```

### 3. Install Dependencies
Run the installation command to fetch all required libraries:
```bash
pnpm install
# or
npm install
```

### 4. Run Development Server
Start the local server. By default, it runs on [http://localhost:3000](http://localhost:3000):
```bash
pnpm dev
# or
npm run dev
```

### 5. Build for Production
To build a highly optimized production bundle and start the server:
```bash
pnpm build
pnpm start
# or
npm run build
npm run start
```

---

## 📧 Contact & Support

For business inquiries, customized engineering drawings, or technical questions:

- 📍 **Address**: 45 Lekki-Epe Expressway, Lagos, Nigeria
- 📞 **Phone**: +234 (0) 9 0123 4567
- ✉️ **Email**: info@solarisenergy.ng
- 🕰️ **Hours**: Mon - Sat (9:00 AM - 6:00 PM), Emergency support 24/7
