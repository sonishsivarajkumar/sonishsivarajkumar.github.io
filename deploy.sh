#!/bin/bash

# Deployment script for GitHub Pages
# Run this script to prepare and deploy your portfolio website

echo "🚀 Deploying Sonish Sivarajkumar's Portfolio Website"
echo "=================================================="

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    echo "Please run: git init"
    exit 1
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio website with latest information"
fi
git commit -m "$commit_msg"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://sonishsivarajkumar.github.io"
echo ""
echo "⏳ Note: It may take a few minutes for changes to appear"
echo ""
echo "📋 To enable GitHub Pages (if not already enabled):"
echo "   1. Go to your repository on GitHub"
echo "   2. Click 'Settings' tab"
echo "   3. Scroll to 'Pages' section"
echo "   4. Select 'Deploy from a branch'"
echo "   5. Choose 'main' branch and '/ (root)' folder"
echo "   6. Click 'Save'"
echo ""
echo "🎉 Your professional portfolio is now live!"
