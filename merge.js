const fs = require('fs');
const path = require('path');

// Config
const inputDir = './';     // Change this to your actual folder
const outputFile = './combined.md';

// Read all markdown files in the directory
const files = fs.readdirSync(inputDir)
  .filter(file => file.endsWith('.md'))
  .sort(); // Optional: alphabetical sort

// Read and concatenate file contents
let combined = '';

for (const file of files) {
  const filePath = path.join(inputDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  combined += `\n\n---\n\n# ${file}\n\n` + content; // Optional: file header separator
}

// Write to output file
fs.writeFileSync(outputFile, combined);

console.log(`Combined ${files.length} files into ${outputFile}`);