# Eazmate Healthcare SaaS Website (Frontend)

Welcome to the frontend codebase for **Eazmate**, a premium healthcare SaaS startup that automates WhatsApp-based patient appointment booking, medication schedules, and clinic notification reminders for doctor practices and hospitals in India.

This project is built using **React 18/19**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, **React Router v6**, and **React Hook Form + Zod**.

---

## 🎨 Design Philosophy & Color Palette

"Trust at first glance." Eazmate blends the clinical professionalism of Apollo Hospitals with the familiar, user-friendly communication cues of WhatsApp. It features a clean, highly accessible layout tailored for senior clinic owners (35-55) and older patients (45-65).

### Core Color System (Config-driven via CSS Variables)
All colors are centralized inside `src/config/theme.config.ts` and loaded dynamically via a `ThemeProvider` to support white-labeling and future theme overrides:
- **Primary Green:** `#25D366` (WhatsApp Accent)
- **Dark Green:** `#128C7E` (WhatsApp Brand Contrast)
- **Teal:** `#075E54` (WhatsApp Deep Teal UI Header)
- **Light Green:** `#DCF8C6` (Patient Message bubble background)
- **White Surface:** `#FFFFFF` (Professional clean backdrop)
- **Alt Surface:** `#F7FDF9` (Alternating mint-tint background)

### Typography
- **Headings & displays:** `Playfair Display` (serif) - instills heritage, trust, and premium clinical quality.
- **Body copy:** `DM Sans` (sans-serif) - chosen for maximum legibility and clear letter spacing.

---

## 🚀 Key Features

1. **Animated Hero Section:**
   - Bold, clear copy in Hindi + English.
   - Interactive, simulated floating **WhatsApp Mobile Mockup** demonstrating a full real-world patient booking conversation.
   - Core CTA channels ("Get Custom Quote" & "Book WhatsApp Demo").
2. **Empathic Problem Cards:**
   - Highlights 3 core clinic issues: missed incoming patient calls, messy manual registers, and slot wastage from no-shows.
3. **Interactive "How It Works" Flow:**
   - 3-step responsive connection timeline explaining patient messages, AI bot scheduling, and instant clinic notifications.
4. **Services & Capabilities Grid:**
   - Booking bots, automated SMS/WhatsApp reminders, medication tracking schedules, and customized broadcasts.
5. **Legitimate About & Trust Indicators:**
   - Focuses on Indian digital healthcare data norms, HIPAA security encryption, and Bengaluru team profile.
6. **Accessible Contact Center:**
   - Large tap targets, direct WhatsApp action, and phone & email configurations designed for senior administrators.
7. **Robust "Get Quotation" Page:**
   - Dedicated page with validation powered by **React Hook Form** and **Zod**.
   - Accessible, colored error states.
   - Simulated loading state and success screen offering one-click WhatsApp contact redirection with pre-filled enquiry parameters.

---

## 📂 Folder Structure

```
src/
├── config/
│   └── theme.config.ts        # Centralized theme tokens and color palette
├── theme/
│   ├── ThemeProvider.tsx      # Injects theme variables as CSS properties
│   └── index.css              # Baseline Tailwind directives and custom layouts
├── routes/
│   └── index.tsx              # React Router v6 routing map
├── layouts/
│   └── MainLayout.tsx         # Responsive header, footer, and navigation
├── shared/
│   ├── components/            # Reusable UI tokens and buttons
│   └── hooks/                 # General hooks
├── features/
│   ├── landing/               # Hero, Problem, HowItWorks, Services, About, Contact
│   └── quotation/             # Quotation schemas
└── pages/
    ├── LandingPage.tsx        # High-conversion landing page
    └── QuotationPage.tsx      # Accessible React Hook Form quotation page
```

---

## 🛠️ Installation & Setup

1. **Clone and navigate to the directory:**
   ```bash
   cd Projects/Eazmates
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build production bundles and compile TypeScript:**
   ```bash
   npm run build
   ```
   *Compiles into strict, minified production assets located under `dist/`.*
