/* Header Component */
'use client';

import { SITE_CONFIG, COLORS, SERVICES, STEPS, GALLERY, TOWNS } from '@/lib/data';
import { useState } from 'react';

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { label: 'Services', href: '#services' },
//     { label: 'About', href: '#about' },
//     { label: 'Our Work', href: '#work' },
//     { label: 'Service Area', href: '#area' },
//     { label: 'Contact', href: '#contact' },
//   ];

//   return (
//     <header
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         gap: '24px',
//         padding: '14px 48px',
//         background: COLORS.pageBg,
//         borderBottom: `1px solid ${COLORS.border}`,
//         position: 'sticky',
//         top: 0,
//         zIndex: 50,
//         flexWrap: 'wrap',
//       }}
//     >
//       <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
//         <div
//           style={{
//             width: '90px',
//             height: '56px',
//             borderRadius: '6px',
//             background: 'linear-gradient(135deg, #2f6b2a 0%, #1d4a1a 100%)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: '#efe6b8',
//             fontSize: '24px',
//             fontWeight: 'bold',
//           }}
//         >
//           🌿
//         </div>
//         <span
//           style={{
//             fontFamily: "'Saira Condensed', sans-serif",
//             fontWeight: 700,
//             fontSize: '28px',
//             letterSpacing: '0.04em',
//             textTransform: 'uppercase',
//             color: COLORS.forest,
//           }}
//         >
//           Island Lawncare
//         </span>
//       </a>

//       <nav
//         style={{
//           display: mobileMenuOpen ? 'flex' : 'none',
//           flexDirection: 'column',
//           gap: '16px',
//           width: '100%',
//           position: 'absolute',
//           top: '100%',
//           left: 0,
//           right: 0,
//           background: COLORS.pageBg,
//           padding: '16px 48px',
//           borderBottom: `1px solid ${COLORS.border}`,
//         }}
//         className="mobile-nav"
//       >
//         {navLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             style={{
//               color: COLORS.forest,
//               fontWeight: 500,
//               fontSize: '16px',
//             }}
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             {link.label}
//           </a>
//         ))}
//       </nav>

//       <nav
//         style={{
//           display: 'flex',
//           gap: '32px',
//           fontWeight: 500,
//           fontSize: '16px',
//         }}
//         className="desktop-nav"
//       >
//         {navLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             style={{
//               color: COLORS.forest,
//             }}
//           >
//             {link.label}
//           </a>
//         ))}
//       </nav>

//       <a
//         href="#contact"
//         style={{
//           background: COLORS.green,
//           color: '#fff',
//           padding: '14px 26px',
//           borderRadius: '6px',
//           fontWeight: 700,
//           transition: 'background 0.2s ease',
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background = COLORS.greenHover;
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background = COLORS.green;
//         }}
//       >
//         Get a Free Quote
//       </a>

