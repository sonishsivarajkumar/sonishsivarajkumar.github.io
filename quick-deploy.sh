#!/bin/bash

# Portfolio Website Deployment Script
# Run this script to deploy your portfolio website to GitHub Pages

echo "🚀 Deploying Portfolio Website to GitHub Pages..."
echo "================================================"

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the root of your portfolio repository"
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add remote if it doesn't exist
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/sonishsivarajkumar/sonishsivarajkumar.github.io.git
fi

# Stage all files
echo "📦 Staging files for deployment..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy portfolio website with updated professional information - $(date)"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment Complete!"
echo "================================================"
echo "🌐 Your website will be available at:"
echo "   https://sonishsivarajkumar.github.io"
echo ""
echo "📝 Next steps:"
echo "   1. Go to GitHub.com and navigate to your repository"
echo "   2. Go to Settings > Pages"
echo "   3. Select 'Deploy from a branch' and choose 'main'"
echo "   4. Your website will be live in a few minutes!"
echo ""
echo "🎉 Congratulations on your new portfolio website!"
