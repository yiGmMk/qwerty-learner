const fs = require('fs')
const path = require('path')

const routes = ['', 'gallery', 'analysis', 'error-book', 'words']

const domain = 'https://typelearn.programnotes.cn'

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
      (route) => `
  <url>
    <loc>${domain}/${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`,
    )
    .join('')}
</urlset>
`

const publicPath = path.resolve(__dirname, '../public')

fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap)

console.log('sitemap.xml generated!')
