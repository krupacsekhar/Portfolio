

#!/bin/bash

# Build the app
npm run build

# Navigate into the build directory
cd build

# Deploy to GitHub Pages
git init
git add -A
git commit -m "Deploy to GitHub Pages"
git push -f https://github.com/krupacsekhar/Portfolio.git main:gh-pages

# Clean up
cd ..
rm -rf build
