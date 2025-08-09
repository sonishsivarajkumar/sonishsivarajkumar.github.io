# Development Guide for Your Portfolio

This guide will help you set up and develop your personal portfolio website locally.

## Prerequisites

Make sure you have the following installed:
- Ruby (version 2.7 or higher)
- Bundler gem
- Git

## Setup

1. **Install dependencies:**
   ```bash
   bundle install
   ```

2. **Build and serve the site locally:**
   ```bash
   bundle exec jekyll serve
   ```

3. **Open your browser and navigate to:**
   ```
   http://localhost:4000
   ```

## Key Files to Customize

### Personal Information
- `_config.yml` - Main site configuration (name, email, social links)
- `_pages/about.md` - Your main about page
- `_data/cv.yml` - Your CV/resume data
- `assets/img/prof_pic.jpg` - Your profile picture

### Content
- `_news/` - News and announcements
- `_projects/` - Your research projects
- `_posts/` - Blog posts (optional)
- `_bibliography/papers.bib` - Your publications

### Social Media Links
Update these in `_config.yml`:
- `github_username`
- `linkedin_username`
- `scholar_userid` (Google Scholar)
- `orcid_id` (ORCID)
- `research_gate_profile`

## Deployment

Your site will automatically deploy to GitHub Pages when you push changes to the main branch of your `sonishsivarajkumar.github.io` repository.

## Customization Tips

1. **Adding Publications**: Edit `_bibliography/papers.bib` with your publications in BibTeX format
2. **Adding Projects**: Create new `.md` files in the `_projects/` directory
3. **Color Scheme**: Modify `_sass/_themes.scss` for custom colors
4. **Navigation**: Edit `_data/cv.yml` to customize the CV page

## Getting Help

- [al-folio Documentation](https://github.com/alshedivat/al-folio)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
