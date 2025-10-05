#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the lib.d.ts file content
const libDeclarationPath = path.join(__dirname, '../dist/lib.d.ts');
const indexDeclarationPath = path.join(__dirname, '../dist/index.d.ts');

if (fs.existsSync(libDeclarationPath)) {
  // Copy lib.d.ts to index.d.ts
  const content = fs.readFileSync(libDeclarationPath, 'utf8');
  fs.writeFileSync(indexDeclarationPath, content);
  console.log('✅ Generated index.d.ts from lib.d.ts');
} else {
  console.error('❌ lib.d.ts not found. Run npm run build:types first.');
  process.exit(1);
}
