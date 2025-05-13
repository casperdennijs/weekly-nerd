# Run this script to start the blog application

Write-Host "Starting the Weekly Nerd Blog application..." -ForegroundColor Cyan

# Check if dependencies are installed
if (-not (Test-Path -Path "node_modules")) {
    Write-Host "Dependencies not installed. Please install them first with:" -ForegroundColor Yellow
    Write-Host "npm install" -ForegroundColor Yellow
    exit
}

# Initialize the database if it doesn't exist
if (-not (Test-Path -Path "db.sqlite")) {
    Write-Host "Database not found. Initializing database..." -ForegroundColor Yellow
    & .\reset-db.ps1
}

# Start the development server
Write-Host "Starting development server..." -ForegroundColor Green
& npm run dev

# This line won't execute until the server is stopped
Write-Host "Server stopped." -ForegroundColor Red
