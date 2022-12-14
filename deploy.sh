#!/usr/bin/env sh

# Current date
timestamp=$(date +%Y-%m-%d' '%H:%M)
commit=$(git log -1 --pretty=%B)

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# Create 404 same as index for proper vue-routing redirecting.
cp index.html 404.html

git init
git add -A
git commit -m "$timestamp $commit"

git push -f https://github.com/Marfullsen/bekapp.git master:gh-pages

cd -