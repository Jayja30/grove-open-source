@echo off
echo 🌿 Starting The Grove Local Development Server...
echo.
echo This will start a local server to avoid CORS issues.
echo The Grove will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server when done.
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo 🐍 Using Python server...
    python -m http.server 8000
) else (
    echo ⚠️  Python not found. Checking for Node.js...
    node --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo 🟢 Using Node.js server...
        npx serve . -p 8000
    ) else (
        echo ❌ Neither Python nor Node.js found.
        echo.
        echo Please install one of the following:
        echo - Python: https://python.org
        echo - Node.js: https://nodejs.org
        echo.
        echo Or use VS Code Live Server extension.
        pause
    )
)