//       <button
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         style={{
//           display: 'none',
//           background: 'none',
//           border: 'none',
//           fontSize: '24px',
//           cursor: 'pointer',
//         }}
//         className="mobile-menu-btn"
//       >
//         ☰
//       </button>
//     </header>
//   );
// }
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Our Work', href: '#work' },
    { label: 'Service Area', href: '#area' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Styles */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        
        @media (min-width: 901px) {
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
        
        .mobile-nav.open {
          display: flex !important;
        }
      `}</style>

      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          padding: '14px 20px',
          background: COLORS.pageBg,
          borderBottom: `1px solid ${COLORS.border}`,
          position: 'sticky',
          top: 0,
          zIndex: 50,
          flexWrap: 'wrap',
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '200px' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #2f6b2a 0%, #1d4a1a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#efe6b8',
              fontSize: '24px',
              fontWeight: 'bold',
              flexShrink: 0,
            }}
          >
            🌿
          </div>
          <span
            style={{
              fontFamily: "'Saira Condensed', sans-serif",
              fontWeight: 700,
              fontSize: '18px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: COLORS.forest,
              whiteSpace: 'nowrap',
            }}
          >
            Island<br />Lawncare
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: '24px',
            fontWeight: 500,
            fontSize: '14px',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: COLORS.forest,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.green;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = COLORS.forest;
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          style={{
            background: COLORS.green,
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '6px',
            fontWeight: 700,
            fontSize: '14px',
            transition: 'background 0.2s ease',
            whiteSpace: 'nowrap',
            display: 'none',
          }}
          className="desktop-cta"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.greenHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.green;
          }}
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: COLORS.green,
            color: '#fff',
            border: 'none',
            padding: '10px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            marginLeft: 'auto',
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <nav
        className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '0',
          width: '100%',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: COLORS.pageBg,
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          zIndex: 49,
        }}
      >
        {navLinks.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: COLORS.forest,
              fontWeight: 500,
              fontSize: '16px',
              padding: '16px 20px',
              borderBottom: idx < navLinks.length - 1 ? `1px solid ${COLORS.border}` : 'none',
              transition: 'background 0.2s ease',
            }}
            onClick={() => setMobileMenuOpen(false)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.pageBg;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            background: COLORS.green,
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            padding: '16px 20px',
            textAlign: 'center',
            transition: 'background 0.2s ease',
          }}
          onClick={() => setMobileMenuOpen(false)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.greenHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.green;
          }}
        >
          Get a Free Quote
        </a>
      </nav>
    </>
  );
}

/* TopBar Component */
export function TopBar() {
  return (
    <div
      style={{
        background: COLORS.forest,
        color: COLORS.cream,
        fontSize: '14px',
        padding: '10px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
      }}
    >
      <span>
        {SITE_CONFIG.location} · Serving {SITE_CONFIG.county}
      </span>
      <span style={{ display: 'flex', gap: '24px' }}>
        <a
          href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
          style={{ color: COLORS.cream, textDecoration: 'none' }}
        >
          {SITE_CONFIG.phone}
        </a>
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          style={{ color: COLORS.cream, textDecoration: 'none' }}
        >
          {SITE_CONFIG.email}
        </a>
      </span>
    </div>
  );
}

/* Hero Component */
export function Hero() {
  return (
    <section
      id="top"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '48px',
        padding: '72px 48px',
        alignItems: 'center',
        background: COLORS.forest,
        color: '#f6f4ec',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <span
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '20px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: COLORS.lime,
          }}
        >
          Cornwall · Queens County · PEI
        </span>
        <h1
          style={{
            margin: 0,
            fontFamily: "'Saira Condensed', sans-serif",
            fontWeight: 700,
            fontSize: '84px',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            textWrap: 'balance',
          }}
        >
          Island lawns, <span style={{ color: COLORS.cream }}>cut right.</span>
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: '19px',
            lineHeight: 1.6,
            maxWidth: '520px',
            color: '#dfe8d6',
          }}
        >
          Reliable mowing, trimming and full lawn maintenance for homes across Queens County. Clean stripes, crisp edges, and a yard you're proud of all season.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              background: COLORS.lime,
              color: COLORS.forest,
              padding: '16px 30px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '17px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = COLORS.cream;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = COLORS.lime;
            }}
          >
            Request a Quote
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
            style={{
              border: `2px solid ${COLORS.cream}`,
              color: COLORS.cream,
              padding: '14px 28px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '17px',
            }}
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
      <div
        style={{
          borderRadius: '14px',
          overflow: 'hidden',
          aspectRatio: '16/9',
          background: 'linear-gradient(135deg, #a6d65a 0%, #2f6b2a 100%)',
          boxShadow: '0 24px 60px rgba(0,0,0,.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}
      >
        <img src='/images/hero/currentlogo.jpg' style={{ width: '100%' }}/>
      </div>
    </section>
  );
}

/* TrustStrip Component */
export function TrustStrip() {
  return (
    <section
      style={{
        background: COLORS.cream,
        padding: '20px 48px',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px 36px',
        flexWrap: 'wrap',
        fontFamily: "'Saira Condensed', sans-serif",
        fontSize: '22px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: COLORS.forest,
      }}
    >
      <span>Locally owned</span>
      <span>+</span>
      <span>Free quotes</span>
      <span>+</span>
      <span>Weekly & seasonal plans</span>
      <span>+</span>
      <span>Queens County</span>
    </section>
  );
}

/* Services Component */
export function Services() {
  return (
    <section id="services" style={{ padding: '96px 48px' }}>
      <div style={{ marginBottom: '48px' }}>
        <span
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '18px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: COLORS.green,
          }}
        >
          What we do
        </span>
        <h2
          style={{
            margin: '8px 0 0',
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '56px',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: COLORS.forest,
          }}
        >
          Everything your lawn needs
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {SERVICES.map((service) => (
          <div
            key={service.n}
            style={{
              background: '#fff',
              border: `1px solid ${COLORS.border}`,
              borderRadius: '12px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.green;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = COLORS.border;
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: COLORS.forest,
                color: COLORS.cream,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Saira Condensed', sans-serif",
                fontSize: '22px',
                fontWeight: 700,
              }}
            >
              {service.n}
            </div>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Saira Condensed', sans-serif",
                fontSize: '30px',
                textTransform: 'uppercase',
                color: COLORS.forest,
              }}
            >
              {service.title}
            </h3>
            <p style={{ margin: 0, lineHeight: 1.55, color: COLORS.muted, fontSize: '16px' }}>
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* About Component */
export function About() {
  return (
    <section
      id="about"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '64px',
        padding: '96px 48px',
        background: '#fff',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          aspectRatio: '4/3',
          borderRadius: '14px',
          background: `repeating-linear-gradient(135deg, ${COLORS.stripeLight} 0 14px, ${COLORS.stripeDark} 14px 28px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: COLORS.muted,
          textAlign: 'center',
          padding: '24px',
        }}
      >
        PHOTO: Tyler with zero-turn mower
        <br />
        (replace with real job-site photo)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '18px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: COLORS.green,
          }}
        >
          About Island Lawncare
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '56px',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: COLORS.forest,
          }}
        >
          Local, dependable, detail-obsessed
        </h2>
        <p style={{ margin: 0, lineHeight: 1.7, fontSize: '17px', color: '#3a4a37' }}>
          Island Lawncare is run by Tyler Doiron out of Cornwall, PEI. We care for lawns across Queens County with commercial-grade equipment and a simple promise: show up when we say we will, and leave it looking sharp.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginTop: '8px',
          }}
        >
          {[
            { label: 'ON TIME', desc: 'Consistent schedule' },
            { label: 'CLEAN CUTS', desc: 'Stripes & sharp edges' },
            { label: 'FAIR PRICE', desc: 'Free, no-pressure quotes' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                borderTop: `3px solid ${COLORS.green}`,
                paddingTop: '12px',
              }}
            >
              <div
                style={{
                  fontFamily: "'Saira Condensed', sans-serif",
                  fontSize: '28px',
                  fontWeight: 700,
                  color: COLORS.forest,
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: '15px', color: COLORS.muted }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* HowItWorks Component */
export function HowItWorks() {
  return (
    <section
      style={{
        padding: '96px 48px',
        background: COLORS.forest,
        color: '#f6f4ec',
      }}
    >
      <h2
        style={{
          margin: '0 0 48px',
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: '56px',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        How it works
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
        }}
      >
        {STEPS.map((step) => (
          <div
            key={step.n}
            style={{
              borderTop: `2px solid ${COLORS.lime}`,
              paddingTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontFamily: "'Saira Condensed', sans-serif",
                fontSize: '64px',
                fontWeight: 700,
                color: COLORS.lime,
                lineHeight: 1,
              }}
            >
              {step.n}
            </span>
            <h3
              style={{
                margin: 0,
                fontFamily: "'Saira Condensed', sans-serif",
                fontSize: '30px',
                textTransform: 'uppercase',
              }}
            >
              {step.title}
            </h3>
            <p style={{ margin: 0, lineHeight: 1.6, color: '#dfe8d6' }}>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* RecentWork Component */
export function RecentWork() {
  return (
    <section id="work" style={{ padding: '96px 48px' }}>
      <h2
        style={{
          margin: '0 0 12px',
          fontFamily: "'Saira Condensed', sans-serif",
          fontSize: '56px',
          textTransform: 'uppercase',
          lineHeight: 1,
          color: COLORS.forest,
        }}
      >
        Recent work
      </h2>
      <p style={{ margin: '0 0 40px', color: COLORS.muted }}>
        Pulled from our Facebook page,{' '}
        <a href={SITE_CONFIG.facebook} target="_blank" rel="noopener noreferrer">
          @IslandLawncare902
        </a>
        .
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}
      >
        {GALLERY.map((item, idx) => (
          <div
            key={idx}
            style={{
              aspectRatio: '1/1',
              borderRadius: '12px',
              background: `repeating-linear-gradient(135deg, ${COLORS.stripeLight} 0 14px, ${COLORS.stripeDark} 14px 28px)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: COLORS.muted,
              textAlign: 'center',
              padding: '16px',
            }}
          >
            PHOTO: {item}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ServiceArea Component */
export function ServiceArea() {
  return (
    <section
      id="area"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '56px',
        padding: '96px 48px',
        background: COLORS.cream,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <span
          style={{
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '18px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: COLORS.green,
          }}
        >
          Service area
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '56px',
            textTransform: 'uppercase',
            lineHeight: 1,
            color: COLORS.forest,
          }}
        >
          Proudly serving Queens County
        </h2>
        <p style={{ margin: 0, lineHeight: 1.7, fontSize: '17px', color: '#2e3a2b' }}>
          Based in Cornwall, we cover Charlottetown, Stratford, Cornwall and surrounding communities. Not sure if you're in range? Just ask.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '8px' }}>
          {TOWNS.map((town) => (
            <span
              key={town}
              style={{
                background: COLORS.forest,
                color: COLORS.cream,
                padding: '8px 16px',
                borderRadius: '99px',
                fontSize: '15px',
                fontWeight: 500,
              }}
            >
              {town}
            </span>
          ))}
        </div>
      </div>
      <div
        style={{
          aspectRatio: '4/3',
          borderRadius: '14px',
          background: `repeating-linear-gradient(135deg, #ddd28f 0 14px, #ddd28f 14px 28px)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          fontSize: '14px',
          color: '#3a4a37',
          textAlign: 'center',
          padding: '24px',
        }}
      >
        MAP: Queens County service-area embed
      </div>
    </section>
  );
}

/* Contact Component */
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'Service needed',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send this to an API or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', address: '', service: 'Service needed', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '56px',
        padding: '96px 48px',
        background: COLORS.forest,
        color: '#f6f4ec',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: "'Saira Condensed', sans-serif",
            fontSize: '64px',
            textTransform: 'uppercase',
            lineHeight: 0.95,
          }}
        >
          Get your free quote
        </h2>
        <p style={{ margin: 0, lineHeight: 1.6, fontSize: '18px', color: '#dfe8d6', maxWidth: '440px' }}>
          Tell us about your yard and we'll get back to you promptly.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '18px', marginTop: '8px' }}>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`}
            style={{
              color: COLORS.cream,
              fontWeight: 700,
              fontSize: '26px',
              fontFamily: "'Saira Condensed', sans-serif",
              textDecoration: 'none',
            }}
          >
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            style={{
              color: COLORS.cream,
              textDecoration: 'none',
            }}
          >
            {SITE_CONFIG.email}
          </a>
          <span>{SITE_CONFIG.location}</span>
          <a
            href={SITE_CONFIG.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: COLORS.lime,
              textDecoration: 'none',
            }}
          >
            facebook.com/IslandLawncare902
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          background: COLORS.pageBg,
          color: COLORS.bodyInk,
          borderRadius: '14px',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <input
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '14px',
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '6px',
              font: 'inherit',
              background: '#fff',
              outline: 'none',
            }}
          />
          <input
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: '14px',
              border: `1px solid ${COLORS.inputBorder}`,
              borderRadius: '6px',
              font: 'inherit',
              background: '#fff',
              outline: 'none',
            }}
          />
        </div>
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: '14px',
            border: `1px solid ${COLORS.inputBorder}`,
            borderRadius: '6px',
            font: 'inherit',
            background: '#fff',
            outline: 'none',
          }}
        />
        <input
          placeholder="Address / community"
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={{
            padding: '14px',
            border: `1px solid ${COLORS.inputBorder}`,
            borderRadius: '6px',
            font: 'inherit',
            background: '#fff',
            outline: 'none',
          }}
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={{
            padding: '14px',
            border: `1px solid ${COLORS.inputBorder}`,
            borderRadius: '6px',
            font: 'inherit',
            background: '#fff',
            color: COLORS.muted,
            outline: 'none',
          }}
        >
          <option>Service needed</option>
          <option>Mowing</option>
          <option>Trimming & Edging</option>
          <option>Leaf Collection</option>
          <option>Lawn Maintenance Plan</option>
          <option>Other</option>
        </select>
        <textarea
          rows={4}
          placeholder="Tell us about your lawn"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{
            padding: '14px',
            border: `1px solid ${COLORS.inputBorder}`,
            borderRadius: '6px',
            font: 'inherit',
            background: '#fff',
            resize: 'vertical',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: COLORS.green,
            color: '#fff',
            border: 'none',
            padding: '16px',
            borderRadius: '6px',
            font: 'inherit',
            fontWeight: 700,
            fontSize: '17px',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.greenHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.green;
          }}
        >
          {submitted ? '✓ Request sent!' : 'Send Request'}
        </button>
      </form>
    </section>
  );
}

/* Footer Component */
export function Footer() {
  return (
    <footer
      style={{
        background: COLORS.deepFooter,
        color: '#bccbb4',
        padding: '40px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap',
        fontSize: '14px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '90px',
            height: '56px',
            borderRadius: '6px',
            background: 'linear-gradient(135deg, #2f6b2a 0%, #1d4a1a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#efe6b8',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          🌿
        </div>
        <span>© 2026 Island Lawncare · Cornwall, PEI</span>
      </div>
      <span>Mowing + Edging + Trimming + Weeding + Tilling + Raking + Leaf Collection + Lawn Maintenance</span>
    </footer>
  );
}
