'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.2,0.8,0.2,1)',
        backgroundColor: scrolled ? 'rgba(32,32,34,0.92)' : 'rgba(28,28,30,0.55)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid rgba(255,255,255,0.04)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 6px 30px rgba(0,0,0,0.45)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '68px' : '80px', transition: 'height 0.4s cubic-bezier(0.2,0.8,0.2,1)' }}>
        {/* Logo */}
        <Link href="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo%202%20.png" alt="Prestige Real Estate" style={{ height: '44px', width: 'auto', display: 'block', filter: 'brightness(1.15) contrast(1.1) drop-shadow(0 0 4px rgba(201,168,76,0.25))' }} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span className="logo-main" style={{ fontSize: '1.4rem', fontFamily: 'Georgia, serif', color: '#C9A84C', letterSpacing: '0.08em', fontWeight: 400 }}>
              PRESTIGE
            </span>
            <span style={{ fontSize: '0.65rem', color: '#888', letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '2px' }}>
              Real Estate
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="desktop-nav">
          <Link href="/contact" className="btn btn-secondary btn-sm">
            <span>Book a Call</span>
          </Link>
          <Link href="/contact" className="btn btn-primary btn-sm">
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`hamburger${menuOpen ? ' open' : ''}`}>
            <span /><span /><span />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '1.5rem 2rem 2rem' }} className="mobile-menu">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '0.75rem 0', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', marginTop: '1.5rem', padding: '0.75rem', backgroundColor: '#C9A84C', color: '#0a0a0a', textAlign: 'center', textDecoration: 'none', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
