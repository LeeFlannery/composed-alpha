# Composed Alpha - Developer Portfolio Platform

A modern, composable portfolio platform for showcasing developer projects with interactive visualizations and beautiful design. Built with Next.js, Storyblok, and cutting-edge web technologies.

## ✨ Features

- **Hero Card**: Beautiful developer profile showcase with gradient backgrounds and smooth animations
- **Portfolio Cards**: Horizontal cards displaying project screenshots, interactive charts, and key metrics
- **Interactive Visualizations**: Dynamic charts using Chart.js for displaying app/game statistics
- **Modern UX**: Smooth animations with Framer Motion, responsive design with Tailwind CSS
- **Composable Architecture**: Modular components built with React and TypeScript
- **Headless CMS**: Content management powered by Storyblok
- **Performance Optimized**: Built with Next.js 15 and Turbopack for fast development

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Chart.js](https://www.chartjs.org/) + [React Chart.js 2](https://react-chartjs-2.js.org/)
- **CMS**: [Storyblok](https://www.storyblok.com/)
- **Icons**: [Heroicons](https://heroicons.com/) + [Lucide React](https://lucide.dev/)
- **UI Components**: [Headless UI](https://headlessui.com/) + Custom components

## 🛠️ Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd composed-alpha
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Update the `.env.local` file with your Storyblok credentials:

   ```env
   STORYBLOK_ACCESS_TOKEN=your_storyblok_access_token_here
   STORYBLOK_PREVIEW_TOKEN=your_storyblok_preview_token_here
   NEXT_PUBLIC_STORYBLOK_VERSION=draft
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📊 Storyblok Content Models

### Developer Profile

```json
{
  "name": "String",
  "title": "String",
  "bio": "Textarea",
  "avatar": "Asset",
  "social_links": "Blocks",
  "location": "String",
  "skills": "Multi-options"
}
```

### Portfolio Item

```json
{
  "title": "String",
  "description": "Textarea",
  "screenshot": "Asset",
  "stats": "Blocks",
  "technologies": "Multi-options",
  "links": "Blocks",
  "category": "Single-option",
  "featured": "Boolean",
  "launch_date": "Date"
}
```

## 🎨 Customization

### Adding New Chart Types

Extend the `StatChart` component in `/src/components/StatChart.tsx` to support additional visualization types.

### Styling

The project uses Tailwind CSS with custom gradients and animations. Modify `/src/app/globals.css` for global styles.

### Components

All components are modular and can be found in `/src/components/`. Each component follows modern React patterns with TypeScript.

## 🚢 Deployment

The app is ready to deploy on Vercel, Netlify, or any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── HeroCard.tsx     # Developer profile hero section
│   ├── PortfolioCard.tsx # Individual portfolio item
│   ├── PortfolioGrid.tsx # Portfolio items container
│   └── StatChart.tsx    # Interactive chart component
└── lib/                 # Utilities and configurations
    ├── storyblok.ts     # Storyblok integration
    └── utils.ts         # Helper functions
```

## 🔧 Development

- **Linting**: `npm run lint`
- **Type Checking**: Run TypeScript compiler check
- **Build**: `npm run build`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ using modern web technologies**
