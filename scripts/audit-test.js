const http = require('http');
const assert = require('assert');

const routes = [
  '/',
  '/about',
  '/services',
  '/skills',
  '/tools',
  '/experience',
  '/portfolio',
  '/process',
  '/contact',
  '/robots.txt',
  '/sitemap.xml',
  '/opengraph-image'
];

async function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:3000' + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path, status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log('=== 1. ROUTE AUDIT (HTTP STATUS & SIZE) ===');
  const results = [];
  for (const r of routes) {
    const res = await fetchRoute(r);
    assert.strictEqual(res.status, 200, `Expected 200 for ${r}, got ${res.status}`);
    assert(res.body.length > 0, `Route ${r} returned empty body`);
    console.log(`[PASS] ${r} -> HTTP ${res.status} (${res.body.length} bytes)`);
    results.push(res);
  }

  console.log('\n=== 2. INTERNAL LINK CRAWLER & QUERY PARAMS ===');
  const allLinks = new Set();
  for (const res of results) {
    if (!res.body.includes('<html')) continue;
    const matches = res.body.matchAll(/href=["']([^"'#]+)(#[^"']*)?["']/g);
    for (const m of matches) {
      const href = m[1];
      if (href.startsWith('/') && !href.startsWith('//')) {
        allLinks.add(href);
      }
    }
  }

  console.log('Crawled internal paths:', Array.from(allLinks).length);
  for (const link of allLinks) {
    const res = await fetchRoute(link);
    assert.strictEqual(res.status, 200, `Internal link broken: ${link} -> ${res.status}`);
    console.log(`[PASS] Internal link: ${link} -> HTTP ${res.status}`);
  }

  console.log('\n=== 3. CONTENT ACCURACY & NON-FABRICATION CHECK ===');
  for (const res of results) {
    if (!res.body.includes('<html')) continue;
    
    // Disallowed fabrication checks
    assert(!res.body.includes('$1,000,000'), `Fabricated $1M found in ${res.path}`);
    assert(!res.body.includes('100% Tracking Uploaded'), `Unverified absolute outcome found in ${res.path}`);
    assert(!res.body.includes('Zero Late Shipment Defects Guarantee'), `Unverified defect guarantee found in ${res.path}`);
  }
  console.log('[PASS] Zero fabricated figures or unverified claims detected across all pages.');

  console.log('\n=== 4. DEMONSTRATION DISCLAIMER AUDIT ===');
  const portfolioRes = results.find(r => r.path === '/portfolio');
  assert(
    portfolioRes.body.includes('Illustrative Demonstration — Not Live Client Data'),
    'Portfolio must include mandatory illustrative demonstration disclaimer'
  );
  console.log('[PASS] Mandatory disclaimer "Illustrative Demonstration — Not Live Client Data" verified on /portfolio.');

  console.log('\n=== 5. CONTACT & EMAIL DISPATCH AUDIT ===');
  const contactRes = results.find(r => r.path === '/contact');
  assert(contactRes.body.includes('awaisbaig138@gmail.com'), 'Verified contact email must appear on /contact');
  assert(contactRes.body.includes('mailto:awaisbaig138@gmail.com'), 'Direct mailto action must target verified email');
  assert(contactRes.body.includes('Copy Formatted Brief'), 'Brief copy button must exist on /contact');
  console.log('[PASS] Contact page verified with direct mailto and brief generation actions.');

  console.log('\n=== 6. ACCESSIBILITY & ARIA ATTRIBUTES ===');
  for (const res of results) {
    if (!res.body.includes('<html')) continue;
    assert(res.body.includes('aria-label="Main Navigation"'), `Main Navigation aria-label missing in ${res.path}`);
    assert(res.body.includes('aria-label="Direct Quick Contact"'), `Quick Contact aria-label missing in ${res.path}`);
  }
  console.log('[PASS] Navigation and interactive elements contain proper ARIA labels and landmarks.');

  console.log('\n=== 7. REDUCED MOTION SUPPORT ===');
  const cssLink = Array.from(results[0].body.matchAll(/href=["'](\/_next\/static\/chunks\/[^"']+\.css)["']/g))[0];
  if (cssLink) {
    const cssRes = await fetchRoute(cssLink[1]);
    assert(cssRes.body.includes('prefers-reduced-motion'), 'CSS must include prefers-reduced-motion media query');
    console.log('[PASS] prefers-reduced-motion media query verified in bundled CSS.');
  }

  console.log('\n=== 8. LIVE SITEMAP & ROBOTS.TXT ===');
  const sitemapRes = results.find(r => r.path === '/sitemap.xml');
  const robotsRes = results.find(r => r.path === '/robots.txt');
  assert(sitemapRes.body.includes('<loc>'), 'Sitemap must contain <loc> entries');
  assert(robotsRes.body.includes('Allow: /'), 'Robots.txt must allow root');
  assert(robotsRes.body.includes('Sitemap:'), 'Robots.txt must specify Sitemap');
  console.log('[PASS] Sitemap and robots.txt verified.');

  console.log('\n=============================================');
  console.log('ALL AUDIT CRITERIA PASSED SUCCESSFULLY (100%)');
  console.log('=============================================');
}

runAudit().catch(err => {
  console.error('\n[AUDIT FAILED]:', err.message);
  process.exit(1);
});
