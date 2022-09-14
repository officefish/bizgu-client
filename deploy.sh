echo "Switching to branch master"
git checkout master

echo "Building app... (Can also use npm instead of yarn)"
npm run build

echo "Deploying files to server..."
scp -r dist/* root@84.38.183.29:/var/www/html

echo "Done!"