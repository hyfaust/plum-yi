const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const deployDir = path.join(__dirname, 'deploy-temp');
const plumYiDir = path.join(deployDir, 'plum-yi');

// Clean up deploy-temp directory
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true });
}

// Create deploy-temp/plum-yi directory structure
fs.mkdirSync(plumYiDir, { recursive: true });

// Copy dist contents to deploy-temp/plum-yi directory
fs.cpSync(distDir, plumYiDir, { recursive: true });

console.log('✅ Deploy structure created: deploy-temp/plum-yi/');
