import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Prestige Real Estate — Luxury Digital Presence',
  description: 'Elevate your real estate brand with world-class websites, marketing tools, and lead generation designed for top-producing agents.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <style>{`
          /* ---------- Site-wide Interactive Buttons ---------- */
          .btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.9rem 2rem;
            font-size: 0.85rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            text-decoration: none;
            font-weight: 700;
            font-family: inherit;
            border: 1px solid transparent;
            cursor: pointer;
            overflow: hidden;
            isolation: isolate;
            transition: transform 0.35s cubic-bezier(0.2,0.8,0.2,1), box-shadow 0.35s ease, color 0.35s ease, border-color 0.35s ease, letter-spacing 0.35s ease, background-color 0.35s ease;
          }
          .btn > span { position: relative; z-index: 2; }
          .btn-sm { padding: 0.55rem 1.4rem; font-size: 0.8rem; letter-spacing: 0.1em; }
          .btn-lg { padding: 1rem 2.5rem; letter-spacing: 0.15em; }
          .btn::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(120deg, transparent 0%, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%, transparent 100%);
            transform: translateX(-100%);
            transition: transform 0.7s ease;
            z-index: 1;
            pointer-events: none;
          }
          .btn:hover::before { transform: translateX(100%); }
          .btn-primary {
            background-color: #C9A84C;
            color: #0a0a0a;
            box-shadow: 0 4px 14px rgba(201,168,76,0.25);
          }
          .btn-primary:hover {
            background-color: #E8C97A;
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(201,168,76,0.5), 0 0 0 1px rgba(232,201,122,0.6);
            letter-spacing: 0.16em;
          }
          .btn-primary:active {
            transform: translateY(-1px) scale(0.98);
            box-shadow: 0 4px 12px rgba(201,168,76,0.35);
            transition-duration: 0.1s;
          }
          .btn-secondary {
            background-color: transparent;
            color: #C9A84C;
            border-color: rgba(201,168,76,0.4);
          }
          .btn-secondary:hover {
            color: #0a0a0a;
            background-color: #C9A84C;
            border-color: #C9A84C;
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(201,168,76,0.35);
            letter-spacing: 0.16em;
          }
          .btn-secondary:active {
            transform: translateY(-1px) scale(0.98);
            transition-duration: 0.1s;
          }
          .btn:focus-visible { outline: 2px solid #E8C97A; outline-offset: 3px; }

          /* ---------- Navbar interactivity ---------- */
          .nav-link {
            position: relative;
            color: #ccc;
            text-decoration: none;
            font-size: 0.85rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 0.4rem 0;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, #C9A84C, transparent);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1);
          }
          .nav-link:hover {
            color: #C9A84C;
            transform: translateY(-1px);
          }
          .nav-link:hover::after { transform: scaleX(1); }

          .nav-logo { display: inline-block; transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1); }
          .nav-logo:hover { transform: scale(1.04); }
          .nav-logo .logo-main { transition: text-shadow 0.4s ease; }
          .nav-logo:hover .logo-main { text-shadow: 0 0 24px rgba(201,168,76,0.6); }

          .hamburger { position: relative; width: 28px; height: 22px; }
          .hamburger span {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #C9A84C;
            transition: transform 0.4s cubic-bezier(0.2,0.8,0.2,1), opacity 0.3s ease, top 0.3s ease;
          }
          .hamburger span:nth-child(1) { top: 0; }
          .hamburger span:nth-child(2) { top: 10px; }
          .hamburger span:nth-child(3) { top: 20px; }
          .hamburger.open span:nth-child(1) { top: 10px; transform: rotate(45deg); }
          .hamburger.open span:nth-child(2) { opacity: 0; }
          .hamburger.open span:nth-child(3) { top: 10px; transform: rotate(-45deg); }

          /* ---------- Left→Right reveal mask for media ---------- */
          .fade-lr {
            -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 75%, #000 100%);
                    mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 75%, #000 100%);
            -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
            -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
          }

          /* ---------- Hero media fade-in on page load ---------- */
          @keyframes heroFadeIn {
            from { opacity: 0; transform: translateX(30px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          .hero-visual,
          .about-hero-visual,
          .contact-hero-visual,
          .pricing-hero-visual,
          .products-hero-visual {
            animation: heroFadeIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }
          .hero-text-fade > * {
            animation: heroTextFadeIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }
          .hero-text-fade > *:nth-child(1) { animation-delay: 0.05s; }
          .hero-text-fade > *:nth-child(2) { animation-delay: 0.18s; }
          .hero-text-fade > *:nth-child(3) { animation-delay: 0.32s; }
          .hero-text-fade > *:nth-child(4) { animation-delay: 0.46s; }
          @keyframes heroTextFadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          section > div > div:first-child > h1,
          section > div > div:first-child > p {
            animation: heroTextFadeIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-visual, .about-hero-visual, .contact-hero-visual,
            .pricing-hero-visual, .products-hero-visual {
              animation: none;
            }
          }

          /* ---------- All-edges soft fade (vignette) ---------- */
          .fade-edges {
            -webkit-mask-image:
              linear-gradient(to right, transparent 0%, #000 25%),
              linear-gradient(to left, transparent 0%, #000 10%),
              linear-gradient(to bottom, transparent 0%, #000 15%),
              linear-gradient(to top, transparent 0%, #000 15%);
                    mask-image:
              linear-gradient(to right, transparent 0%, #000 25%),
              linear-gradient(to left, transparent 0%, #000 10%),
              linear-gradient(to bottom, transparent 0%, #000 15%),
              linear-gradient(to top, transparent 0%, #000 15%);
            -webkit-mask-composite: source-in;
                    mask-composite: intersect;
            -webkit-mask-repeat: no-repeat;
                    mask-repeat: no-repeat;
          }
        `}</style>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
