import React, { useState, useRef, useCallback } from 'react';
import './index.css';

/* ── Asset imports ── */
import heroImg   from './assets/hero.jpg';
import imagenImg from './assets/imagen.jpg';
import isologo  from './assets/isologo.png';
import logoImg  from './assets/logo.png';
import logoText from './assets/logoentexto.png';

/* ───────── SVG Icons ───────── */
const ArrowRight = () => (
  <svg className="icon-arrow-right" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CompassIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const RadioIcon = () => (
  <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SearchIcon = () => (
  <svg className="proceso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg className="proceso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);

const PenToolIcon = () => (
  <svg className="proceso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>
  </svg>
);

const RocketIcon = () => (
  <svg className="proceso-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const DiamondIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
  </svg>
);

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ───────── Data ───────── */
const partners = [
  { label: '✧ NUVEO' },
  { label: '▲ ALTURA' },
  { label: 'norda', lowercase: true },
  { label: 'VELOX' },
  { label: 'NÖRDA' },
  { label: 'BRUMA' },
];

const projects = [
  {
    title: 'ALTURA',
    cat: 'Branding · Estrategia · Identidad',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=520&fit=crop&q=80',
  },
  {
    title: 'NORDA',
    cat: 'Branding · Estrategia · Identidad',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=520&fit=crop&q=80',
  },
  {
    title: 'VELOX',
    cat: 'Branding · Estrategia · Identidad',
    img: 'https://images.unsplash.com/photo-1614064082260-155848bb4409?w=700&h=520&fit=crop&q=80',
  },
  {
    title: 'BRUMA',
    cat: 'Branding · Estrategia · Identidad',
    img: 'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?w=700&h=520&fit=crop&q=80',
  },
];

const testimonials = [
  {
    quote: 'Nuestra marca pasó de verse amateur a competir con empresas grandes.',
    author: 'Carola R.',
    role: 'CEO, Vallex Moda',
    stars: 5,
  },
  {
    quote: 'Ahora entendemos cómo comunicar nuestro valor. Fue un antes y un después.',
    author: 'Andrés M.',
    role: 'CEO, Vellex',
    stars: 5,
  },
  {
    quote: 'Zesko no solo rediseñó nuestra marca, rediseñó cómo nos percibe el mercado.',
    author: 'Sofía L.',
    role: 'Fundadora, Bruma Studio',
    stars: 5,
  },
  {
    quote: 'Claridad total desde el primer día. El proceso fue estructurado y los resultados, reales.',
    author: 'Martín P.',
    role: 'Director, Norda Group',
    stars: 5,
  },
  {
    quote: 'Duplicamos nuestras tarifas tras el rebrand y los clientes ni parpadearon.',
    author: 'Lucía V.',
    role: 'Socia, Altura Consulting',
    stars: 5,
  },
];

/* ───────── Hooks ───────── */
function useProjectsCarousel() {
  const scrollRef = useRef(null);

  const getCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.querySelector('.project-card');
    if (!card) return 0;
    return card.offsetWidth + 16;
  }, []);

  const scrollPrev = () => scrollRef.current?.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
  const scrollNext = () => scrollRef.current?.scrollBy({ left: getCardWidth(), behavior: 'smooth' });

  return { scrollRef, scrollPrev, scrollNext };
}

