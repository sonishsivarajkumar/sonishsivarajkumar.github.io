#!/bin/bash

# Development server script for your portfolio
echo "🚀 Starting your portfolio development server..."

# Check if bundle is installed
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundler is not installed. Please install it first:"
    echo "   gem install bundler"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "vendor/bundle" ]; then
    echo "📦 Installing dependencies..."
    bundle install
fi

# Start the development server
echo "🌐 Starting Jekyll server at http://localhost:4000"
echo "💡 Press Ctrl+C to stop the server"
bundle exec jekyll serve --livereload --drafts

echo "✅ Server stopped"
