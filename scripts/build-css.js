#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy CSS files to dist
const cssFiles = [
  'src/index.css',
  'src/tokens.css',
  'src/fonts.css'
];

const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy CSS files
cssFiles.forEach(cssFile => {
  const srcPath = path.join(__dirname, '..', cssFile);
  const destPath = path.join(distDir, path.basename(cssFile));
  
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Copied ${cssFile} to dist/`);
  } else {
    console.log(`⚠️  ${cssFile} not found, skipping...`);
  }
});

console.log('✅ CSS build completed');
