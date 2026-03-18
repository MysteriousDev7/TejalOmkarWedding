# 🎨 Customization Guide

Detailed guide for customizing your wedding website.

## Table of Contents

- [Quick Start](#quick-start)
- [Configuration File](#configuration-file)
- [Updating Content](#updating-content)
- [Replacing Images](#replacing-images)
- [Customizing Colors](#customizing-colors)
- [Changing Fonts](#changing-fonts)
- [Modifying Animations](#modifying-animations)
- [Adding New Sections](#adding-new-sections)

## Quick Start

### 5-Minute Customization

1. **Update `config.json`** with your details
2. **Replace images** in `assets/images/`
3. **Edit text** in `index.html`
4. **Test** in browser
5. **Deploy**!

## Configuration File

The `config.json` file contains all key information:

```json
{
  "wedding": {
    "groom": {
      "firstName": "Omkar",
      "fullName": "Omkar Umesh Deshpande"
    },
    "bride": {
      "firstName": "Tejal",
      "fullName": "Tejal Jayant Kapadi"
    },
    "date": "2026-06-19",
    "time": "18:00",
    "hashtag": "TejOmay"
  }
}
```

### What to Update

- **Names**: Change bride and groom names
- **Date**: Wedding date (YYYY-MM-DD format)
- **Time**: Ceremony time (24-hour format)
- **Hashtag**: Your unique wedding hashtag
- **Venue**: Complete venue details
- **Events**: All event dates and times

## Updating Content

### 1. Names in HTML

Find and replace in `index.html`:

```html
<!-- Hero Section -->
<span class="bride-name">Tejal</span>
<span class="groom-name">Omkar</span>

<!-- Footer -->
<span>Tejal & Omkar</span>
```

### 2. Wedding Date

Update in multiple places:

```html
<!-- Hero Section -->
<time datetime="2026-06-19">19th June 2026</time>

<!-- JavaScript (countdown.js) -->
const weddingDate = 'June 19, 2026 18:00:00';
```

### 3. Love Story Timeline

Edit each timeline item in `index.html`:

```html
<article class="timeline-item left">
  <div class="timeline-text">
    <span class="timeline-year">1995-2000</span>
    <h3>Childhood Friends</h3>
    <p>Your story here...</p>
  </div>
</article>
```

**Tips:**
- Keep descriptions concise (2-3 sentences)
- Use emotional, personal language
- Maintain chronological order

### 4. Event Details

Update each event card:

```html
<article class="event-card">
  <time class="event-date" datetime="2026-06-17">17th June 2026</time>
  <h3 class="event-name">Mehendi Ceremony</h3>
  <p class="event-time">3:00 PM - 7:00 PM</p>
  <p class="event-description">Your description...</p>
  <div class="dress-code">
    <strong>Dress Code:</strong> Your dress code
  </div>
</article>
```

### 5. Venue Information

Update venue section:

```html
<h3>The Grand Maharaja Palace</h3>
<address class="venue-address">
  <strong>Address:</strong><br>
  Your venue address<br>
  City, State ZIP<br>
  Country
</address>
```

### 6. Google Maps

Get embed code:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your venue
3. Click **Share** → **Embed a map**
4. Copy iframe code
5. Replace in `index.html`

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...></iframe>
```

## Replacing Images

### Image Requirements

| Location | Recommended Size | Format | Max File Size |
|----------|-----------------|--------|---------------|
| Timeline | 1200x800px | JPG | 200KB |
| Gallery | 800x600px | JPG | 150KB |
| Events | 600x400px | JPG | 100KB |

### Timeline Images

Replace these 6 images:

```
assets/images/timeline/
├── childhood.jpg       (Your childhood photo)
├── school.jpg          (School days photo)
├── college.jpg         (College years photo)
├── young-adults.jpg    (Young adult photo)
├── proposal.jpg        (Proposal moment)
└── wedding.jpg         (Wedding preparation)
```

### Gallery Images

Replace these 6 images:

```
assets/images/gallery/
├── photo-1.jpg
├── photo-2.jpg
├── photo-3.jpg
├── photo-4.jpg
├── photo-5.jpg
└── photo-6.jpg
```

**Adding More Gallery Images:**

1. Add image to `assets/images/gallery/`
2. Add HTML in `index.html`:

```html
<figure class="gallery-item">
  <img src="assets/images/gallery/photo-7.jpg" alt="Description" loading="lazy">
  <figcaption class="gallery-overlay">
    <span>Caption</span>
  </figcaption>
</figure>
```

### Image Optimization

Use these tools:
- **[TinyPNG](https://tinypng.com)** - Compress PNG/JPG
- **[Squoosh](https://squoosh.app)** - Advanced compression
- **[ImageOptim](https://imageoptim.com)** - Mac app

**Command line (optional):**
```bash
# Install ImageMagick
# Then resize and compress:
magick convert input.jpg -resize 1200x800 -quality 85 output.jpg
```

## Customizing Colors

### Using CSS Variables

Edit `assets/css/variables.css`:

```css
:root {
  /* Primary Colors */
  --color-primary-maroon: #800020;   /* Main color */
  --color-primary-gold: #D4AF37;     /* Accent color */
  --color-primary-orange: #FF6B35;   /* Secondary */
  --color-primary-cream: #FFF8DC;    /* Light background */
}
```

### Color Scheme Examples

**Royal Purple & Gold:**
```css
--color-primary-maroon: #4B0082;
--color-primary-gold: #FFD700;
--color-primary-orange: #9370DB;
```

**Rose Gold & Blush:**
```css
--color-primary-maroon: #B76E79;
--color-primary-gold: #E6C9A8;
--color-primary-orange: #FFB6C1;
```

**Emerald & Gold:**
```css
--color-primary-maroon: #046307;
--color-primary-gold: #D4AF37;
--color-primary-orange: #50C878;
```

### Testing Colors

Use browser DevTools:
1. Right-click → Inspect
2. Find `:root` in Styles panel
3. Edit colors live
4. Copy values when satisfied

## Changing Fonts

### 1. Choose Fonts

Browse [Google Fonts](https://fonts.google.com):
- **Heading**: Serif fonts (Playfair Display, Cormorant, Lora)
- **Body**: Sans-serif (Poppins, Montserrat, Open Sans)
- **Script**: Cursive (Great Vibes, Parisienne, Dancing Script)

### 2. Update CSS Import

In `assets/css/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Heading+Font&family=Your+Body+Font&family=Your+Script+Font&display=swap');
```

### 3. Update Variables

In `assets/css/variables.css`:

```css
:root {
  --font-heading: 'Your Heading Font', serif;
  --font-body: 'Your Body Font', sans-serif;
  --font-script: 'Your Script Font', cursive;
}
```

### Font Pairing Suggestions

**Classic Elegant:**
- Heading: Playfair Display
- Body: Lato
- Script: Great Vibes

**Modern Minimal:**
- Heading: Montserrat
- Body: Open Sans
- Script: Parisienne

**Traditional:**
- Heading: Cormorant Garamond
- Body: Crimson Text
- Script: Dancing Script

## Modifying Animations

### Animation Speed

Edit `assets/css/variables.css`:

```css
:root {
  --duration-fast: 0.2s;      /* Quick animations */
  --duration-normal: 0.3s;    /* Standard speed */
  --duration-slow: 0.7s;      /* Slow animations */
}
```

### Disable Specific Animations

Comment out in component CSS files:

```css
/* Disable timeline slide-in */
.timeline-item.left .timeline-image {
  /* transform: translateX(-30px); */
  transform: translateX(0);
}
```

### Disable All Animations

Add to `assets/css/main.css`:

```css
* {
  animation: none !important;
  transition: none !important;
}
```

### Custom Animation

Add to `assets/css/animations.css`:

```css
@keyframes yourAnimation {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.your-element {
  animation: yourAnimation 1s ease-out;
}
```

## Adding New Sections

### Step 1: Add HTML

In `index.html`, add after existing section:

```html
<section id="your-section" class="your-section">
  <div class="container">
    <h2 class="section-title">Your Section Title</h2>
    <div class="decorative-line"></div>
    <p class="section-subtitle">Your subtitle</p>
    
    <!-- Your content here -->
    
  </div>
</section>
```

### Step 2: Create CSS Component

Create `assets/css/components/your-section.css`:

```css
.your-section {
  padding: var(--spacing-xl) 0;
  background: var(--color-white);
}

/* Add your styles */
```

### Step 3: Import CSS

In `assets/css/main.css`:

```css
@import url('components/your-section.css');
```

### Step 4: Add Navigation Link

In `index.html` navigation:

```html
<li role="none"><a href="#your-section" role="menuitem">Your Section</a></li>
```

## Advanced Customization

### Custom Countdown Target

Edit `assets/js/countdown.js`:

```javascript
// Change wedding date
const weddingDate = 'June 19, 2026 18:00:00';
```

### Modify Scroll Animation Trigger

Edit `assets/js/scroll-animations.js`:

```javascript
this.options = {
  threshold: 0.1,                    // Trigger at 10% visible
  rootMargin: '0px 0px -100px 0px'  // Offset from bottom
};
```

### Add Custom JavaScript

Create `assets/js/custom.js`:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  // Your custom code here
});
```

Include in `index.html`:

```html
<script src="assets/js/custom.js"></script>
```

## Tips & Best Practices

### Content Writing

- ✅ Keep it personal and authentic
- ✅ Use active voice
- ✅ Be concise (mobile users!)
- ✅ Proofread everything
- ❌ Avoid jargon or complex language

### Image Selection

- ✅ High quality, well-lit photos
- ✅ Consistent editing style
- ✅ Mix of candid and posed shots
- ✅ Show your personality
- ❌ Avoid blurry or pixelated images

### Color Selection

- ✅ Use wedding theme colors
- ✅ Ensure good contrast
- ✅ Test on different screens
- ✅ Consider cultural significance
- ❌ Don't use too many colors

### Testing

Always test after changes:
- [ ] Desktop browsers (Chrome, Firefox, Safari)
- [ ] Mobile devices (iOS, Android)
- [ ] Tablet view
- [ ] Different screen sizes
- [ ] Slow internet connection

## Getting Help

If you need assistance:

1. **Check documentation** - README.md, this file
2. **Browser console** - Look for error messages
3. **Test incrementally** - Make small changes
4. **Backup first** - Keep original files

---

**Happy customizing! 🎨**
