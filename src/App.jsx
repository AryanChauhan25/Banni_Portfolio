import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Avatar } from './components/Avatar'
import { SkillItemIcon } from './components/SkillItemIcon'
import { Cursor } from './components/Cursor'
import { Button } from './components/Button'
import { LoadingIntro } from './components/LoadingIntro'
import { Reveal } from './components/Reveal'
import { ScrollOrb } from './components/ScrollOrb'
import { SectionHeading } from './components/SectionHeading'
import {
  aboutCards,
  certificates,
  contactHighlights,
  heroCopy,
  heroRoles,
  loadingIntro,
  metrics,
  navLinks,
  profile,
  reviews,
  sections,
  skillGroups,
  services,
  socialLinks,
  timeline,
  workItems,
} from './data'

const heroNameSequence = [profile.name]
const heroRoleSequence = [profile.title, 'Content Creator', 'Brand Growth Strategist']

const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5H3.75V21h3.19V8.5Zm-1.6-1.7c1 0 1.8-.82 1.8-1.83S6.34 3.15 5.34 3.15s-1.8.82-1.8 1.82.8 1.83 1.8 1.83Zm4.18 1.7H12.6v1.7h.05c.46-.86 1.6-1.76 3.3-1.76 3.54 0 4.19 2.32 4.19 5.34V21h-3.19v-5.57c0-1.33-.02-3.04-1.84-3.04-1.85 0-2.13 1.44-2.13 2.94V21H9.52V8.5Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm16 3.25-8 4.75-8-4.75V17h16V8.25Zm-8 2.47L4.91 7h14.18L12 10.72Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm8.75 1.75A1.25 1.25 0 1 1 14.5 7a1.25 1.25 0 0 1 1.25-1.25ZM12 7.75A4.25 4.25 0 1 1 7.75 12 4.25 4.25 0 0 1 12 7.75Zm0 2A2.25 2.25 0 1 0 14.25 12 2.25 2.25 0 0 0 12 9.75Z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.25a9.75 9.75 0 0 0-8.33 14.81L2.5 22l5.1-1.12A9.75 9.75 0 1 0 12 2.25Zm0 2a7.75 7.75 0 0 1 6.74 11.6l-.17.31a7.75 7.75 0 0 1-10.2 3l-3.2.71.7-3.11a7.75 7.75 0 1 1 6.13-12.51Zm4.1 9.82c-.22-.11-1.3-.64-1.5-.72s-.36-.11-.51.11-.58.72-.71.86-.26.16-.49.05a6.3 6.3 0 0 1-1.87-1.16 7 7 0 0 1-1.3-1.62c-.13-.22-.01-.35.1-.47.1-.1.22-.26.33-.39a1.5 1.5 0 0 0 .22-.37.41.41 0 0 0 0-.37c-.06-.11-.51-1.23-.7-1.68s-.37-.38-.51-.39h-.44a.85.85 0 0 0-.61.28 2.56 2.56 0 0 0-.79 1.9 4.46 4.46 0 0 0 .94 2.36 10.19 10.19 0 0 0 3.92 3.56c.55.23.98.37 1.31.48a3.16 3.16 0 0 0 1.45.09c.44-.07 1.3-.53 1.48-1.04s.18-.95.13-1.04-.18-.16-.4-.27Z" />
    </svg>
  ),
}

