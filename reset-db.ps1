# Database Reset Script

# Get the path to Node executable
$node_path = "node"

# Define the path to our database utility script
$db_script = ".\server\database\utils.js"

# Check if we want to reset or just initialize
$action = $args[0]

# Execute the appropriate action
if ($action -eq "reset") {
    Write-Host "Resetting database..." -ForegroundColor Yellow
    & $node_path $db_script reset
} else {
    Write-Host "Initializing database..." -ForegroundColor Cyan
    & $node_path $db_script
}

Write-Host "Done!" -ForegroundColor Green
