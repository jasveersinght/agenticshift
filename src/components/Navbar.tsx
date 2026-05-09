import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Bootcamp 1.0', href: '#bootcamp' },
  { label: 'Bootcamp 2.0', href: '#model' },
  { label: 'The Web-Map', href: '#webmap' },
  { label: 'Cities', href: '#cities' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 40px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, border-bottom 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo wordmark */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="logo-wordmark" style={{ fontSize: '18px', color: '#fff' }}>
          AgenticShift
        </span>
      </Link>

      {/* Desktop center nav */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden-mobile">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '12px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Desktop right CTAs */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }} className="hidden-mobile">
        <Link to="/login" className="btn-ghost" style={{ padding: '10px 20px', fontSize: '11px' }}>
          Log In
        </Link>
        <Link to="/register" className="btn-primary" style={{ padding: '10px 20px', fontSize: '11px' }}>
          Register Free
        </Link>
      </div>

      {/* Hamburger */}
      <button
        id="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        className="show-mobile"
        aria-label="Toggle menu"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '1.5px', background: '#fff',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: menuOpen
              ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
              : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(4.5px, -4.5px)'
              : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute', top: '72px', left: 0, right: 0,
              background: 'rgba(8,8,8,0.98)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              padding: '24px 40px 32px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '13px', fontWeight: 700,
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}
              >{label}</a>
            ))}
            <Link to="/login" onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-headline)', fontSize: '12px', fontWeight: 700,
              color: '#fff', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>Log In</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ textAlign: 'center' }}>
              Register Free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
