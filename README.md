# 🌏 Tripsy India Tours & Holidays — The Holiday Wala

A premium travel agency website built with React + Vite + Tailwind CSS + Framer Motion.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```
Output goes to `/dist` folder.

---

## ☁️ Deploy to Vercel (Recommended — Free)

### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Framework: Vite
# - Build: npm run build
# - Output: dist
```

### Option B: Vercel GitHub (Easiest)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project" → Import your repo
4. Select framework: **Vite**
5. Click **Deploy** 🎉

---

## ☁️ Deploy to Netlify

### Option A: Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B: Netlify Drag & Drop
1. Run `npm run build`
2. Go to https://netlify.com/drop
3. Drag your `/dist` folder into the browser
4. Done! ✅

### Option C: Netlify GitHub
1. Push to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📁 Project Structure

```
tripsy-india/
├── public/
│   ├── logo.png          ← Your brand logo
│   └── hero-bg.png       ← Hero section background
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx          ← Hero + Quick Enquiry
│   │   │   ├── About.jsx         ← About company
│   │   │   ├── WhyChooseUs.jsx   ← 4 feature cards
│   │   │   ├── Packages.jsx      ← 6 destination cards
│   │   │   ├── Stats.jsx         ← Animated counters
│   │   │   ├── CTABanner.jsx     ← Full-width CTA
│   │   │   ├── Testimonials.jsx  ← Auto-slider reviews
│   │   │   ├── Gallery.jsx       ← Masonry + lightbox
│   │   │   ├── FAQ.jsx           ← Accordion FAQs
│   │   │   └── Contact.jsx       ← Enquiry form
│   │   ├── TopBar.jsx    ← Contact info bar
│   │   ├── Navbar.jsx    ← Sticky nav + mobile drawer
│   │   ├── Footer.jsx    ← Dark footer 4-col
│   │   └── WhatsAppFloat.jsx ← Fixed WhatsApp button
│   ├── data/
│   │   └── siteContent.js    ← ⭐ ALL CONTENT HERE
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useCounter.js
│   ├── utils/
│   │   └── motionVariants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Update Content

All website content (text, prices, destinations, FAQs, etc.) is in:
```
src/data/siteContent.js
```

Edit this single file to update:
- Brand name, tagline, logo
- Contact phone/email/address
- Hero section text
- All 6 destination packages
- Testimonials (name, photo, review)
- FAQ questions & answers
- Gallery images
- Footer links

---

## 🎨 Colors

| Variable | Hex |
|----------|-----|
| Primary (Teal) | `#00B8C4` |
| Secondary (Blue) | `#0EA5E9` |
| Accent (Pink) | `#FF2E93` |
| Dark Navy | `#0F172A` |
| Text Dark | `#1E293B` |
| Text Light | `#64748B` |

---

## 📱 WhatsApp Integration

When users click **"Book Now"** or **"Send on WhatsApp"**, the website:
1. Generates a pre-filled message with their enquiry details
2. Opens `wa.me/919760867173` with the message
3. User just taps Send in WhatsApp

---

## 🏢 Business Info

- **Business:** Tripsy India Tours and Holidays
- **Phone:** +91 97608 67173
- **Email:** tripsyindia087@gmail.com
- **Address:** Shop No-46, Kotwali Road, Amroha, UP
