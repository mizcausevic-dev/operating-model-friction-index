$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$outputDir = Join-Path $repoRoot "screenshots"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$staleFiles = @(
  "02-scorebook-register-proof.png",
  "03-benchmark-tiers-proof.png",
  "04-investment-posture-proof.png",
  "02-benchmark-register-proof.png",
  "03-comparison-matrix-proof.png"
)

foreach ($staleFile in $staleFiles) {
  $stalePath = Join-Path $outputDir $staleFile
  if (Test-Path $stalePath) {
    Remove-Item $stalePath -Force
  }
}

Add-Type -AssemblyName System.Drawing

function New-ScenarioImage {
  param(
    [string]$Path,
    [string]$Title,
    [string]$Subtitle,
    [string[]]$Bullets
  )

  $width = 1600
  $height = 900
  $bitmap = New-Object System.Drawing.Bitmap $width, $height
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.Clear([System.Drawing.Color]::FromArgb(7, 17, 29))

  $bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(13, 26, 43))
  $panelPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(103, 224, 190), 2)
  $titleBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(237, 242, 255))
  $bodyBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(159, 176, 207))
  $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(103, 224, 190))

  $fontTitle = New-Object System.Drawing.Font("Georgia", 40, [System.Drawing.FontStyle]::Bold)
  $fontSub = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Regular)
  $fontBody = New-Object System.Drawing.Font("Segoe UI", 26, [System.Drawing.FontStyle]::Regular)
  $fontFooter = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)

  $rect = New-Object System.Drawing.Rectangle 20, 20, 1560, 820
  $graphics.FillRectangle($bgBrush, $rect)
  $graphics.DrawRectangle($panelPen, $rect)

  $graphics.DrawString("Operating Model Friction Index", $fontSub, $accentBrush, 70, 85)
  $graphics.DrawString($Title, $fontTitle, $titleBrush, 70, 150)
  $graphics.DrawString($Subtitle, $fontBody, $bodyBrush, (New-Object System.Drawing.RectangleF(70, 240, 1380, 110)))

  $y = 360
  foreach ($bullet in $Bullets) {
    $graphics.FillEllipse($accentBrush, 85, $y + 13, 12, 12)
    $graphics.DrawString($bullet, $fontBody, $titleBrush, 110, $y)
    $y += 84
  }

  $graphics.DrawString("Synthetic proof render for README packaging.", $fontFooter, $bodyBrush, 70, 770)
  $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)

  $graphics.Dispose()
  $bitmap.Dispose()
}

New-ScenarioImage -Path (Join-Path $outputDir "01-overview-proof.png") -Title "Board-facing friction stays visible before margin loss becomes the headline" -Subtitle "This friction index turns coordination drag, decision latency, tool sprawl, and ownership ambiguity into one board-readable operating surface." -Bullets @(
  "Which lanes are losing time and quality to avoidable coordination drag.",
  "Where tool fragmentation or ownership ambiguity is distorting execution.",
  "What should be simplified, standardized, automated, escalated, or contained next."
)

New-ScenarioImage -Path (Join-Path $outputDir "02-friction-register-proof.png") -Title "Friction register keeps each lane, owner, audience, and next move attached" -Subtitle "Every route retains the friction tier, operating story, accountable owner, and immediate remediation step." -Bullets @(
  "Each lane stays connected to one owner and one board-facing audience.",
  "Drag pressure is visible before it turns into another vague status update.",
  "The next corrective move sits next to the lane instead of disappearing into a separate memo."
)

New-ScenarioImage -Path (Join-Path $outputDir "03-bottleneck-tiers-proof.png") -Title "Bottleneck tiers show whether handoffs, tools, latency, or ownership are causing the drag" -Subtitle "The dominant friction dimension remains visible so leadership can simplify the right thing first." -Bullets @(
  "The blocking issue is explicit instead of implied.",
  "Handoffs, tools, latency, and ownership stay readable at a glance.",
  "Each lane ties to a concrete intervention instead of a generic operating complaint."
)

New-ScenarioImage -Path (Join-Path $outputDir "04-remediation-posture-proof.png") -Title "Remediation posture keeps cleanup decisions grounded in owners and recoverable margin" -Subtitle "Composite remediation score, recoverable margin, and next moves stay grounded in the same operating view." -Bullets @(
  "Simplify, standardize, automate, escalate, and contain decisions stay tied to one owner.",
  "Recoverable margin is visible before the next review cycle.",
  "Boards and operators can see which cleanup motion should move first."
)
