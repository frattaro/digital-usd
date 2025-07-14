const fs = require('fs');
const path = require('path');

// Config
const inputDir = './';     // Change this to your actual folder
const outputFile = './combined.md';

// Helper to extract frontmatter and return nav_order (default: 9999)
function extractNavOrder(content) {
  const match = content.match(/nav_order:\s*(\d+)/);
  return match ? parseInt(match[1], 10) : 9999;
}

// Gather and sort files based on nav_order
const fileData = fs.readdirSync(inputDir)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(inputDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const navOrder = extractNavOrder(content);
    return { file, content, navOrder };
  })
  .sort((a, b) => a.navOrder - b.navOrder);

// Combine files
let combined = '';
for (const { file, content } of fileData) {
  combined += `\n\n---\n\n# ${file}\n\n${content}`;
}

// Write output
fs.writeFileSync(outputFile, combined);
console.log(`✅ Combined ${fileData.length} files into ${outputFile} (sorted by nav_order)`);
