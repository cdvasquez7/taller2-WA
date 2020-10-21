#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://cdvasquez7.github.io
# git push -f git@github.com:cdvasquez7/cdvasquez7.github.io.git master

# if you are deploying to https://cdvasquez7.github.io/taller2-WA
git push -f git@github.com:cdvasquez7/taller2-WA.git master:gh-pages

cd -