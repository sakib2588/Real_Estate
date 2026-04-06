'use client';

import Link from 'next/link';

const footerLinks = {
  Products: [
    { label: 'Website Design', href: '/products' },
    { label: 'IDX Integration', href: '/products' },
    { label: 'CRM & Lead Tools', href: '/products' },
    { label: 'SEO Services', href: '/products' },
    { label: 'Marketing Suite', href: '/products' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Press', href: '/about' },
  ],
  Resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Support', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#060606', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2rem 3rem' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo%202%20.png" alt="Prestige Real Estate" style={{ height: '48px', width: 'auto', display: 'block', filter: 'brightness(1.15) contrast(1.1)' }} />
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontSize: '1.6rem', fontFamily: 'Georgia, serif', color: '#C9A84C', letterSpacing: '0.08em' }}>PRESTIGE</div>
                <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '3px' }}>Real Estate</div>
              </div>
            </div>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '280px' }}>
              Empowering real estate professionals with world-class digital presence, tools, and marketing strategies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              {['LinkedIn', 'Instagram', 'X'].map(s => (
                <a key={s} href="#" style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>{category}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ color: '#666', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#f5f5f5')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#666')}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', marginBottom: '2rem' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#444', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Prestige Real Estate. All rights reserved.
          </p>
          <p style={{ color: '#333', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
            Built for real estate excellence.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