/* ───────── App ───────── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollRef: carouselRef, scrollPrev, scrollNext } = useProjectsCarousel();
  const headerRef = useRef(null);

  // Cerrar menú al hacer click fuera del header
  React.useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      {/* ── Header ── */}
      <header className="site-header" ref={headerRef}>
        <div className="container header-container">
          {/* Logo — isologo + texto lado a lado */}
          <a href="#" className="logo-link" aria-label="ZESKO inicio">
            <img src={isologo}  alt=""       className="logo-isologo" aria-hidden="true" />
            <img src={logoText} alt="ZESKO"  className="logo-img" />
          </a>

          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#enfoque">Nuestro enfoque</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#hablemos" className="nav-cta">Agenda tu llamada</a>
          </nav>

          <button
            className={`hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={e => { e.stopPropagation(); setMenuOpen(o => !o); }}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`} onClick={e => e.stopPropagation()}>
          <nav className="mobile-nav">
            <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
            <a href="#proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a>
            <a href="#enfoque" onClick={() => setMenuOpen(false)}>Nuestro enfoque</a>
            <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
            <a href="#hablemos" className="mobile-nav-cta" onClick={() => setMenuOpen(false)}>Agenda tu llamada</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        {/* Overlay oscuro para legibilidad */}
        <div className="hero-overlay" />
        {/* Isologo decorativo flotante */}
        <div className="hero-isologo-wrap">
          <img src={isologo} alt="" className="hero-isologo" aria-hidden="true" />
        </div>
        <div className="container hero-layout">
          <div className="hero-content">
            <span className="label-caps hero-label">Brand Strategy Co.</span>
            <h1 className="hero-headline">
              Tu marca no necesita<br />
              verse mejor. Necesita ser{' '}
              <em className="hero-accent">imposible de ignorar.</em>
            </h1>
            <p className="hero-body">
              En ZESKO diseñamos estrategias de marca que convierten negocios comunes
              en marcas memorables, claras y con poder real en el mercado.
            </p>
            <div className="hero-actions">
              <a href="#hablemos" className="btn btn-hero-primary">
                Agenda tu llamada estratégica <ArrowRight />
              </a>
              <a href="#proyectos" className="btn btn-hero">
                Ver proyectos
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">+85</span>
                <span className="hero-stat-label">marcas desarrolladas</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">+30</span>
                <span className="hero-stat-label">industrias atendidas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners — infinite marquee ── */}
      <section className="partners">
        <p className="label-caps partners-label">Marcas que confían en nuestras estrategias</p>
        <div className="marquee-outer">
          <div className="marquee-track">
            {[...partners, ...partners, ...partners].map((p, i) => (
              <span key={i} className={`partner-logo${p.lowercase ? ' lowercase' : ''}`}>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── El Problema ── */}
      <section className="section problema">
        <div className="container problema-layout">
          <div className="problema-left">
            <span className="label-caps problema-eyebrow">El problema</span>
            <h2 className="headline-lg problema-heading">El problema no es<br />tu producto</h2>
          </div>
          <div className="problema-right">
            <p className="problema-intro">
              Puedes tener un gran producto, pero si tu marca no comunica valor,
              el mercado no lo percibe.
            </p>
            <ul className="problema-list">
              {[
                'Te comparan por precio',
                'No destacas frente a tu competencia',
                'Tu mensaje no conecta',
                'Y eso termina costándote clientes.',
              ].map((item, i) => (
                <li key={i} className="problema-item">
                  <span className="problema-bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── La Solución / Services ── */}
      <section className="section services" id="servicios">
        <div className="container services-layout">
          <div className="services-intro">
            <span className="label-caps services-eyebrow">La solución</span>
            <h2 className="headline-lg services-heading">Construimos marcas<br />que venden por sí solas</h2>
            <p className="body-md services-body">
              Convertimos tu negocio en una marca que comunica valor, genera confianza y te diferencia de la competencia.
            </p>
            <a href="#servicios-all" className="btn-ghost-dark link-row">
              VER SERVICIOS <ArrowRight />
            </a>
          </div>

          <div className="services-cards">
            <div className="service-card">
              <span className="service-number">01</span>
              <TargetIcon />
              <h3 className="service-title">Estrategia de marca</h3>
              <p className="service-desc">Definimos quién eres, qué ofreces y por qué deberían elegirte.</p>
              <ArrowRight />
            </div>
            <div className="service-card">
              <span className="service-number">02</span>
              <EyeIcon />
              <h3 className="service-title">Identidad visual</h3>
              <p className="service-desc">Creamos una imagen coherente, sólida y alineada a tu posicionamiento.</p>
              <ArrowRight />
            </div>
            <div className="service-card">
              <span className="service-number">03</span>
              <CompassIcon />
              <h3 className="service-title">Posicionamiento</h3>
              <p className="service-desc">Te ubicamos en un mercado saturado con claridad y enfoque.</p>
              <ArrowRight />
            </div>
            <div className="service-card">
              <span className="service-number">04</span>
              <RadioIcon />
              <h3 className="service-title">Sistema de comunicación</h3>
              <p className="service-desc">Aseguramos consistencia en todos tus canales.</p>
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      {/* ── Prueba / Projects ── */}
      <section className="section projects" id="proyectos">
        <div className="container">
          <div className="projects-header">
            <div className="projects-header-text">
              <span className="label-caps">Prueba</span>
              <h2 className="headline-lg">Esto es lo que pasa cuando<br />tu marca está bien construida</h2>
              <p className="projects-subtitle">Más claridad. Más confianza. Más conversiones.</p>
            </div>
            <div className="projects-nav desktop-only">
              <button className="nav-btn" onClick={scrollPrev} aria-label="Anterior"><ChevronLeft /></button>
              <button className="nav-btn" onClick={scrollNext} aria-label="Siguiente"><ChevronRight /></button>
            </div>
          </div>

          <div className="projects-carousel" ref={carouselRef}>
            {projects.map((p, i) => (
              <a key={i} href={`#p${i}`} className="project-card">
                <img src={p.img} alt={p.title} className="project-image" />
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-category">{p.cat}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beneficios + Proceso ── */}
      <section className="section beneficios-proceso">
        <div className="container beneficios-proceso-grid">

          {/* Beneficios */}
          <div className="beneficios">
            <span className="label-caps beneficios-eyebrow">Beneficios</span>
            <h2 className="headline-lg beneficios-heading">Lo que realmente<br />obtienes</h2>
            <ul className="beneficios-list">
              {[
                'Una marca que te diferencia',
                'Mayor percepción de valor (puedes cobrar mejor)',
                'Consistencia en todos tus puntos de contacto',
                'Un mensaje que conecta y convierte',
              ].map((b, i) => (
                <li key={i} className="beneficio-item">
                  <span className="beneficio-check"><CheckIcon /></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Proceso */}
          <div className="proceso" id="enfoque">
            <span className="label-caps proceso-eyebrow">Proceso</span>
            <h2 className="headline-lg proceso-heading">Así trabajamos<br />contigo</h2>
            <div className="approach-timeline">
              {[
                { n: '01', icon: <SearchIcon />,    t: 'Diagnóstico',     d: 'Entendemos tu negocio, mercado y oportunidades.' },
                { n: '02', icon: <LightbulbIcon />, t: 'Estrategia',      d: 'Definimos una dirección clara y diferenciadora.' },
                { n: '03', icon: <PenToolIcon />,   t: 'Diseño',          d: 'Convertimos la estrategia en identidad visual.' },
                { n: '04', icon: <RocketIcon />,    t: 'Implementación',  d: 'Llevamos tu marca a la realidad.' },
              ].map(s => (
                <div key={s.n} className="timeline-step">
                  <div className="step-header">
                    <span className="step-number">{s.n}</span>
                    <span className="step-line" />
                  </div>
                  <div className="proceso-icon-wrap">{s.icon}</div>
                  <h3 className="step-title">{s.t}</h3>
                  <p className="step-desc">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section pricing" id="planes">
        <div className="container">
          <div className="pricing-header">
            <span className="label-caps pricing-eyebrow">Planes</span>
            <h2 className="headline-lg pricing-heading">Planes simples,<br />resultados claros</h2>
          </div>

          <div className="pricing-cards">
            {/* Esencial */}
            <div className="pricing-card">
              <div className="pricing-card-top">
                <span className="pricing-plan-name">Esencial</span>
                <p className="pricing-plan-desc">Para negocios que necesitan una base sólida</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-from">Desde</span>
                <span className="pricing-amount">USD $2,900</span>
              </div>
              <ul className="pricing-features">
                <li><CheckIcon /> Estrategia de marca</li>
                <li><CheckIcon /> Identidad visual básica</li>
                <li><CheckIcon /> Manual de marca</li>
                <li><CheckIcon /> 1 sesión de estrategia</li>
              </ul>
              <a href="#hablemos" className="btn pricing-btn">Comenzar</a>
            </div>

            {/* Pro — destacado */}
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-badge">Más pedido</div>
              <div className="pricing-card-top">
                <span className="pricing-plan-name">Pro</span>
                <p className="pricing-plan-desc">Para marcas que quieren diferenciarse</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-from">Desde</span>
                <span className="pricing-amount">USD $5,900</span>
              </div>
              <ul className="pricing-features">
                <li><CheckIcon /> Todo lo de Esencial</li>
                <li><CheckIcon /> Posicionamiento de mercado</li>
                <li><CheckIcon /> Sistema de comunicación</li>
                <li><CheckIcon /> Identidad visual completa</li>
                <li><CheckIcon /> 3 sesiones de estrategia</li>
              </ul>
              <a href="#hablemos" className="btn pricing-btn pricing-btn--featured">Comenzar</a>
            </div>

            {/* Premium */}
            <div className="pricing-card">
              <div className="pricing-card-top">
                <DiamondIcon />
                <span className="pricing-plan-name">Premium</span>
                <p className="pricing-plan-desc">Para empresas que buscan dominar su mercado</p>
              </div>
              <div className="pricing-price">
                <span className="pricing-from">Desde</span>
                <span className="pricing-amount">USD $9,900</span>
              </div>
              <ul className="pricing-features">
                <li><CheckIcon /> Todo lo de Pro</li>
                <li><CheckIcon /> Auditoría de competencia</li>
                <li><CheckIcon /> Activación de marca</li>
                <li><CheckIcon /> Estrategia de contenidos</li>
                <li><CheckIcon /> Soporte por 6 meses</li>
              </ul>
              <a href="#hablemos" className="btn pricing-btn">Comenzar</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonios — infinite marquee ── */}
      <section className="section testimonios" id="testimonios">
        <div className="container">
          <span className="label-caps testimonios-eyebrow">Testimonios</span>
          <h2 className="headline-lg testimonios-heading">Lo que dicen<br />nuestros clientes</h2>
        </div>
        <div className="testimonios-marquee-outer">
          <div className="testimonios-marquee-track">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <StarIcon key={si} />
                  ))}
                </div>
                <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                <div className="testimonial-author">
                  <span className="testimonial-name">— {t.author}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="cta-final" id="hablemos" style={{ backgroundImage: `url(${imagenImg})` }}>
        <div className="cta-final-overlay" />
        <div className="container cta-final-inner">
          <h2 className="cta-final-headline">
            Tu marca puede ser tu mayor<br />ventaja competitiva.
          </h2>
          <p className="cta-final-sub">O puede seguir siendo invisible.</p>
          <a href="mailto:hola@zesko.co" className="btn btn-hero-primary cta-final-btn">
            Agenda tu llamada estratégica <ArrowRight />
          </a>
          <span className="cta-final-note">Sin compromisos. Respuesta rápida.</span>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="container">
          <div className="grid footer-grid">
            <div className="footer-brand">
              <a href="#" className="footer-logo-link" aria-label="ZESKO inicio">
                <img src={logoImg} alt="ZESKO Brand Strategy Co." className="footer-logo-img" />
              </a>
              <p className="footer-tagline">Estrategia. Diseño. Posicionamiento.<br />Marcas que dejan huella.</p>
              <div className="footer-social">
                <a href="#instagram" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.822a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.46C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.558V9.034H7.12v11.418zM5.339 7.478c-1.144 0-2.067-.926-2.067-2.068 0-1.143.923-2.067 2.067-2.067 1.146 0 2.068.924 2.068 2.067 0 1.142-.922 2.068-2.068 2.068zM20.452 20.452h-3.558v-5.569c0-1.327-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.939v5.667H9.352V9.034h3.414v1.562h.047c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.269 2.373 4.269 5.456v6.25z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="footer-col-title">Navegación</h4>
              <ul className="footer-links">
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#enfoque">Nuestro enfoque</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#recursos">Recursos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Enlaces</h4>
              <ul className="footer-links">
                <li><a href="#blog">Blog casos de éxito</a></li>
                <li><a href="#guias">Guías</a></li>
                <li><a href="#carreras">Carreras</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-col-title">Hablemos</h4>
              <ul className="footer-links">
                <li><a href="tel:+573001234567">+57 300 123 4567</a></li>
                <li><span className="footer-text">Cancún, MX</span></li>
              </ul>
              <h4 className="footer-col-title" style={{ marginTop: '24px' }}>Síguenos</h4>
              <ul className="footer-links">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#linkedin">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 ZESKO Brand Strategy Co. Todos los derechos reservados.</span>
            <div className="footer-bottom-links">
              <a href="#privacidad">Política de privacidad</a>
              <a href="#terminos">Términos y condiciones</a>
            </div>
          </div>

          <p className="footer-sign">Las marcas fuertes no nacen. <em style={{ color: '#5c9aff', fontStyle: 'normal' }}>Se diseñan.</em></p>
        </div>
      </footer>
    </>
  );
}

export default App;
