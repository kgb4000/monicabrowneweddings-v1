# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

**Development:**
- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run linting

**Testing:**
No test scripts are currently configured in package.json.

## Code Architecture & Structure

This is a Next.js 15 wedding planning business website built with the App Router architecture.

### Key Technologies
- **Next.js 15** with App Router
- **React 19** 
- **Tailwind CSS** for styling
- **Headless UI** for UI components
- **Heroicons** for icons
- **GraphCMS/Hygraph** for blog content management
- **Typeform** for embedded forms
- **React Share** for social sharing
- **Sharp** for image optimization

### Directory Structure
- `app/` - Next.js App Router pages and layouts
  - `page.js` - Home page with services, testimonials, FAQs, and blog posts
  - `layout.js` - Root layout with Nav, Footer, and font configuration
  - `globals.css` - Global styles
  - Various service and location-specific pages (e.g., `/wedding-services/`, `/day-of-wedding-coordinator-washington-dc/`)
  - `blog/[slug]/page.js` - Dynamic blog post pages
- `components/` - Reusable React components
  - `Nav.js` - Navigation with mobile menu using Headless UI
  - `Footer.js` - Site footer
  - `Hero.js` - Hero section component
  - `Button.js` - Reusable button component
  - `ContactForm.js` - Contact form component
  - `ShareBtn.js` - Social sharing button

### Important Implementation Details

**Fonts:** Uses Google Fonts (Playfair Display for headings, Open Sans for body text) loaded via Next.js font optimization.

**Images:** Configured for external domains (images.unsplash.com, res.cloudinary.com) in next.config.mjs. Uses both Next.js Image component and regular img tags.

**Content Management:** Blog posts are fetched from GraphCMS/Hygraph using GraphQL queries. The main page fetches the 3 most recent posts.

**SEO & Structured Data:** 
- Comprehensive metadata in layout.js
- LocalBusiness and FAQPage structured data on homepage
- Extensive internal linking for location-based SEO

**Styling:** Tailwind CSS with custom font family configuration. Uses responsive design patterns (lg: prefixes for desktop).

**External Integrations:**
- Calendly booking links throughout the site
- Cloudinary for image hosting
- Typeform embeds for lead generation

### Content & Business Context
This is a wedding planning business serving the Washington DC metropolitan area (DC, Maryland, Northern Virginia). The site emphasizes:
- Full-service wedding planning
- Day-of coordination
- Indian and Jewish wedding specialization
- Small/micro wedding packages
- Wedding flowers and decoration services

The business targets busy couples and emphasizes stress-free wedding planning with multiple location-specific pages for SEO.

### Development Notes
- Uses client-side components sparingly (Nav.js with mobile menu state)
- Server-side fetching for blog posts with async/await
- No test framework currently configured
- No environment variables detected in the codebase
- Consistent use of semantic HTML and accessibility attributes