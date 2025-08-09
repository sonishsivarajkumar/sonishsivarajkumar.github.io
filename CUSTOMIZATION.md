# Portfolio Website Customization Guide

## 🎯 Quick Start

Your portfolio website is now ready! Here's how to customize it with your information:

## 📝 Step 1: Update Personal Information

### In `index.html`:

1. **Hero Section** (lines ~40-60):
   - Replace "Dr. Sonish Sivarajkumar" with your name
   - Update your title/position
   - Replace the description with your research focus
   - Update social media links with your profiles

2. **About Section** (lines ~80-120):
   - Replace the placeholder text with your biography
   - Update education information
   - Modify research areas and technical skills

3. **Contact Section** (lines ~200-220):
   - Update email address
   - Update institution/affiliation
   - Update location

## 📚 Step 2: Add Your Publications

### In `publications.js`:

Replace the sample publications with your actual publications in three categories:

```javascript
journal: [
    {
        year: 2024,
        title: "Your Paper Title",
        authors: "<strong>Your Name</strong>, Co-authors",
        venue: "Journal Name",
        details: "Vol. X, No. Y, pp. Z-W",
        doi: "https://doi.org/...",
        pdf: "link-to-pdf",
        code: "github-link" // optional
    }
],
conference: [...],
book: [...]
```

## 🖼️ Step 3: Add Your Photo

1. Add your professional headshot to `images/profile.jpg`
2. In `index.html`, replace the image placeholder:

```html
<!-- Replace this: -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- With this: -->
<img src="images/profile.jpg" alt="Your Name" class="profile-image">
```

## 🔬 Step 4: Update Research Information

### Current Research Section:
- Update the three research cards with your actual projects
- Modify icons, titles, and descriptions
- Add more cards if needed

## 🎨 Step 5: Customize Styling (Optional)

### In `styles.css`:
- Change color scheme by updating CSS variables in `:root`
- Modify fonts, spacing, or layout as needed
- The design is fully responsive and modern by default

## 🌐 Step 6: Deploy to GitHub Pages

1. **Repository Settings**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

2. **Custom Domain** (Optional):
   - If you have a custom domain, create a `CNAME` file with your domain
   - Update DNS settings to point to GitHub Pages

3. **SSL Certificate**:
   - GitHub Pages automatically provides SSL certificates
   - Your site will be available at `https://yourusername.github.io`

## 📊 Step 7: Adding External Profile Data

### LinkedIn Integration:
Currently manual - update the following sections with your LinkedIn data:
- Professional experience in About section
- Skills and endorsements
- Professional summary

### Google Scholar Integration:
1. Find your Google Scholar profile URL
2. Update publications manually in `publications.js`
3. Include citation counts and h-index in your bio

### ORCID Integration:
If you have an ORCID ID, you can potentially use the data-fetcher.js script for automatic updates.

## 🔧 Advanced Customization

### Adding New Sections:
1. Add new navigation link in the navbar
2. Create corresponding section in HTML
3. Add styling in CSS
4. Update JavaScript for smooth scrolling

### Analytics Integration:
Add Google Analytics or other tracking by including the script in `index.html`.

### SEO Optimization:
- Update meta tags in the `<head>` section
- Add structured data markup
- Optimize images with alt text

## 📱 Mobile Responsiveness

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## ⚡ Performance Tips

1. **Optimize Images**:
   - Compress images before uploading
   - Use appropriate formats (JPG for photos, PNG for graphics)
   - Consider WebP format for better compression

2. **Minimize CSS/JS**:
   - The current files are already optimized
   - Consider minifying for production if needed

## 🔍 SEO Best Practices

1. **Update Meta Tags**:
```html
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, research, keywords">
<meta name="author" content="Your Name">
```

2. **Add Open Graph Tags**:
```html
<meta property="og:title" content="Your Name - Research Scientist">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/images/profile.jpg">
```

## 🚀 Next Steps

1. Customize the content with your information
2. Test the website locally using the Python server
3. Push changes to GitHub
4. Enable GitHub Pages
5. Share your new portfolio website!

## 📞 Need Help?

If you need assistance with:
- Adding more complex functionality
- Integrating with external APIs
- Custom styling or layout changes
- Performance optimization

Feel free to modify the code or create new features as needed!

---

**Your portfolio website is now ready to showcase your research and professional achievements!** 🎉
