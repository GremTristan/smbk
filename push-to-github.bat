@echo off
REM Script batch pour pousser sur GitHub
REM Utilisation: push-to-github.bat VOTRE-USERNAME smartbanker-landing

if "%1"=="" (
    echo.
    echo ❌ Erreur: Nom d'utilisateur GitHub requis
    echo.
    echo Utilisation: push-to-github.bat VOTRE-USERNAME NOM-DU-REPO
    echo Exemple: push-to-github.bat mon-username smartbanker-landing
    echo.
    pause
    exit /b 1
)

if "%2"=="" (
    echo.
    echo ❌ Erreur: Nom du dépôt requis
    echo.
    echo Utilisation: push-to-github.bat VOTRE-USERNAME NOM-DU-REPO
    echo Exemple: push-to-github.bat mon-username smartbanker-landing
    echo.
    pause
    exit /b 1
)

set GITHUB_USER=%1
set REPO_NAME=%2
set REMOTE_URL=https://github.com/%GITHUB_USER%/%REPO_NAME%.git

echo.
echo 🚀 Configuration du dépôt GitHub...
echo.

echo 📦 Ajout du remote origin...
git remote remove origin 2>nul
git remote add origin %REMOTE_URL%

echo 🌿 Configuration de la branche main...
git branch -M main

echo.
echo ✅ Configuration terminée !
echo.
echo 📝 Prochaines étapes:
echo 1. Créez le dépôt '%REPO_NAME%' sur GitHub (https://github.com/new)
echo 2. NE cochez PAS "Initialize with README"
echo 3. Ensuite, exécutez: git push -u origin main
echo.
echo 🔗 URL du dépôt: %REMOTE_URL%
echo.
pause

