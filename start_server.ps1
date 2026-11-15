Write-Host "Starting Charithasree M's Portfolio Website..." -ForegroundColor Cyan
Set-Location -Path $PSScriptRoot
Write-Host "Server running at: http://localhost:8080" -ForegroundColor Green
Start-Process "http://localhost:8080"
python -m SimpleHTTPServer 8080
