const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = './dist';
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Copy all files and directories to dist
function copyRecursive(src, dest) {
    const stats = fs.statSync(src);
    
    if (stats.isDirectory()) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        
        const files = fs.readdirSync(src);
        files.forEach(file => {
            copyRecursive(path.join(src, file), path.join(dest, file));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// Files and directories to copy
const itemsToCopy = [
    'index.html',
    'aboutkeith.html',
    'aboutnhutin.html',
    'product.html',
    'news.html',
    'downloads.html',
    'ungdung.html',
    'pdf-viewer.html',
    'admin-*.html',
    'components',
    'css',
    'js',
    'img',
    'pdf',
    'lib',
    'admin-assets',
    'favicon_io',
    'favicon.ico',
    '404.html',
    '500.html'
];

console.log('🚀 Building for production...');

// Copy all HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
    copyRecursive(file, path.join(distDir, file));
    console.log(`✅ Copied ${file}`);
});

// Copy directories
const dirsToCopy = ['components', 'css', 'js', 'img', 'pdf', 'lib', 'admin-assets', 'favicon_io'];
dirsToCopy.forEach(dir => {
    if (fs.existsSync(dir)) {
        copyRecursive(dir, path.join(distDir, dir));
        console.log(`✅ Copied directory ${dir}`);
    }
});

// Copy favicon
if (fs.existsSync('favicon.ico')) {
    fs.copyFileSync('favicon.ico', path.join(distDir, 'favicon.ico'));
    console.log('✅ Copied favicon.ico');
}

console.log('🎉 Build completed successfully!');
console.log(`📁 Output directory: ${distDir}`);
