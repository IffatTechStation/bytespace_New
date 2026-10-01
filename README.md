# ByteSpace New - Online Course Platform

A modern, responsive online learning platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Live Demo:** [https://bytespace-new-chi.vercel.app/](https://bytespace-new-chi.vercel.app/)

## Assessment Requirements Covered

- Full Landing Page (Home)
- Login Page (Bonus)
- Register / Signup Page (Bonus)
- Clean, reusable component structure
- Responsive design (Mobile + Desktop)
- Deployed on Vercel

## Live Links

| Item | Link |
|------|------|
| Live site | https://bytespace-new-chi.vercel.app/ |
| GitHub repo | https://github.com/IffatTechStation/bytespace_New |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

##Project Structure
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── login/page.tsx    # Login page
│   ├── register/page.tsx # Register page
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Courses.tsx
│       ├── Features.tsx
│       ├── Growth.tsx
│       ├── Testimonials.tsx
│       └── CTA.tsx

#Tech Stack
Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Deployment: Vercel

#Notes for Reviewer
Landing page includes: Navbar, Hero, Courses, Features, Growth, Testimonials, CTA, Footer
Login (/login) and Register (/register) pages are included as bonus
Components are reusable and organized under layout/ and sections/
Responsive for mobile, tablet, and desktop
Public GitHub repo with feature-branch workflow and merge to main
Live deployment on Vercel
