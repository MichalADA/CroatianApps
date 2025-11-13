@echo off
REM Skrypt uruchamiajacy aplikacje do nauki chorwackiego
REM Uzycie: start.bat [prod|dev]

setlocal

echo ========================================
echo   NAUKA JEZYKA CHORWACKIEGO
echo   Aplikacja Learning App
echo ========================================
echo.

REM Sprawdz czy Docker jest zainstalowany
docker --version >nul 2>&1
if errorlevel 1 (
    echo [BLAD] Docker nie jest zainstalowany!
    echo Zainstaluj Docker Desktop z: https://www.docker.com/get-started
    pause
    exit /b 1
)

REM Sprawdz czy Docker Compose jest zainstalowany
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo [BLAD] Docker Compose nie jest zainstalowany!
    pause
    exit /b 1
)

REM Sprawdz czy Docker dziala
docker info >nul 2>&1
if errorlevel 1 (
    echo [BLAD] Docker nie dziala!
    echo Uruchom Docker Desktop
    pause
    exit /b 1
)

REM Okresl tryb (produkcja lub development)
set MODE=%1
if "%MODE%"=="" set MODE=prod

if "%MODE%"=="dev" (
    echo [INFO] Uruchamiam w trybie DEVELOPMENT ^(hot-reload^)...
    echo.
    docker-compose -f docker-compose.dev.yml up
) else if "%MODE%"=="prod" (
    echo [INFO] Uruchamiam w trybie PRODUKCYJNYM...
    echo.
    docker-compose up -d
    
    echo.
    echo [SUKCES] Aplikacja uruchomiona!
    echo.
    echo Otworz w przegladarce: http://localhost:3000
    echo.
    echo Aby zatrzymac aplikacje, wpisz: docker-compose down
    echo Aby zobaczyc logi, wpisz: docker-compose logs -f
    echo.
    
    REM Opcjonalnie otworz przegladarke automatycznie
    REM start http://localhost:3000
    
    pause
) else (
    echo [BLAD] Nieprawidlowy tryb!
    echo.
    echo Uzycie:
    echo   start.bat         - Uruchom w trybie produkcyjnym
    echo   start.bat prod    - Uruchom w trybie produkcyjnym
    echo   start.bat dev     - Uruchom w trybie development
    pause
    exit /b 1
)

endlocal
