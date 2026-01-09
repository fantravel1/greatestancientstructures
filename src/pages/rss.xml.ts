import type { APIRoute } from 'astro';
import structures from '../data/structures.json';

const site = 'https://greatestancientstructures.com';
const title = 'Greatest Ancient Structures';
const description = 'Explore humanity\'s most enigmatic architectural achievements—structures that challenge our understanding of the ancient world.';

export const GET: APIRoute = async () => {
  const items = structures
    .sort((a, b) => {
      // Sort by age (oldest first)
      const ageA = parseInt(a.dates.age.replace(/[^0-9]/g, ''));
      const ageB = parseInt(b.dates.age.replace(/[^0-9]/g, ''));
      return ageB - ageA;
    })
    .map(structure => `    <item>
      <title>${structure.name}: ${structure.tagline}</title>
      <link>${site}/structures/${structure.slug}</link>
      <description><![CDATA[${structure.summary}]]></description>
      <category>${structure.category}</category>
      <guid isPermaLink="true">${site}/structures/${structure.slug}</guid>
    </item>`);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <link>${site}</link>
    <description>${description}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
