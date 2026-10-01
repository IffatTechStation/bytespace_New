# ByteSpace New - Online Course Platform

A modern, responsive online learning platform built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Assessment Requirements Covered

- Full Landing Page (Home)
- Login Page (Bonus)
- Register / Signup Page (Bonus)
- Clean, reusable component structure
- Responsive design (Mobile + Desktop)
- Ready for Vercel deployment

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open http://localhost:3000

## Project Structure

\`\`\`
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
│       ├── Testimonials.tsx
│       └── CTA.tsx
\`\`\`

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel

## Git Workflow (Required)

\`\`\`bash
# Create feature branch
git checkout -b feature/landing-page

# After finishing work
git add .
git commit -m "feat: complete landing page + auth pages"
git push -u origin feature/landing-page

# Then create Pull Request on GitHub
\`\`\`

## Deploy to Vercel

1. Push the repository to GitHub (public)
2. Go to vercel.com
3. Import the repository
4. Deploy (auto-detected as Next.js)

## Notes for Reviewer

- Landing page includes: Navbar, Hero, Courses, Features, Testimonials, CTA, Footer
- Login & Register pages are fully designed (bonus)
- All components are reusable and well-structured
- Fully responsive