const skillIcons = {
  'Social Media': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.75A1.75 1.75 0 0 1 5.75 4h12.5A1.75 1.75 0 0 1 20 5.75v7.5A1.75 1.75 0 0 1 18.25 15H14l-3 3v-3H5.75A1.75 1.75 0 0 1 4 13.25v-7.5Zm2 0v7.5h6.5v1.17L13.67 13H18V5.75H6Z" />
    </svg>
  ),
  'Paid Advertising': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 15.75V8.25A2.25 2.25 0 0 1 6.25 6h4.5v2H6.25a.25.25 0 0 0-.25.25v7.5a.25.25 0 0 0 .25.25h4.5v2h-4.5A2.25 2.25 0 0 1 4 15.75Zm10-8.5h3.25A2.75 2.75 0 0 1 20 10v4a2.75 2.75 0 0 1-2.75 2.75H14v-2h3.25A.75.75 0 0 0 18 14v-4a.75.75 0 0 0-.75-.75H14v-2Zm-2.75 2h2.5v6h-2.5v-6Z" />
    </svg>
  ),
  'Content Creation': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4.75A1.75 1.75 0 0 1 6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v14.5A1.75 1.75 0 0 1 17.25 21H6.75A1.75 1.75 0 0 1 5 19.25V4.75Zm2 0v14.5h10.5V4.75H7Zm1.75 2.25h7v2h-7v-2Zm0 4h7v2h-7v-2Zm0 4h4.5v2H8.75v-2Z" />
    </svg>
  ),
  Analytics: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19h14v2H3V3h2v16Zm3-2V9h3v8H8Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z" />
    </svg>
  ),
  'Automation & CRM': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.5 3.75A1.75 1.75 0 0 1 9.25 2h5.5a1.75 1.75 0 0 1 1.75 1.75V6h1.75A1.75 1.75 0 0 1 20 7.75v2.5A1.75 1.75 0 0 1 18.25 12H13v2h4.25A1.75 1.75 0 0 1 19 15.75v2.5A1.75 1.75 0 0 1 17.25 20H6.75A1.75 1.75 0 0 1 5 18.25v-2.5A1.75 1.75 0 0 1 6.75 14H11v-2H5.75A1.75 1.75 0 0 1 4 10.25v-2.5A1.75 1.75 0 0 1 5.75 6H7.5V3.75ZM9.5 4v2h5V4h-5Zm-3.75 4v2h12.5V8h-12.5Zm.5 6v2h11.5v-2H6.25Zm3.75 4v2h4v-2h-4Z" />
    </svg>
  ),
  'Web & Technical': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.75A1.75 1.75 0 0 1 5.75 4h12.5A1.75 1.75 0 0 1 20 5.75v12.5A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V5.75Zm2 0v12.5h12.5V5.75H6Zm3.25 3.5h2L9.5 12l1.75 2.75h-2L7.75 12l1.5-2.75Zm7.75 0 1.5 2.75L16.75 15h-2l1.75-2.75L14.75 9.25Z" />
    </svg>
  ),
}

const serviceIcons = {
  'Social Media Strategy': skillIcons['Social Media'],
  'Meta Ads': skillIcons['Paid Advertising'],
  'Google Ads': <SkillItemIcon name="Google Ads" />,
  'Content Creation': skillIcons['Content Creation'],
  'AI-Assisted Content': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.75 13.7 8.2 18 9.9l-4.3 1.7L12 16l-1.7-4.4L6 9.9l4.3-1.7L12 3.75Z" />
      <path d="M18.8 13.2l.9 2.2 2.2.9-2.2.9-.9 2.2-.9-2.2-2.2-.9 2.2-.9.9-2.2Z" />
      <path d="M5.2 14.5l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7Z" />
    </svg>
  ),
  'CRM & Automation': (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h4A1.5 1.5 0 0 1 11 7.5v4A1.5 1.5 0 0 1 9.5 13h-4A1.5 1.5 0 0 1 4 11.5v-4Z" />
      <path d="M13 5.5A1.5 1.5 0 0 1 14.5 4h5A1.5 1.5 0 0 1 21 5.5v5A1.5 1.5 0 0 1 19.5 12h-5A1.5 1.5 0 0 1 13 10.5v-5Z" />
      <path d="M13 14.5A1.5 1.5 0 0 1 14.5 13h5A1.5 1.5 0 0 1 21 14.5v5A1.5 1.5 0 0 1 19.5 21h-5A1.5 1.5 0 0 1 13 19.5v-5Z" />
      <path d="M9 9h4M11 7v4M9.5 13.5 13.5 14.5M15.5 12.5l-2 2M16 16v1.5" />
    </svg>
  ),
}

