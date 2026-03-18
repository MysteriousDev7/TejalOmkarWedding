# 💍 Wedding Invitation Website - Tejal & Omkar

A professionally structured, modern wedding invitation website with beautiful CSS animations, modular components, and proper coding standards.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Development](#development)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Accessibility](#accessibility)

## ✨ Features

### Design & UI
- ✅ **Modern, Responsive Design** - Works flawlessly on all devices
- ✅ **Maharashtrian Theme** - Traditional colors and cultural elements
- ✅ **Beautiful Animations** - Smooth CSS transitions and scroll effects
- ✅ **Interactive Timeline** - Showcases love story through different life stages
- ✅ **Live Countdown Timer** - Real-time countdown to wedding day
- ✅ **Photo Gallery** - Elegant gallery with hover effects

### Technical
- ✅ **Modular CSS Architecture** - Component-based styling
- ✅ **Semantic HTML5** - Proper markup with ARIA labels
- ✅ **Vanilla JavaScript** - No framework dependencies
- ✅ **Performance Optimized** - Lazy loading, efficient animations
- ✅ **SEO Friendly** - Meta tags and structured data
- ✅ **Accessible** - WCAG 2.1 AA compliant

## 📁 Project Structure

```
WeddingInvite/
│
├── assets/
│   ├── css/
│   │   ├── components/
│   │   │   ├── navigation.css      # Navigation bar styles
│   │   │   ├── hero.css            # Hero section styles
│   │   │   ├── timeline.css        # Timeline component
│   │   │   ├── events.css          # Events section
│   │   │   ├── dress-code.css      # Dress code guide
│   │   │   ├── venue.css           # Venue section
│   │   │   ├── gallery.css         # Photo gallery
│   │   │   ├── instagram.css       # Instagram section
│   │   │   └── footer.css          # Footer styles
│   │   ├── variables.css           # CSS custom properties
│   │   ├── reset.css               # CSS reset
│   │   ├── animations.css          # Animation keyframes
│   │   ├── utilities.css           # Utility classes
│   │   └── main.css                # Main CSS (imports all)
│   │
│   ├── js/
│   │   ├── main.js                 # Main JavaScript
│   │   ├── navigation.js           # Navigation functionality
│   │   ├── countdown.js            # Countdown timer
│   │   └── scroll-animations.js    # Scroll animations
│   │
│   └── images/
│       ├── timeline/               # Timeline photos
│       │   ├── childhood.jpg
│       │   ├── school.jpg
│       │   ├── college.jpg
│       │   ├── young-adults.jpg
│       │   ├── proposal.jpg
│       │   └── wedding.jpg
│       ├── gallery/                # Gallery photos
│       │   ├── photo-1.jpg
│       │   ├── photo-2.jpg
│       │   └── ...
│       ├── events/                 # Event-specific images
│       └── icons/                  # Icons and favicon
│
├── docs/                           # Documentation
│   ├── CUSTOMIZATION.md            # Customization guide
│   ├── DEPLOYMENT.md               # Deployment guide
│   ├── MOBILE-GUIDE.md             # Mobile optimization guide
│   ├── PROJECT_SUMMARY.md          # Project summary
│   ├── QUICKSTART.md               # Quick start guide
│   └── STRUCTURE.md                # Structure overview
│
├── dev/                            # Dev / preview pages
│   └── all-colors-preview.html     # Color preview helper
│
├── themes/                         # Theme variants
│   ├── landing-*.html              # Themed envelope/landing pages
│   └── invite-*.html               # Themed invitation pages
├── config.json                     # Configuration file
├── index.html                      # Main HTML file
├── .gitignore                      # Git ignore file
├── .editorconfig                   # Editor configuration
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Optional: Local web server for development

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd WeddingInvite
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **View the website**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or directly open `index.html`

## ✏️ Customization Guide

### 1. Update Wedding Information

Edit `config.json` to update all wedding details:

```json
{
  "wedding": {
    "groom": {
      "fullName": "Your Groom Name"
    },
    "bride": {
      "fullName": "Your Bride Name"
    },
    "date": "2026-06-19",
    "hashtag": "YourHashtag"
  }
}
```

### 2. Replace Photos

**Timeline Photos** (600x400px recommended):
- `assets/images/timeline/childhood.jpg`
- `assets/images/timeline/school.jpg`
- `assets/images/timeline/college.jpg`
- `assets/images/timeline/young-adults.jpg`
- `assets/images/timeline/proposal.jpg`
- `assets/images/timeline/wedding.jpg`

**Gallery Photos** (various sizes):
- `assets/images/gallery/photo-1.jpg` through `photo-6.jpg`

### 3. Customize Colors

Edit `assets/css/variables.css`:

```css
:root {
  --color-primary-maroon: #800020;  /* Your primary color */
  --color-primary-gold: #D4AF37;    /* Your accent color */
  --color-primary-orange: #FF6B35;  /* Your secondary color */
}
```

### 4. Update Content

Edit `index.html` to modify:
- Love story descriptions
- Event details and times
- Venue information
- Any other text content

### 5. Customize Fonts

Change fonts in `assets/css/variables.css`:

```css
:root {
  --font-heading: 'Your Heading Font', serif;
  --font-body: 'Your Body Font', sans-serif;
  --font-script: 'Your Script Font', cursive;
}
```

Don't forget to update the Google Fonts import in `assets/css/main.css`.

## 🛠️ Development

### CSS Architecture

The project follows a modular CSS architecture:

1. **Variables** (`variables.css`) - All design tokens
2. **Reset** (`reset.css`) - CSS reset for consistency
3. **Animations** (`animations.css`) - Reusable keyframes
4. **Utilities** (`utilities.css`) - Helper classes
5. **Components** (`components/`) - Individual component styles

### JavaScript Modules

- **main.js** - Core functionality and utilities
- **navigation.js** - Navigation and smooth scrolling
- **countdown.js** - Countdown timer logic
- **scroll-animations.js** - Intersection Observer for animations

### Adding New Sections

1. Create a new CSS file in `assets/css/components/`
2. Import it in `assets/css/main.css`
3. Add HTML markup in `index.html`
4. Add any JavaScript if needed

### Code Standards

- **HTML**: Semantic HTML5, proper ARIA labels
- **CSS**: BEM-like naming, mobile-first approach
- **JavaScript**: ES6+, modular classes
- **Indentation**: 2 spaces (see `.editorconfig`)

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and save
4. Site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop project folder
3. Site goes live instantly with custom URL
4. Optional: Connect to GitHub for auto-deploys

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Deploy with one click
4. Auto-deploys on every push

### Option 4: Traditional Hosting

Upload all files via FTP to any web hosting service.

## 🌍 Browser Support

- ✅ Chrome (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Edge (latest 2 versions)
- ⚠️ Internet Explorer (not supported)

## ⚡ Performance

### Optimization Checklist

- [x] Minified CSS and JavaScript
- [x] Lazy loading images
- [x] Optimized animations (60fps)
- [x] Reduced HTTP requests
- [x] Compressed images
- [x] Preconnect to external resources

### Image Optimization

Use tools like:
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Advanced compression
- [ImageOptim](https://imageoptim.com/) - Mac app

Recommended sizes:
- Timeline photos: 1200px width, 800px height
- Gallery photos: 800px width
- File format: JPG for photos, PNG for graphics

## ♿ Accessibility

The website follows WCAG 2.1 AA standards:

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ Sufficient color contrast
- ✅ Reduced motion support
- ✅ Screen reader friendly

## 📝 Customization Checklist

- [ ] Update couple names in `config.json` and `index.html`
- [ ] Replace all timeline photos
- [ ] Replace all gallery photos
- [ ] Update wedding date and time
- [ ] Update venue details and address
- [ ] Update Google Maps embed URL
- [ ] Customize love story text
- [ ] Update event schedule and dates
- [ ] Update contact information
- [ ] Update Instagram hashtag
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Optimize all images
- [ ] Deploy to hosting service

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct (case-sensitive on Linux/Mac)
- Ensure images are in correct folders
- Verify file extensions match

### Animations not working?
- Check browser compatibility
- Clear browser cache
- Ensure CSS files are loading

### Countdown not working?
- Verify wedding date format in JavaScript
- Check browser console for errors
- Ensure JavaScript files are loading

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own wedding!

## 📞 Support

For issues or questions:
1. Check this README
2. Review code comments
3. Check browser console for errors

---

**Made with ❤️ for Tejal & Omkar's Special Day**

*19th June 2026*
