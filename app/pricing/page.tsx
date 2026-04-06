import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    tagline: 'For independent agents launching their brand',
    features: [
      'Signature website (up to 10 pages)',
      'IDX/MLS integration',
      'Mobile-optimized design',
      'Lead capture forms',
      'Basic analytics dashboard',
      'Email support',
      '1 user seat',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    tagline: 'For growing agents who want more leads',
    features: [
      'Everything in Starter',
      'Advanced IDX with map search',
      'CRM & lead management',
      'Automated email drips',
      'Google & Meta Ads setup',
      'SEO optimization',
      'Priority support',
      'Up to 3 user seats',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$1,199',
    period: '/month',
    tagline: 'For top producers & luxury teams',
    features: [
      'Everything in Professional',
      'Fully bespoke custom design',
      'Dedicated success manager',
      'Full-service marketing team',
      'Advanced analytics & reporting',
      'Custom integrations',
      'Quarterly strategy sessions',
      'Unlimited user seats',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
];

const faqs = [
  { q: 'Is there a setup fee?', a: 'No setup fees on any plan. You pay the monthly subscription and we handle everything from day one.' },
  { q: 'Can I cancel anytime?', a: 'Yes. All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.' },
  { q: 'Do you offer annual billing?', a: 'Yes — pay annually and save 20% on any plan. Contact us to set up annual billing.' },
  { q: 'What IDX providers do you support?', a: 'We support all major IDX providers including iHomeFinder, Showcase IDX, Diverse Solutions, and more.' },
  { q: 'How long does it take to launch?', a: 'Most Starter sites go live within 2 weeks. Professional and Elite timelines are 3–5 weeks depending on customization.' },
  { q: 'Do I own my website?', a: 'Your content and domain are always yours. The platform license is included in your subscription.' },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10rem 2rem 5rem', width: '100%', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '520px' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Transparent Pricing</p>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Simple Plans.<br />
              <span style={{ background: 'linear-gradient(135deg, #A07830, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Exceptional Results.
              </span>
            </h1>
            <p style={{ color: '#777', fontSize: '1.05rem', lineHeight: 1.8 }}>
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Hero image — direct child of section, fills full height */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '65vw', display: 'flex', flexDirection: 'column', zIndex: 0 }} className="pricing-hero-visual">
          <div className="fade-lr" style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/imgsandvideos/filling out form.jpg" alt="Signing up made simple" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', textAlign: 'right', zIndex: 2 }}>
            <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Simple Onboarding</div>
            <div style={{ fontSize: '1.1rem', fontFamily: 'Georgia, serif', color: '#f5f5f5' }}>From signup to launch in days</div>
          </div>
        </div>

        <style>{`@media (max-width: 768px) { .pricing-hero-visual { display: none; } }`}</style>
      </section>

      {/* Pricing cards */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '3rem 2rem 7rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }} className="pricing-grid">
          {plans.map(plan => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.highlighted ? '#141208' : '#111',
                border: plan.highlighted ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.1)',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#C9A84C', color: '#0a0a0a', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  Most Popular
                </div>
              )}
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1rem', color: plan.highlighted ? '#C9A84C' : '#888', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{plan.name}</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>{plan.price}</span>
                  <span style={{ color: '#555', fontSize: '0.9rem' }}>{plan.period}</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: 1.6 }}>{plan.tagline}</p>
              </div>

              <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)', marginBottom: '2rem' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#aaa', fontSize: '0.875rem', lineHeight: 1.5 }}>
                    <span style={{ color: '#C9A84C', fontSize: '0.5rem', marginTop: '0.35rem', flexShrink: 0 }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%' }}
              >
                <span>{plan.cta}</span>
              </Link>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px !important; margin: 0 auto !important; } }
        `}</style>
      </section>

      {/* Enterprise CTA */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '4rem 2rem', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }} className="enterprise-row">
          <div>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400, marginBottom: '0.5rem' }}>Need a Custom Enterprise Plan?</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>For large brokerages, teams of 10+, and enterprise clients — we build fully custom packages.</p>
          </div>
          <Link href="/contact" className="btn btn-secondary"><span>Contact Sales</span></Link>
        </div>
        <style>{`@media (max-width: 600px) { .enterprise-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#0d0d0d', padding: '7rem 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>FAQ</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontFamily: 'Georgia, serif', color: '#f5f5f5', fontWeight: 400 }}>Common Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <div key={faq.q} style={{ borderTop: i === 0 ? '1px solid rgba(201,168,76,0.1)' : 'none', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '1.75rem 0' }}>
                <h3 style={{ fontSize: '1rem', color: '#f5f5f5', fontFamily: 'Georgia, serif', fontWeight: 400, marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
