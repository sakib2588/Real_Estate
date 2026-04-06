'use client';

import Link from 'next/link';

const stats = [
  { value: '0', label: 'Agents Empowered' },
  { value: '0', label: 'Listings Generated' },
  { value: '0', label: 'Client Retention' },
  { value: '0', label: 'Rated Platform' },
];

const features = [
  {
    icon: '◈',
    title: 'Bespoke Website Design',
    desc: "Hand-crafted luxury websites that reflect your brand's unique identity and convert visitors into clients.",
  },
  {
    icon: '◉',
    title: 'IDX & MLS Integration',
    desc: 'Real-time property listings seamlessly embedded into your site with powerful search and filtering tools.',
  },
  {
    icon: '◆',
    title: 'Lead Generation Engine',
    desc: 'Intelligent capture forms, landing pages, and CRM integrations that turn traffic into qualified leads.',
  },
  {
    icon: '◇',
    title: 'SEO & Digital Marketing',
    desc: 'Dominate search results and social media with our full-service digital marketing team behind you.',
  },
  {
    icon: '○',
    title: 'Analytics Dashboard',
    desc: 'Deep insights into visitor behavior, lead sources, and campaign performance in one clean dashboard.',
  },
  {
    icon: '□',
    title: 'Dedicated Support',
    desc: 'A personal success manager and 24/7 support team committed to your growth and satisfaction.',
  },
];

const testimonials = [
  {
    quote: 'Prestige transformed how I present my listings online. My leads tripled in the first 90 days.',
    name: 'Alexandra M.',
    title: 'Top Producer, Beverly Hills',
  },
  {
    quote: 'The website they built for me is simply stunning. Every client mentions it before we even meet.',
    name: 'James R.',
    title: 'Luxury Broker, Manhattan',
  },
  {
    quote: 'Finally a platform that understands what luxury real estate professionals need. Absolutely worth it.',
    name: 'Sofia D.',
    title: 'Principal Agent, Miami Beach',
  },
];

const clients = ["The Agency", "Compass", "Sotheby's", "Christie's", "Douglas Elliman", "Engel & Völkers"];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '8rem 2rem 5rem', width: '100%', position: 'relative', zIndex: 1 }} className="hero-grid">
          <div style={{ maxWidth: '520px' }}>
            <div style={{ display: 'inline-block', padding: '0.4rem 1rem', border: '1px solid rgba(201,168,76,0.4)', marginBottom: '2rem' }}>
              <span style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>The Premier Platform for Real Estate</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 400 }}>
              Your Brand.<br />
              <span style={{ background: 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Elevated.
              </span>
            </h1>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '480px' }}>
              We build world-class digital experiences for real estate professionals who demand the best. From luxury websites to intelligent marketing — we handle it all.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                <span>Get Started Free</span>
              </Link>
              <Link href="/products" className="btn btn-secondary">
                <span>View Products</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero video — direct child of section, fills full height */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '65vw', display: 'flex', flexDirection: 'column', zIndex: 0 }} className="hero-visual">
          <div className="fade-lr" style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/imgsandvideos/house%20exteriour.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/imgsandvideos/house%20exteriour%20video.mp4" type="video/mp4" />
            </video>
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', textAlign: 'right', zIndex: 2 }}>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Featured Property</div>
            <div style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5' }}>Architectural Excellence, Delivered Daily</div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-visual { display: none; }
          }
        `}</style>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#111', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }} className="stats-grid">
          {stats.map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontFamily: 'Georgia, serif', color: '#C9A84C', marginBottom: '0.4rem' }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#666', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 600px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }`}</style>
      </section>

      {/* TRUSTED BY */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>Trusted by top agencies worldwide</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', alignItems: 'center' }}>
            {clients.map(c => (
              <span key={c} style={{ color: '#333', fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Georgia, serif', whiteSpace: 'nowrap' }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>What We Offer</p>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, maxWidth: '600px', margin: '0 auto' }}>
              Everything You Need to Dominate Your Market
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="features-grid">
            {features.map(f => (
              <div key={f.title} style={{ backgroundColor: '#111', padding: '2.5rem', borderBottom: '2px solid transparent', transition: 'all 0.3s', cursor: 'default' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderBottomColor = '#C9A84C'; el.style.backgroundColor = '#141414'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderBottomColor = 'transparent'; el.style.backgroundColor = '#111'; }}>
                <div style={{ fontSize: '1.5rem', color: '#C9A84C', marginBottom: '1.2rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', marginBottom: '0.75rem', fontWeight: 400 }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', backgroundImage: 'url(/imgsandvideos/handshake.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(26,21,8,0.88) 50%, rgba(10,10,10,0.92) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Ready to Elevate?</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, lineHeight: 1.2, marginBottom: '1.5rem' }}>
            Join 0 Agents Who Chose Excellence
          </h2>
          <p style={{ color: '#777', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Start your free trial today. No credit card required. See results in 30 days or your money back.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            <span>Start for Free Today</span>
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>Client Stories</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.1)', padding: '2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '3rem', color: 'rgba(201,168,76,0.1)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
                <p style={{ color: '#bbb', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ height: '1px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '1.2rem' }} />
                <div style={{ color: '#f5f5f5', fontSize: '0.9rem', fontFamily: 'Georgia, serif' }}>{t.name}</div>
                <div style={{ color: '#555', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '0.05em' }}>{t.title}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '5rem 2rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '1rem' }}>
            See How Prestige Can Transform Your Business
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>Book a personalized demo with our team and discover the platform built for your success.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary"><span>Book a Demo</span></Link>
            <Link href="/pricing" className="btn btn-secondary"><span>View Pricing</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
