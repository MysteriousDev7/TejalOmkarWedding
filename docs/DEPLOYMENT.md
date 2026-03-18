# 🚀 Deployment Guide

Complete guide for deploying your wedding website to various hosting platforms.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [GitHub Pages](#github-pages)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Traditional Hosting](#traditional-hosting)
- [Custom Domain Setup](#custom-domain-setup)
- [SSL Certificate](#ssl-certificate)

## Pre-Deployment Checklist

Before deploying, ensure you've completed:

- [ ] Replaced all placeholder images with actual photos
- [ ] Updated all text content (names, dates, venue, etc.)
- [ ] Tested website on multiple devices
- [ ] Tested on different browsers
- [ ] Optimized all images (compressed)
- [ ] Updated meta tags for SEO
- [ ] Verified all links work
- [ ] Tested countdown timer
- [ ] Checked Google Maps embed
- [ ] Updated Instagram hashtag link

## GitHub Pages

### Step 1: Create GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Wedding website"

# Create repository on GitHub, then:
git remote add origin https://github.com/yourusername/wedding-website.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/wedding-website`

### Step 3: Custom Domain (Optional)

1. Add a file named `CNAME` in root directory with your domain:
   ```
   www.yourweddingdomain.com
   ```
2. Configure DNS settings with your domain provider:
   - Add CNAME record pointing to `yourusername.github.io`
3. Enable HTTPS in GitHub Pages settings

## Netlify

### Method 1: Drag & Drop (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Click **Add new site** → **Deploy manually**
4. Drag your entire project folder
5. Site goes live instantly!

### Method 2: Git Integration (Recommended)

1. Push code to GitHub (see above)
2. Go to [netlify.com](https://netlify.com)
3. Click **Add new site** → **Import an existing project**
4. Connect to GitHub
5. Select your repository
6. Click **Deploy site**
7. Auto-deploys on every push!

### Custom Domain on Netlify

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Netlify provides free SSL automatically

### Netlify Configuration File (Optional)

Create `netlify.toml` in root:

```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Vercel

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### Step 2: Deploy

**Option A: Using CLI**
```bash
cd WeddingInvite
vercel
```

**Option B: Using Web Interface**
1. Go to [vercel.com](https://vercel.com)
2. Sign up for free account
3. Click **Add New** → **Project**
4. Import from GitHub
5. Select repository
6. Click **Deploy**

### Custom Domain on Vercel

1. Go to **Project Settings** → **Domains**
2. Add your custom domain
3. Configure DNS as instructed
4. SSL is automatic

## Traditional Hosting

### Using FTP

1. **Get FTP credentials** from your hosting provider
2. **Download FTP client** (FileZilla, Cyberduck, etc.)
3. **Connect to server** using credentials
4. **Upload all files** to public_html or www directory
5. **Set permissions** (usually 644 for files, 755 for folders)

### Using cPanel File Manager

1. Log into cPanel
2. Open **File Manager**
3. Navigate to `public_html`
4. Click **Upload**
5. Select all project files
6. Upload and extract if needed

### Recommended Hosting Providers

- **Shared Hosting**: Bluehost, HostGator, SiteGround
- **Cloud Hosting**: DigitalOcean, Linode, Vultr
- **Managed**: WP Engine, Kinsta (if using WordPress)

## Custom Domain Setup

### DNS Configuration

Add these DNS records with your domain provider:

**For GitHub Pages:**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

**For Netlify:**
```
Type: CNAME
Name: www
Value: yoursite.netlify.app

Type: A
Name: @
Value: (Netlify will provide)
```

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

### DNS Propagation

- DNS changes can take 24-48 hours to propagate
- Check status at: [whatsmydns.net](https://whatsmydns.net)

## SSL Certificate

All recommended platforms provide free SSL:

- **GitHub Pages**: Automatic with custom domain
- **Netlify**: Automatic (Let's Encrypt)
- **Vercel**: Automatic (Let's Encrypt)
- **Traditional Hosting**: Usually available in cPanel

### Force HTTPS

Add to your hosting configuration or use meta redirect:

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

## Performance Optimization

### Before Deployment

1. **Minify CSS**
   ```bash
   # Using online tools or:
   npx clean-css-cli -o assets/css/main.min.css assets/css/main.css
   ```

2. **Minify JavaScript**
   ```bash
   npx terser assets/js/main.js -o assets/js/main.min.js
   ```

3. **Optimize Images**
   - Use TinyPNG or Squoosh
   - Target: < 200KB per image
   - Format: JPG for photos, PNG for graphics

### After Deployment

1. **Test Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev)
   - [GTmetrix](https://gtmetrix.com)
   - [WebPageTest](https://webpagetest.org)

2. **Enable Caching** (if using traditional hosting)
   
   Add to `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

## Monitoring & Analytics

### Google Analytics (Optional)

Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Simple Analytics (Privacy-Friendly)

Consider alternatives:
- [Plausible](https://plausible.io)
- [Fathom](https://usefathom.com)
- [Simple Analytics](https://simpleanalytics.com)

## Troubleshooting

### Site not loading after deployment

1. Check DNS settings
2. Clear browser cache
3. Wait for DNS propagation
4. Check hosting provider status

### Images not showing

1. Verify file paths are correct
2. Check file permissions (644)
3. Ensure images uploaded correctly
4. Check browser console for errors

### CSS/JS not loading

1. Verify file paths in HTML
2. Check file permissions
3. Clear CDN cache (if applicable)
4. Hard refresh browser (Ctrl+F5)

### Countdown timer not working

1. Check JavaScript console for errors
2. Verify date format is correct
3. Ensure JavaScript files are loading
4. Check timezone settings

## Post-Deployment

### Share Your Website

1. **Create QR Code**
   - Use [QR Code Generator](https://www.qr-code-generator.com)
   - Add to physical invitations

2. **Social Media**
   - Share on Facebook, Instagram, WhatsApp
   - Use your wedding hashtag

3. **Email Invitations**
   - Send link to guests
   - Include in save-the-date emails

### Monitor Traffic

- Check analytics regularly
- Monitor for any errors
- Gather feedback from guests

## Backup

Always keep a backup:

```bash
# Create backup
zip -r wedding-website-backup.zip WeddingInvite/

# Or use git
git push origin main
```

## Support

If you encounter issues:

1. Check hosting provider documentation
2. Review deployment logs
3. Test locally first
4. Check browser console for errors

---

**Good luck with your deployment! 🎉**
