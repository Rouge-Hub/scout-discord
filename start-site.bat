@echo off
setlocal
set "SITE_DIR=%~dp0"
set "PYTHON=C:\Users\bk011\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
cd /d "%SITE_DIR%"
echo.
echo Afterglow Hub is starting...
echo.
echo Local link: http://localhost:5173
echo LAN link:   http://YOUR-PC-IP:5173
echo.
echo Leave this window open while people are using the site.
echo Press Ctrl+C to stop it.
echo.
"%PYTHON%" -m http.server 5173 --bind 0.0.0.0
