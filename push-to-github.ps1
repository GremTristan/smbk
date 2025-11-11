# Script PowerShell pour pousser sur GitHub
# Utilisation: .\push-to-github.ps1 VOTRE-USERNAME smartbanker-landing

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$true)]
    [string]$RepoName
)

Write-Host "🚀 Configuration du dépôt GitHub..." -ForegroundColor Cyan

# Vérifier que git est installé
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git n'est pas installé. Veuillez installer Git d'abord." -ForegroundColor Red
    exit 1
}

# Vérifier que le dépôt local existe
if (-not (Test-Path .git)) {
    Write-Host "❌ Ce n'est pas un dépôt Git. Exécutez 'git init' d'abord." -ForegroundColor Red
    exit 1
}

# URL du dépôt distant
$remoteUrl = "https://github.com/$GitHubUsername/$RepoName.git"

Write-Host "📦 Ajout du remote origin..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $remoteUrl

Write-Host "🌿 Configuration de la branche main..." -ForegroundColor Yellow
git branch -M main

Write-Host "✅ Configuration terminée !" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Prochaines étapes:" -ForegroundColor Cyan
Write-Host "1. Créez le dépôt '$RepoName' sur GitHub (https://github.com/new)" -ForegroundColor White
Write-Host "2. NE cochez PAS 'Initialize with README'" -ForegroundColor White
Write-Host "3. Ensuite, exécutez: git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "🔗 URL du dépôt: $remoteUrl" -ForegroundColor Cyan

