# Seva Setu - Community Service Platform

Welcome to Seva Setu, a modern web platform for connecting volunteers with community service opportunities rooted in the Varkari tradition.

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx              # Landing page with hero section and features
│   ├── VarkariVolunteer.jsx  # Volunteer program information and registration
│   └── Organisers.jsx        # Team and organizers information
├── styles/
│   ├── Home.css              # Styling for the home page
│   ├── VarkariVolunteer.css  # Styling for volunteer page
│   └── Organisers.css        # Styling for organisers page
├── App.jsx                   # Main app component with routing
├── App.css                   # Global app styling (navbar, footer)
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## Features

### 🏠 Home Page
- Hero section with compelling call-to-action
- Quick navigation cards to main sections
- Features showcase section
- Volunteer testimonials
- Contact and registration section

### 🙏 Varkari Volunteer Program
- Program introduction and philosophy
- Benefits of volunteering
- Step-by-step guide to join
- Call-to-action button for registration

### 👥 Organisers Page
- Team member profiles
- Mission statement
- Organization values
- Contact information

## Technology Stack

- **Frontend Framework**: React 19
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Styling**: CSS3 (Flexbox, Grid)
- **Linting**: Oxlint

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Features to Add

- [ ] User authentication and registration system
- [ ] Volunteer management dashboard
- [ ] Event scheduling and management
- [ ] Volunteer tracking and hours logging
- [ ] Impact statistics and reporting
- [ ] Community feed and updates
- [ ] Contact form with email notifications
- [ ] Mobile app version
- [ ] Multi-language support

## Customization

### Colors
The main color scheme uses a purple gradient:
- Primary: `#667eea`
- Secondary: `#764ba2`

To change colors, update the gradient values in:
- `src/App.css` (navbar)
- `src/styles/Home.css` (hero and sections)
- `src/styles/VarkariVolunteer.css` (sections)
- `src/styles/Organisers.css` (sections)

### Content
Update the content directly in the JSX components:
- Home page: `src/pages/Home.jsx`
- Volunteer page: `src/pages/VarkariVolunteer.jsx`
- Organisers page: `src/pages/Organisers.jsx`

## Responsive Design

The site is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

Breakpoints are defined in each CSS file.

## Performance

- Built with Vite for fast development and production builds
- CSS is scoped per component for better organization
- Minimal JavaScript bundle size with React optimization
- Images should be optimized and placed in the `public/` folder

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linting checks

## Contributing

To add new pages:

1. Create a new file in `src/pages/`
2. Create corresponding CSS in `src/styles/`
3. Import and add route in `src/App.jsx`
4. Add navigation link in the navbar

## License

This project is part of Varithon's Seva Setu initiative.

## Support

For questions or issues, please contact the Seva Setu team at info@sevasetu.org

---

**Last Updated**: 2024
**Version**: 1.0.0
