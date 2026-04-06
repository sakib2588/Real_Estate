'use client';

import { useState } from 'react';

const contactOptions = [
  { icon: '◆', title: 'Book a Demo', desc: 'See the platform live with one of our specialists.' },
  { icon: '◇', title: 'Sales Inquiry', desc: 'Talk to our team about pricing and plans.' },
  { icon: '○', title: 'Support', desc: 'Get help from our technical support team.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    width: '100%',
    backgroundColor: '#111',
    border: '1px solid rgba(201,168,76,0.15)',
    color: '#f5f5f5',
    padding: '0.85rem 1rem',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  } as React.CSSProperties;

  const labelStyle = {
    display: 'block',
    fontSize: '0.7rem',
    color: '#666',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    marginBottom: '0.5rem',
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10rem 2rem 5rem', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '520px' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Get in Touch</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Let&apos;s Start a<br />
              <span style={{ background: 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Conversation
              </span>
            </h1>
            <p style={{ color: '#777', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Whether you&apos;re ready to get started or just exploring, our team is here to help.
            </p>
          </div>
        </div>

        {/* Hero image — direct child of section, fills full height */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '65vw', display: 'flex', flexDirection: 'column', zIndex: 0 }} className="contact-hero-visual">
          <div className="fade-lr" style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imgsandvideos/guy on call.jpg" alt="Speak with our team" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', textAlign: 'right', zIndex: 2 }}>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Always Available</div>
            <div style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5' }}>Real people. Real answers.</div>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .contact-hero-visual { display: none; } }`}</style>
      </section>

      {/* Contact options */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '2rem 2rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="contact-options">
          {contactOptions.map(o => (
            <div key={o.title} style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.08)', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', color: '#C9A84C', marginBottom: '0.75rem' }}>{o.icon}</div>
              <h3 style={{ fontSize: '0.9rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.4rem' }}>{o.title}</h3>
              <p style={{ color: '#555', fontSize: '0.8rem', lineHeight: 1.5 }}>{o.desc}</p>
            </div>
          ))}
        </div>
        <style>{`@media (max-width: 600px) { .contact-options { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Main form + info */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '4rem 2rem 7rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '4rem' }} className="contact-main">

          {/* Form */}
          <div>
            <h2 style={{ fontSize: '1.4rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.5rem' }}>Send Us a Message</h2>
            <p style={{ color: '#555', fontSize: '0.85rem', marginBottom: '2.5rem' }}>We typically respond within 2 business hours.</p>

            {submitted ? (
              <div style={{ backgroundColor: '#141208', border: '1px solid rgba(201,168,76,0.3)', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: '#C9A84C', marginBottom: '1rem' }}>◆</div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.75rem' }}>Message Received</h3>
                <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={labelStyle} htmlFor="name">Full Name *</label>
                    <input id="name" name="name" required value={formData.name} onChange={handleChange} style={inputStyle} placeholder="John Smith"
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} style={inputStyle} placeholder="john@example.com"
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={labelStyle} htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+1 (555) 000-0000"
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')} />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="company">Brokerage / Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} style={inputStyle} placeholder="Your Brokerage"
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="interest">I&apos;m Interested In</label>
                  <select id="interest" name="interest" value={formData.interest} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                    <option value="">Select an option...</option>
                    <option value="starter">Starter Plan</option>
                    <option value="professional">Professional Plan</option>
                    <option value="elite">Elite Plan</option>
                    <option value="enterprise">Enterprise / Custom</option>
                    <option value="demo">Product Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }}
                    placeholder="Tell us about your business and what you're looking for..."
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div>
            <div style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.1)', padding: '2.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '0.8rem', color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact Information</h3>
              {[
                { label: 'Email', value: 'hello@prestigere.com' },
                { label: 'Phone', value: '+1 (888) 555-0200' },
                { label: 'Hours', value: 'Mon–Fri, 9am–6pm EST' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.65rem', color: '#444', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ color: '#ccc', fontSize: '0.9rem' }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.1)', padding: '2.5rem' }}>
              <h3 style={{ fontSize: '0.8rem', color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Offices</h3>
              {[
                { city: 'New York', addr: '432 Park Avenue, 45th Floor\nNew York, NY 10022' },
                { city: 'Los Angeles', addr: '9100 Wilshire Blvd, Suite 1000\nBeverly Hills, CA 90210' },
                { city: 'Miami', addr: '1221 Brickell Ave, Suite 900\nMiami, FL 33131' },
              ].map(o => (
                <div key={o.city} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#f5f5f5', letterSpacing: '0.08em', fontFamily: 'Georgia, serif', marginBottom: '0.3rem' }}>{o.city}</div>
                  <div style={{ color: '#555', fontSize: '0.8rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{o.addr}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-main { grid-template-columns: 1fr !important; } }
          @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
