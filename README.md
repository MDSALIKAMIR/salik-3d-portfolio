# Md Salik Amir — 3D Portfolio

A futuristic, cyberpunk-themed 3D developer portfolio built with Next.js 14, Three.js, Framer Motion, and GSAP.

## ✨ Features

- **3D Interactive Background** — React Three Fiber star field, floating spheres and cubes
- **3D Hero Model** — Animated torus + torus knot with neon glow
- **Cyberpunk Dark Theme** — Deep purple/black with neon blue & cyan accents
- **Glassmorphism UI** — Frosted glass cards throughout
- **Custom Cursor** — Animated neon cursor (desktop only)
- **Loading Screen** — Animated 3D logo with progress bar
- **Typing Animation** — Role cycling with react-type-animation
- **Smooth Animations** — Framer Motion throughout every section
- **3D Card Tilt** — Mouse-based perspective tilt on project cards
- **Scroll Progress Bar** — Gradient indicator at top
- **Skills Section** — Animated progress bars + circular progress cards with category filter
- **Project Modal** — Click-to-expand project detail modal
- **Contact Form** — Ready for EmailJS integration
- **SEO Optimized** — Meta tags, Open Graph, Twitter cards
- **Fully Responsive** — Mobile, tablet, desktop

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D**: Three.js + React Three Fiber + Drei
- **Animation**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Contact**: EmailJS

## 📦 Installation

```bash
# 1. Clone or download the project
cd salik_3d_portfolio

# 2. Install dependencies
npm install

# 3. Copy env example
cp .env.example .env.local

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Setting up EmailJS

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables: `from_name`, `from_email`, `subject`, `message`
4. Copy your **Service ID**, **Template ID**, and **Public Key** into `.env.local`
5. In `ContactSection.tsx`, uncomment the EmailJS code block

## 🎨 Customization

All personal data is in `src/lib/data.ts`:

- **PORTFOLIO_DATA** — Name, role, tagline, contact info, social links
- **SKILLS** — Skill name, proficiency level, category
- **SERVICES** — Service cards with features
- **PROJECTS** — Project details, tech stack, links
- **EXPERIENCE** — Timeline entries
- **TESTIMONIALS** — Client testimonials

## 🌐 Deployment on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com
# Set environment variables in Vercel dashboard
```

**Manual deployment:**
1. Push code to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Project Settings → Environment Variables
4. Deploy!

## 📁 Project Structure

```
salik_3d_portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, CSS variables
│   │   ├── layout.tsx           # Root layout with fonts & SEO
│   │   └── page.tsx             # Main page assembling all sections
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroModel.tsx    # 3D torus/torus knot hero model
│   │   │   └── Scene3D.tsx      # 3D star field + floating objects
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky nav with mobile menu
│   │   │   └── Footer.tsx       # Footer with social links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── BackToTop.tsx
│   │       ├── CustomCursor.tsx
│   │       ├── LoadingScreen.tsx
│   │       ├── ScrollProgress.tsx
│   │       └── SectionWrapper.tsx
│   └── lib/
│       ├── data.ts              # All portfolio content
│       └── utils.ts             # Utility functions
├── public/                      # Static assets (add resume.pdf here)
├── .env.example
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📄 Adding Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

The download button in Hero and Navbar will automatically work.

## 🎭 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Neon Blue | `#00d4ff` | Primary accent, borders, glows |
| Deep Purple | `#8b5cf6` | Secondary accent, gradients |
| Cyan | `#00ffff` | Highlights, particles |
| Dark BG | `#030008` | Base background |
| Glass | `rgba(255,255,255,0.04)` | Card backgrounds |

## 📝 License

MIT — Free for personal and commercial use.
