# VitaCare Pharmacy Website

A modern, beautiful, and responsive pharmacy website built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Fully Responsive**: Works seamlessly on all devices
- **Performance Optimized**: Built with Next.js 14 App Router
- **TypeScript**: Type-safe code for better developer experience
- **Smooth Animations**: CSS-based animations and micro-interactions
- **Accessibility**: Semantic HTML and ARIA labels

## 🎨 Design Highlights

- Soft, trustworthy medical aesthetic with calming colors
- Smooth scroll animations and hover effects
- Glass-morphism effects for modern look
- Custom gradient backgrounds and floating elements
- Interactive cards with transform animations
- Custom scrollbar styling

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download the project:
   ```bash
   cd pharmacy-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pharmacy-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services & products section
│   ├── About.tsx           # About us section
│   ├── Contact.tsx         # Contact section with form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎯 Sections

1. **Home**: Hero section with call-to-action
2. **Services & Products**: Overview of pharmacy services and product categories
3. **About Us**: Company story, values, and statistics
4. **Contact**: Contact form and information

## 🎨 Customization

### Colors

Update the color palette in `tailwind.config.js`:
- Primary: Teal/Green (health, nature, trust)
- Accent: Blue (professionalism, calm)

### Fonts

Change fonts in `app/layout.tsx` by importing different Google Fonts.

### Content

Update text content, contact information, and images in the respective component files.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes

## ⚡ Performance

- Server-side rendering with Next.js
- Optimized images and fonts
- CSS-only animations (no heavy JS libraries)
- Minimal bundle size

## 🛠️ Developer Experience

- TypeScript for type safety
- Clear component structure
- Reusable utility classes
- Easy to maintain and extend
- Well-commented code

## 📄 License

This project is free to use for personal and commercial purposes.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own pharmacy or healthcare website!

## 📞 Support

For questions or issues, please open an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
