import Link from 'next/link';

const team = [
  { name: 'Marcus J. Sterling', role: 'Founder & CEO', bio: '20 years in luxury real estate and digital marketing. Built three successful agencies before founding Prestige.' },
  { name: 'Elena Voss', role: 'Chief Design Officer', bio: 'Award-winning UX designer who has crafted digital experiences for some of the world\'s most recognized luxury brands.' },
  { name: 'David Chen', role: 'Head of Technology', bio: 'Former lead engineer at two PropTech unicorns. Passionate about building software that actually helps agents close deals.' },
  { name: 'Isabelle Fontaine', role: 'VP of Client Success', bio: 'Dedicated to ensuring every agent on Prestige achieves measurable growth. Managed over 500 client relationships.' },
  { name: 'Rafael Santos', role: 'Head of Marketing', bio: 'Performance marketing specialist with expertise in real estate lead generation, SEO, and paid media strategy.' },
  { name: 'Priya Nair', role: 'Head of Product', bio: 'Product strategist focused on building features that solve real problems for agents in the field every day.' },
];

const values = [
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we build. Mediocrity is not an option.' },
  { title: 'Integrity', desc: 'Transparent pricing, honest advice, and always putting our clients\' interests first.' },
  { title: 'Innovation', desc: 'Constantly evolving our platform to stay ahead of trends and give our agents a competitive edge.' },
  { title: 'Partnership', desc: 'We succeed only when our clients succeed. Their growth is our mission.' },
];

const milestones = [
  { year: '2015', event: 'Prestige founded with a mission to bring luxury digital presence to real estate professionals.' },
  { year: '2017', event: 'Reached 1,000 agents on the platform. Launched the first IDX Pro Suite integration.' },
  { year: '2019', event: 'Expanded to Canada, UK, and Australia. Launched the Lead Command CRM system.' },
  { year: '2021', event: 'Surpassed $1B in agent listings generated through the platform. Launched Growth Marketing.' },
  { year: '2023', event: 'Reached 10,000 active agents. Launched AI-powered analytics and lead scoring.' },
  { year: '2024', event: 'Named #1 Real Estate Digital Platform by the National Association of Realtors Tech Survey.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10rem 2rem 6rem', width: '100%', position: 'relative', zIndex: 1 }} className="about-hero-grid">
          <div style={{ maxWidth: '520px' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Story</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Built by Real Estate<br />
              <span style={{ background: 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Professionals
              </span>
            </h1>
            <p style={{ color: '#777', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Prestige was founded in 2015 by a team of real estate veterans and digital marketing experts who were frustrated by the generic, one-size-fits-all solutions available to agents.
            </p>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.8 }}>
              We set out to build something different — a platform that truly understands the luxury real estate market and gives agents the tools they need to stand out and win.
            </p>
          </div>
        </div>

        {/* Hero image — direct child of section, fills full height */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '65vw', display: 'flex', flexDirection: 'column', zIndex: 0 }} className="about-hero-visual">
          <div className="fade-lr" style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imgsandvideos/agents 1.jpg" alt="The Prestige team" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', textAlign: 'right', zIndex: 2 }}>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>The Team</div>
            <div style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5' }}>People who live and breathe real estate</div>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .about-hero-visual { display: none; } }`}</style>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '6rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>What Drives Us</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="values-grid">
            {values.map(v => (
              <div key={v.title} style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '40px', height: '1px', background: '#C9A84C', margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{v.title}</h3>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 500px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Journey</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>A Decade of Excellence</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '80px', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', marginBottom: i < milestones.length - 1 ? '3rem' : 0, position: 'relative' }}>
                <div style={{ textAlign: 'right', paddingRight: '1.5rem', position: 'relative' }}>
                  <span style={{ fontSize: '0.85rem', color: '#C9A84C', fontFamily: 'Georgia, serif' }}>{m.year}</span>
                  <div style={{ position: 'absolute', right: '-5px', top: '50%', transform: 'translateY(-50%)', width: '9px', height: '9px', backgroundColor: '#C9A84C', borderRadius: '50%' }} />
                </div>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: 1.7, paddingTop: '0.1rem' }}>{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '6rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>The People Behind Prestige</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>Meet Our Leadership Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="team-grid">
            {team.map(t => (
              <div key={t.name} style={{ backgroundColor: '#111', border: '1px solid rgba(201,168,76,0.08)', padding: '2rem' }}>
                <div style={{ width: '56px', height: '56px', backgroundColor: '#1a1a1a', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '50%', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#C9A84C', fontSize: '1.2rem', fontFamily: 'Georgia, serif' }}>{t.name[0]}</span>
                </div>
                <h3 style={{ fontSize: '1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.25rem' }}>{t.name}</h3>
                <div style={{ fontSize: '0.7rem', color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{t.role}</div>
                <p style={{ color: '#666', fontSize: '0.875rem', lineHeight: 1.7 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '5rem 2rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '1rem' }}>
            Join the Prestige Family
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>Let us help you build the digital presence your brand deserves.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary"><span>Get in Touch</span></Link>
            <Link href="/pricing" className="btn btn-secondary"><span>View Plans</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