function useTypewriterSequence(words, active, options = {}) {
  const { durationMs = 3000, holdMs = 900, loop = true } = options
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    if (!active) {
      setText('')
      setWordIndex(0)
      setCharIndex(0)
      setComplete(false)
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const currentWord = words[wordIndex] ?? ''

    if (prefersReducedMotion) {
      setText(words[0] ?? '')
      setComplete(true)
      return undefined
    }

    if (charIndex < currentWord.length) {
      const intervalMs = Math.max(35, Math.round(durationMs / Math.max(currentWord.length, 1)))
      const timer = window.setTimeout(() => {
        const nextIndex = Math.min(currentWord.length, charIndex + 1)
        setCharIndex(nextIndex)
        setText(currentWord.slice(0, nextIndex))
        if (nextIndex >= currentWord.length && !loop) {
          setComplete(true)
        } else {
          setComplete(false)
        }
      }, intervalMs)

      return () => window.clearTimeout(timer)
    }

    if (!loop) {
      setComplete(true)
    }

    if (!loop && wordIndex === words.length - 1) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setWordIndex((current) => (current + 1) % words.length)
      setCharIndex(0)
      setText('')
      setComplete(false)
    }, holdMs)

    return () => window.clearTimeout(timer)
  }, [active, charIndex, durationMs, holdMs, loop, wordIndex, words])

  return { text, complete }
}

