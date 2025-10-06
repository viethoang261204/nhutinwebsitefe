const fs = require('fs');
const path = require('path');

console.log('🔧 Optimizing for production...');

const distDir = './dist';

// Function to minify HTML
function minifyHTML(html) {
    return html
        .replace(/\s+/g, ' ')
        .replace(/>\s+</g, '><')
        .replace(/\s+>/g, '>')
        .replace(/<\s+/g, '<')
        .trim();
}

// Function to minify CSS
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/;\s*}/g, '}')
        .replace(/{\s*/g, '{')
        .replace(/;\s*/g, ';')
        .replace(/,\s*/g, ',')
        .trim();
}

// Function to minify JavaScript
function minifyJS(js) {
    return js
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*$/gm, '')
        .replace(/\s+/g, ' ')
        .replace(/;\s*/g, ';')
        .replace(/{\s*/g, '{')
        .replace(/}\s*/g, '}')
        .trim();
}

// Process HTML files
function processHTMLFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processHTMLFiles(filePath);
        } else if (file.endsWith('.html')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const minified = minifyHTML(content);
            fs.writeFileSync(filePath, minified);
            console.log(`✅ Minified ${filePath}`);
        }
    });
}

// Process CSS files
function processCSSFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processCSSFiles(filePath);
        } else if (file.endsWith('.css') && !file.includes('.min.')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const minified = minifyCSS(content);
            fs.writeFileSync(filePath, minified);
            console.log(`✅ Minified ${filePath}`);
        }
    });
}

// Process JavaScript files
function processJSFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processJSFiles(filePath);
        } else if (file.endsWith('.js') && !file.includes('.min.') && !file.includes('mock-api.js')) {
            const content = fs.readFileSync(filePath, 'utf8');
            const minified = minifyJS(content);
            fs.writeFileSync(filePath, minified);
            console.log(`✅ Minified ${filePath}`);
        }
    });
}

// Create .htaccess for better routing
const htaccessContent = `# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
`;

fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessContent);
console.log('✅ Created .htaccess');

// Process files
if (fs.existsSync(distDir)) {
    processHTMLFiles(distDir);
    processCSSFiles(distDir);
    processJSFiles(distDir);
}

console.log('🎉 Optimization completed!');
