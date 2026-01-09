import type { APIRoute } from 'astro';
import structures from '../data/structures.json';

const site = 'https://greatestancientstructures.com';

const categories = ['megalithic', 'rock-cut', 'impossible', 'disputed'];
const regions = ['middle-east', 'south-america', 'europe', 'africa', 'asia', 'oceania'];

export const GET: APIRoute = async () => {
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/structures', priority: '0.9', changefreq: 'weekly' },
    { url: '/map', priority: '0.8', changefreq: 'monthly' },
    { url: '/timeline', priority: '0.8', changefreq: 'monthly' },
    { url: '/compare', priority: '0.7', changefreq: 'monthly' },
    { url: '/quiz', priority: '0.7', changefreq: 'monthly' },
    { url: '/about', priority: '0.6', changefreq: 'monthly' },
  ];

  // Add structure pages
  structures.forEach(structure => {
    pages.push({
      url: `/structures/${structure.slug}`,
      priority: '0.8',
      changefreq: 'monthly'
    });
  });

  // Add category pages
  categories.forEach(cat => {
    pages.push({
      url: `/category/${cat}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  // Add region pages
  regions.forEach(region => {
    pages.push({
      url: `/region/${region}`,
      priority: '0.7',
      changefreq: 'monthly'
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
