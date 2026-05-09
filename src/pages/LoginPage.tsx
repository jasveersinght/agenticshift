import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-typing-on-laptop-1580/mp4'

export default function LoginPage() {
  const [tab, setTab] = useState<'student' | 'parent'>('student')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) { setError('Please fill in all fields.'); return }
    localStorage.setItem('as_token', 'demo_token_2026')
    localStorage.setItem('as_role', tab)
    localStorage.setItem('as_name', tab === 'student' ? 'Arjun Sharma' : 'Mr. Sharma')
    navigate(tab === 'student' ? '/dashboard/student' : '/dashboard/parent')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0d0d0d',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    padding: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Blurred bg video */}
      <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'blur(8px)', zIndex: 0 }} src={VIDEO_URL} poster="/fallback.jpg" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.7)', zIndex: 1 }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '440px', padding: '0 24px' }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="logo-wordmark" style={{ fontSize: '24px', color: '#fff' }}>AgenticShift</span>
          </div>
        </Link>

        <div style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px 40px' }}>
          <h1 style={{ fontSize: '36px', color: '#fff', marginBottom: '32px', textAlign: 'center', textTransform: 'none' }}>
            Welcome back.
          </h1>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '36px' }}>
            {(['student', 'parent'] as const).map(t => (
              <button
                key={t}
                id={`tab-${t}`}
                onClick={() => { setTab(t); setError('') }}
                style={{
                  flex: 1,
                  background: 'none',
                  border: 'none',
                  borderBottom: tab === t ? '2px solid #fff' : '2px solid transparent',
                  color: tab === t ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontFamily: 'var(--font-headline)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  marginBottom: '-1px',
                }}
              >
                {t === 'student' ? 'Student' : 'Parent'}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label className="label-tag" style={{ marginBottom: '8px' }}>
                Email
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{ ...inputStyle }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
            </div>
            <div>
              <label className="label-tag" style={{ marginBottom: '8px' }}>
                Password
              </label>
              <input
                id="login-password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{ ...inputStyle }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
            </div>

            {error && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#ff6b6b', marginTop: '-4px' }}>{error}</p>
            )}

            <button
              id="login-submit"
              type="submit"
              className="btn-primary"
              style={{ width: '100%', padding: '16px', marginTop: '8px' }}
            >
              Log In
            </button>
          </form>

          <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '12px', marginTop: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Forgot password?</a>
          </p>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '32px' }}>
          New here?{' '}
          <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Register for Bootcamp 1.0 — Free →
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
