@echo off
echo ==========================================
echo      Automated GitHub Upload Script
echo      Target: suryajagan2803-creator/carwell-website
echo ==========================================
echo.

echo 1. Initializing Git Repository...
git init

echo.
echo 2. Adding all project files...
git add .

echo.
echo 3. Committing changes...
git commit -m "Latest update: Fixed Timeline scroll, added Product Catalog filters"

echo.
echo 4. Configuring Remote Repository...
git remote remove origin 2>nul
git remote add origin https://github.com/suryajagan2803-creator/carwell-website.git

echo.
echo 5. Pushing Code to Main Branch (Force Update)...
git branch -M main
git push -u origin main --force

echo.
echo ==========================================
echo      Process Complete!
echo ==========================================
pause
