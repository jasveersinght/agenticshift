import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-typing-on-laptop-1580/mp4'

export default function RegisterPage() {
  const [tab, setTab] = useState<'student' | 'parent'>('student')
  const [bootcamp, setBootcamp] = useState<'1.0' | '2.0'>('1.0')
  const navigate = useNavigate()

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Normally we'd post to backend here
    localStorage.setItem('as_token', 'demo_token_2026')
    localStorage.setItem('as_role', tab)
    localStorage.setItem('as_name', tab === 'student' ? 'Arjun Sharma' : 'Mr. Sharma')

    if (bootcamp === '2.0') {
      navigate('/enroll')
    } else {
      navigate(tab === 'student' ? '/dashboard/student' : '/dashboard/parent')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0d0d0d',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    borderRadius: 0,
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: '11px',
    fontWeight: 700,
    color: 'var(--text-muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '64px 24px' }}>
      {/* Blurred bg video */}
      <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'blur(8px)', zIndex: 0 }} src={VIDEO_URL} poster="/fallback.jpg" />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.7)', zIndex: 1 }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '540px' }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="logo-wordmark" style={{ fontSize: '24px', color: '#fff' }}>AgenticShift</span>
          </div>
        </Link>

        <div style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px' }}>
          <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '24px', textAlign: 'center', textTransform: 'none' }}>
            Create your account.
          </h1>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '32px' }}>
            {(['student', 'parent'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1, background: 'none', border: 'none',
                  borderBottom: tab === t ? '2px solid #fff' : '2px solid transparent',
                  color: tab === t ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontFamily: 'var(--font-headline)', fontSize: '13px', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px',
                  cursor: 'pointer', transition: 'all 0.2s', marginBottom: '-1px',
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tab === 'parent' && (
              <div>
                <label style={labelStyle}>Parent Full Name</label>
                <input required type="text" placeholder="e.g. Rakesh Sharma" style={inputStyle} />
              </div>
            )}
            
            <div>
              <label style={labelStyle}>{tab === 'student' ? 'Full Name' : "Child's Full Name"}</label>
              <input required type="text" placeholder={tab === 'student' ? "e.g. Arjun Sharma" : "e.g. Arjun Sharma"} style={inputStyle} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input required type="email" placeholder="you@example.com" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input required type="tel" placeholder="+91 90000 00000" style={inputStyle} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>{tab === 'student' ? 'Class' : "Child's Class"}</label>
                <select required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled selected>Select Class</option>
                  <option value="11">Class 11</option>
                  <option value="12">Class 12</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>{tab === 'student' ? 'City' : "Child's City"}</label>
                <select required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}>
                  <option value="" disabled selected>Select City</option>
                  <option value="chennai">Chennai (Offline/Hybrid)</option>
                  <option value="kolkata">Kolkata (Online)</option>
                  <option value="raipur">Raipur (Online/Hindi)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Bootcamp Toggle */}
            <div style={{ marginTop: '8px', marginBottom: '8px' }}>
              <label style={labelStyle}>{tab === 'student' ? 'Which Bootcamp?' : 'Bootcamp for Child'}</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                  <input type="radio" name="bootcamp" value="1.0" checked={bootcamp === '1.0'} onChange={() => setBootcamp('1.0')} style={{ marginTop: '4px' }} />
                  <div>
                    <div style={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>Bootcamp 1.0 — Free</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>3-Day Discovery Sprint</div>
                  </div>
                </label>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                  <input type="radio" name="bootcamp" value="2.0" checked={bootcamp === '2.0'} onChange={() => setBootcamp('2.0')} style={{ marginTop: '4px' }} />
                  <div>
                    <div style={{ fontSize: '15px', color: '#fff', fontWeight: 600 }}>Bootcamp 2.0 — ₹1,000 / ₹1,500</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>7-Day Career Simulation + Intelligence Web-Map</div>
                  </div>
                </label>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={labelStyle}>Password</label>
                <input required type="password" placeholder="••••••••" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Confirm Password</label>
                <input required type="password" placeholder="••••••••" style={inputStyle} />
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: '8px' }}>
              <input required type="checkbox" />
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>I agree to the Terms &amp; Conditions</span>
            </label>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px' }}>
              Create {tab === 'student' ? 'Student' : 'Parent'} Account
            </button>
          </form>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '24px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
            Log in →
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
