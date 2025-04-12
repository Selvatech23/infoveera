const Sitemap = require('react-router-sitemap').default;
const path = require('path');

function generateSitemap() {
  return new Sitemap([
    './components/About',          // About Us (if present)
    './components/Services',        // Gallery (if present)
    './components/Contact',        // Contact page

    // Add other routes used in your app here
  ])
    .build('https://selvatech23.github.io/infoveera')
    .save(path.resolve(__dirname, 'public', 'sitemap.xml'));
}

generateSitemap();