function App() {
  const [introReady, setIntroReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingStep, setLoadingStep] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const heroActive = introReady && !loading
  const reviewsTrackRef = useRef(null)
  const { text: typedName, complete: nameComplete } = useTypewriterSequence(heroNameSequence, heroActive, {
    durationMs: 1500,
    holdMs: 1200,
    loop: false,
  })
  const { text: typedRole } = useTypewriterSequence(heroRoleSequence, heroActive, {
    durationMs: 1500,
    holdMs: 700,
    loop: true,
  })

  const slideReviews = (direction) => {
    const node = reviewsTrackRef.current
    if (!node) return

    const firstCard = node.querySelector('.review-card')
    const gapValue = window.getComputedStyle(node).gap || '0px'
    const gap = Number.parseFloat(gapValue) || 0
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : Math.max(320, Math.round(node.clientWidth * 0.7))
    const step = cardWidth + gap
    const maxScroll = Math.max(0, node.scrollWidth - node.clientWidth)
    const current = node.scrollLeft

    if (direction > 0 && current >= maxScroll - 4) {
      node.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    if (direction < 0 && current <= 4) {
      node.scrollTo({ left: maxScroll, behavior: 'smooth' })
      return
    }

    const nextPosition = Math.max(0, Math.min(maxScroll, current + step * direction))
    node.scrollTo({ left: nextPosition, behavior: 'smooth' })
  }

  const getReviewInitials = (name) =>
    name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIntroReady(true))

    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    let stepIndex = 0
    const stepTimer = window.setInterval(() => {
      stepIndex = (stepIndex + 1) % 4
      setLoadingStep(stepIndex)
    }, 240)

    const doneTimer = window.setTimeout(() => setLoading(false), 1100)

    return () => {
      window.clearInterval(stepTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  useEffect(() => {
    if (!navOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setNavOpen(false)
    }

    const onResize = () => {
      if (window.innerWidth > 768) setNavOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [navOpen])

  const closeNav = () => setNavOpen(false)

  return (
    <div className="page-shell">
      <Cursor />
      <LoadingIntro
        active={loading}
        step={loadingStep}
        label={loadingIntro.label}
        words={loadingIntro.words}
      />
      <ScrollOrb />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient ambient-c" aria-hidden="true" />

      <header className={`topbar ${navOpen ? 'topbar-menu-open' : ''}`}>
        <div className="topbar-row">
          <a
            className="brand"
            href="#top"
            aria-label={`${profile.name} portfolio home`}
            data-cursor="hover"
            onClick={closeNav}
          >
            <span className="brand-mark">
              <Avatar alt={profile.avatarAlt} decorative />
            </span>
            <span className="brand-copy">
              <strong>{profile.name}</strong>
              <small>{profile.tagline}</small>
            </span>
          </a>

          <button
            type="button"
            className={`nav-toggle ${navOpen ? 'is-active' : ''}`}
            aria-expanded={navOpen}
            aria-controls="primary-nav"
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>

        {navOpen ? (
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={closeNav}
          />
        ) : null}

        <nav
          id="primary-nav"
          className={`nav-links ${navOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <div className="nav-drawer-head">
            <span className="nav-drawer-label">Menu</span>
            <button
              type="button"
              className="nav-close"
              aria-label="Close menu"
              onClick={closeNav}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <Reveal className="hero-copy">
            <div className={`hero-statement ${heroActive ? 'is-visible' : ''}`}>
              <p className="intro-kicker">{heroCopy.kicker}</p>
              <h1 className="typewriter-line typewriter-name" aria-label={profile.name}>
                <span className="typewriter-text" aria-hidden="true">
                  {typedName}
                </span>
                {heroActive && !nameComplete ? (
                  <span className="typewriter-cursor is-visible" aria-hidden="true">
                    |
                  </span>
                ) : null}
              </h1>
              <p className="intro-role typewriter-line" aria-label={profile.title}>
                <span className="typewriter-gradient" aria-hidden="true">
                  {typedRole}
                </span>
                <span
                  className={`typewriter-cursor typewriter-cursor-role ${heroActive ? 'is-visible' : ''}`}
                  aria-hidden="true"
                >
                  |
                </span>
              </p>
            </div>
            <p className="lead">{heroCopy.lead}</p>

            <div className="hero-actions">
              <Button href="#work">{heroCopy.ctaPrimary}</Button>
              <Button href="#contact" variant="ghost">
                {heroCopy.ctaSecondary}
              </Button>
            </div>

            <ul className="hero-roles" aria-label="Core specialties">
              {heroRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="hero-panel" delay={0.12} data-cursor="hover">
            <div className="hero-card glass">
              <div className="hero-card-top">
                <span className="status-dot" />
                {profile.availability}
              </div>

              <div className="portrait-frame">
                <div className="portrait-orb portrait-orb-a" aria-hidden="true" />
                <div className="portrait-orb portrait-orb-b" aria-hidden="true" />
                <Avatar className="portrait-image" alt={profile.avatarAlt} />
              </div>

              <div className="hero-card-content">
                <p className="card-kicker">{heroCopy.cardKicker}</p>
                <p className="card-copy">{heroCopy.cardCopy}</p>
              </div>

              <div className="hero-pills">
                {heroCopy.pills.map((pill) => (
                  <span key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section" id="about">
          <SectionHeading {...sections.about} />

          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <Reveal
                key={card.kicker}
                className="glass info-card"
                delay={0.05 + index * 0.05}
                data-cursor="hover"
              >
                <p className="card-kicker">{card.kicker}</p>
                <p>{card.copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="results">
          <SectionHeading {...sections.results} />

          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <Reveal
                className="glass metric-card"
                key={metric.label}
                delay={index * 0.05}
                direction="up"
              >
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-note">{metric.note}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading {...sections.skills} />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                className="glass skill-card"
                delay={index * 0.04}
                direction={index % 2 === 0 ? 'left' : 'right'}
                data-cursor="hover"
              >
                <div className="skill-heading">
                  <span className="skill-icon" aria-hidden="true">
                    {skillIcons[group.title]}
                  </span>
                  <p className="skill-title">{group.title}</p>
                </div>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">
                      <span className="skill-tag-icon" aria-hidden="true">
                        <SkillItemIcon name={item} />
                      </span>
                      <span className="skill-tag-label">{item}</span>
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="journey">
          <SectionHeading {...sections.journey} />

          <div className="journey-shell">
            <div className="journey-rail" aria-hidden="true">
              <span className="journey-line" />
            </div>

            <div className="timeline">
              {timeline.map((item, index) => (
                <Reveal
                  className={`timeline-item timeline-item-${index % 2 === 0 ? 'left' : 'right'}`}
                  key={`${item.title}-${item.period}`}
                  delay={index * 0.08}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  data-cursor="hover"
                >
                  <div className="timeline-dot" />
                  <div className="glass timeline-card">
                    <p className="timeline-year">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-location">{item.location}</p>
                    <p>{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certificates">
          <SectionHeading {...sections.certificates} />

          <div className="certificates-grid">
            {certificates.map((certificate, index) => (
              <Reveal
                key={certificate.title}
                className="glass certificate-card"
                delay={index * 0.08}
                direction="up"
                data-cursor="hover"
              >
                <div className="certificate-top">
                  <p className="certificate-year">{certificate.year}</p>
                  <span className="certificate-chip">Certificate</span>
                </div>
                <h3>{certificate.title}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
                <p>{certificate.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <SectionHeading {...sections.services} />

          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal
                className="glass service-card"
                key={service.title}
                delay={index * 0.04}
                direction={index % 2 === 0 ? 'left' : 'right'}
                data-cursor="hover"
              >
                <div className="service-heading">
                  <span className="service-icon" aria-hidden="true">
                    {serviceIcons[service.title]}
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <SectionHeading {...sections.work} />

          <div className="work-grid">
            {workItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <a
                  className="glass work-card work-link-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                >
                  <div className="work-visual">
                    <img
                      className="work-preview-image"
                      src={item.preview}
                      alt={item.previewAlt}
                      loading="lazy"
                      style={{ objectPosition: item.previewPosition }}
                    />
                    <div className="work-hover-overlay" aria-hidden="true">
                      <span className="work-hover-eye" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </span>
                    </div>
                    <span className={`work-badge work-badge-${index % 3}`}>{item.type}</span>
                  </div>
                  <div className="work-copy">
                    <div>
                      <p className="work-meta">{item.meta}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="reviews">
          <SectionHeading {...sections.reviews} />

          <div className="reviews-shell glass">
            <div className="reviews-window">
              <div className="reviews-track" ref={reviewsTrackRef}>
                {reviews.map((review, index) => (
                  <article
                    key={`${review.name}-${review.role}`}
                    className="glass review-card"
                    data-cursor="hover"
                  >
                    <div className="review-card-top">
                      <span className="review-avatar" aria-hidden="true">
                        {getReviewInitials(review.name)}
                      </span>
                      <span className="review-badge">{String(index + 1).padStart(2, '0')}</span>
                      <span className="review-stars" aria-hidden="true">
                        ★★★★★
                      </span>
                    </div>
                    <p className="review-quote">"{review.quote}"</p>
                    <div className="review-footer">
                      <strong className="review-name">{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="reviews-controls" aria-label="Review slider controls">
              <button
                type="button"
                className="reviews-arrow"
                aria-label="Previous review"
                onClick={() => slideReviews(-1)}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                type="button"
                className="reviews-arrow"
                aria-label="Next review"
                onClick={() => slideReviews(1)}
              >
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <Reveal className="contact-shell glass">
            <div className="contact-intro">
              <p className="eyebrow">{sections.contact.eyebrow}</p>
              <h2>{sections.contact.title}</h2>
              <p className="contact-copy">{sections.contact.description}</p>

              <div className="contact-support">
                <p className="contact-support-title">{sections.contact.supportTitle}</p>
                <ul className="contact-support-points">
                  {sections.contact.supportPoints.map((point) => (
                    <li key={point} className="contact-support-point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="contact-highlights">
                {contactHighlights.map((item) => (
                  <li key={item.label} className="contact-highlight">
                    <span className="contact-highlight-label">{item.label}</span>
                    <span className="contact-highlight-value">{item.value}</span>
                  </li>
                ))}
              </ul>

              <div className="contact-cta-row">
                <Button href={`mailto:${profile.email}`}>Send an email</Button>
                <Button href={profile.linkedin} variant="ghost">
                  LinkedIn profile
                </Button>
              </div>
            </div>

            <div className="contact-channels">
              <div className="contact-channels-head">
                <p className="contact-channels-kicker">{sections.contact.channelsKicker}</p>
                <p className="contact-channels-note">{sections.contact.channelsNote}</p>
              </div>

              <div className="social-links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`social-link social-link-${link.type}`}
                    data-cursor="hover"
                  >
                    <span className="social-icon" aria-hidden="true">
                      {socialIcons[link.type]}
                    </span>
                    <span className="social-copy">
                      <strong>{link.label}</strong>
                      <small>{link.note}</small>
                    </span>
                    <span className="social-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  )
}

export default App
