# 🚀 Quick Start Guide

Get your wedding website up and running in 10 minutes!

## ⚡ 3-Step Setup

### Step 1: Add Your Photos (5 minutes)

Replace placeholder images in these folders:

**Timeline Photos** (`assets/images/timeline/`):
```
✓ childhood.jpg      → Your childhood photo together
✓ school.jpg         → School days photo
✓ college.jpg        → College years photo
✓ young-adults.jpg   → Young adult photo
✓ proposal.jpg       → Proposal moment
✓ wedding.jpg        → Wedding preparation/engagement
```

**Gallery Photos** (`assets/images/gallery/`):
```
✓ photo-1.jpg through photo-6.jpg → Your favorite couple photos
```

**💡 Tip**: Use [TinyPNG](https://tinypng.com) to compress images before uploading.

### Step 2: Update Your Information (3 minutes)

Edit `index.html` - Find and replace:

1. **Names** (Line ~50):
   ```html
   <span class="bride-name">Tejal</span>  → Your bride name
   <span class="groom-name">Omkar</span>  → Your groom name
   ```

2. **Date** (Line ~60):
   ```html
   <time datetime="2026-06-19">19th June 2026</time>  → Your date
   ```

3. **Hashtag** (Line ~450):
   ```html
   <span class="hashtag">#TejOmay</span>  → Your hashtag
   ```

4. **Venue** (Line ~380):
   ```html
   <h3>The Grand Maharaja Palace</h3>  → Your venue name
   ```

### Step 3: Run Locally (2 minutes)

**Option A: Simple (Double-click)**
- Just double-click `index.html` to open in your browser
- Works for basic testing

**Option B: Local Server (Recommended)**

Using a local server ensures all features work correctly (fonts, animations, etc.)

**Windows (PowerShell):**
```powershell
# Navigate to your project folder
cd G:\WeddingInvite

# Start Python server (if Python installed)
python -m http.server 8000

# OR use Node.js (if Node installed)
npx http-server -p 8000

# Open browser to: http://localhost:8000
```

**Mac/Linux (Terminal):**
```bash
# Navigate to your project folder
cd /path/to/WeddingInvite

# Start Python server
python3 -m http.server 8000

# OR use Node.js
npx http-server -p 8000

# Open browser to: http://localhost:8000
```

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Site opens at `http://127.0.0.1:5500`

**Using Browser Extensions:**
- Chrome: Install "Web Server for Chrome"
- Firefox: Install "Live Server Web Extension"

### Step 4: Test & Deploy (2 minutes)

1. **Test Locally**:
   - Open site in local server (see Step 3)
   - Check all sections load correctly
   - Test on mobile (resize browser or use DevTools)
   - Verify countdown is working
   - Check all images display

2. **Deploy** (Choose one):
   
   **Option A: Netlify** (Easiest)
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop your `WeddingInvite` folder
   - Done! ✨

   **Option B: GitHub Pages**
   ```bash
   git init
   git add .
   git commit -m "Wedding website"
   git push to GitHub
   Enable Pages in Settings
   ```

## 🎨 Optional Customization

### Change Colors (1 minute)

Edit `assets/css/variables.css` (Line 10-15):
```css
--color-primary-maroon: #800020;  → Your color
--color-primary-gold: #D4AF37;    → Your color
```

### Update Love Story (5 minutes)

Edit `index.html` - Find timeline sections and update the text in each `<p>` tag with your actual story.

## ✅ Pre-Launch Checklist

- [ ] All photos replaced
- [ ] Names updated everywhere
- [ ] Wedding date correct
- [ ] Venue information accurate
- [ ] Event dates and times correct
- [ ] Google Maps link working
- [ ] Instagram hashtag correct
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] All links working

## 🆘 Common Issues

**Images not showing?**
→ Check file names match exactly (case-sensitive)
→ Use a local server instead of opening file directly

**Countdown not working?**
→ Update date in `assets/js/countdown.js` line 43

**Colors look wrong?**
→ Clear browser cache (Ctrl+F5)

**Fonts not loading?**
→ Must use local server (not file://)
→ Check internet connection (Google Fonts)

**"Python not found" error?**
→ Install Python from [python.org](https://python.org)
→ OR use VS Code Live Server extension
→ OR just double-click index.html for basic testing

**Port 8000 already in use?**
→ Use different port: `python -m http.server 8080`
→ Then open: `http://localhost:8080`

## 📱 Share Your Website

Once deployed:
1. Create QR code at [qr-code-generator.com](https://qr-code-generator.com)
2. Share link on WhatsApp/Instagram
3. Add to physical invitations

---

**Need more help?** Check `README.md` for detailed documentation.

**Ready to customize more?** See `docs/CUSTOMIZATION.md`

**Want to deploy?** See `docs/DEPLOYMENT.md`
