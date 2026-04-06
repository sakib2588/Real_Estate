'use client';

import Link from 'next/link';

const products = [
  {
    icon: '◈',
    name: 'Signature Website',
    tagline: 'Your digital flagship',
    desc: 'A fully custom, mobile-first website designed to reflect your brand and convert visitors into clients. Every pixel crafted for luxury.',
    features: ['Custom design & branding', 'Mobile-first responsive', 'Fast page load (Core Web Vitals)', 'SSL & security included', 'Unlimited page edits'],
  },
  {
    icon: '◉',
    name: 'IDX Pro Suite',
    tagline: 'Live listings, effortless',
    desc: 'Integrate real-time MLS/IDX property data directly into your site. Powerful search, map views, and saved searches keep buyers coming back.',
    features: ['Real-time MLS feed', 'Advanced property search', 'Map-based search', 'Saved searches & alerts', 'Mobile-optimized listings'],
  },
  {
    icon: '◆',
    name: 'Lead Command',
    tagline: 'Turn traffic into clients',
    desc: 'A complete lead generation and CRM system. Capture, nurture, and convert leads with automated workflows and intelligent follow-ups.',
    features: ['Smart capture forms', 'CRM dashboard', 'Automated email drips', 'Lead scoring', 'Pipeline management'],
  },
  {
    icon: '◇',
    name: 'Growth Marketing',
    tagline: 'Dominate your market',
    desc: 'Full-service digital marketing — SEO, Google Ads, social media, and content strategy — all managed by our real estate marketing experts.',
    features: ['Local SEO optimization', 'Google & Meta Ads', 'Content marketing', 'Social media management', 'Monthly performance reports'],
  },
  {
    icon: '○',
    name: 'Analytics Intelligence',
    tagline: 'Know your numbers',
    desc: 'Real-time dashboards showing visitor behavior, lead sources, conversion rates, and ROI across all your marketing channels.',
    features: ['Real-time dashboard', 'Traffic source analysis', 'Conversion tracking', 'Lead attribution', 'Monthly insights report'],
  },
  {
    icon: '□',
    name: 'Concierge Support',
    tagline: 'A team behind you',
    desc: 'Dedicated success manager, 24/7 technical support, and quarterly strategy sessions to keep your digital presence ahead of the competition.',
    features: ['Dedicated success manager', '24/7 live chat & phone', 'Quarterly strategy calls', 'Priority issue resolution', 'Onboarding & training'],
  },
];

const integrations = ['Salesforce', 'Follow Up Boss', 'kvCORE', 'BoomTown', 'Mailchimp', 'Google Analytics', 'Zapier', 'DocuSign'];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '10rem 2rem 6rem', position: 'relative', overflow: 'hidden', backgroundImage: 'url(/imgsandvideos/house%20interiour.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.78) 50%, rgba(10,10,10,0.95) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(201,168,76,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="hero-text-fade" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Suite of Tools</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Products Built for<br />
            <span style={{ background: 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Real Estate Excellence
            </span>
          </h1>
          <p style={{ color: '#777', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
            Every tool we offer was designed specifically for real estate professionals. No generic software — only what works for agents and brokers.
          </p>
          <Link href="/pricing" className="btn btn-primary"><span>See Pricing</span></Link>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="products-grid">
          {products.map(p => (
            <div key={p.name} style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.08)', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'border-color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.08)'; }}>
              <div style={{ fontSize: '1.8rem', color: '#C9A84C', marginBottom: '1.2rem' }}>{p.icon}</div>
              <div style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{p.tagline}</div>
              <h2 style={{ fontSize: '1.25rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '1rem' }}>{p.name}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {p.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#888', fontSize: '0.85rem' }}>
                    <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .products-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 600px) { .products-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Integrations */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '5rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>Integrations</p>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '1rem' }}>Works With Your Existing Stack</h2>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '3rem' }}>Connect seamlessly with the tools you already use.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {integrations.map(i => (
              <div key={i} style={{ padding: '0.6rem 1.4rem', border: '1px solid rgba(201,168,76,0.15)', color: '#888', fontSize: '0.85rem', letterSpacing: '0.05em' }}>{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#111', padding: '5rem 2rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '1rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>Choose a plan or talk to our team about a custom solution tailored to your business.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" className="btn btn-primary"><span>View Pricing</span></Link>
            <Link href="/contact" className="btn btn-secondary"><span>Talk to Sales</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
