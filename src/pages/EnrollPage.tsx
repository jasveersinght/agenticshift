import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { openRazorpayCheckout } from '../utils/razorpay'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-typing-on-laptop-1580/mp4'

export default function EnrollPage() {
  const [enrolled, setEnrolled] = useState(false)
  const navigate = useNavigate()

  const handleEnroll = (amount: number, planName: string) => {
    openRazorpayCheckout({
      amount,
      planName,
      onSuccess: () => {
        setEnrolled(true)
        setTimeout(() => {
          const role = localStorage.getItem('as_role') || 'student'
          navigate(role === 'student' ? '/dashboard/student' : '/dashboard/parent')
        }, 3000)
      }
    })
  }

  if (enrolled) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '40px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '32px', color: '#fff', marginBottom: '16px' }}>You're enrolled.</h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>Bootcamp details will be sent to your email within 24 hours.</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflowX: 'hidden' }}>
      <video autoPlay muted loop playsInline style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.08, filter: 'blur(8px)', zIndex: 0 }} src={VIDEO_URL} />
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(8,8,8,0.7)', zIndex: 1 }} />
      
      <div style={{ position: 'relative', zIndex: 2, padding: '64px 24px', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', marginBottom: '48px' }}>
          <span className="logo-wordmark" style={{ fontSize: '24px', color: '#fff' }}>AgenticShift</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '48px', color: '#fff', textTransform: 'none', marginBottom: '16px' }}>Choose your plan.</h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Both plans include full 7-day CS Bootcamp 2.0 access and the Day 7 Intelligence Web-Map Assessment.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px', width: '100%' }}>
          {/* BASIC */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '8px' }}>BASIC</h2>
            <div style={{ fontFamily: 'var(--font-headline)', fontSize: '48px', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>₹1,000</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, marginBottom: '40px' }}>
              {['Full 7-Day CS Bootcamp 2.0', 'Day 7 Web-Map Assessment', '2-page Career Alignment Report', 'Dispatched within 3 days of completion'].map((f, i) => (
                <div key={i} style={{ fontSize: '15px', color: 'var(--text-secondary)', display: 'flex', gap: '12px' }}>
                  <span style={{ color: '#fff' }}>✓</span> {f}
                </div>
              ))}
            </div>

            <button className="btn-ghost" style={{ width: '100%', textAlign: 'center' }} onClick={() => handleEnroll(1000, 'Basic')}>
              ENROL — BASIC ₹1,000
            </button>
          </motion.div>

          {/* PREMIUM */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.25)', padding: '48px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '8px' }}>PREMIUM</h2>
            <div style={{ fontFamily: 'var(--font-headline)', fontSize: '48px', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>₹1,500</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, marginBottom: '40px' }}>
              {['Everything in Basic', 'Comprehensive 5-page Career Alignment Report', '25-min 1:1 call with CS industry expert', 'Expert explains your Web-Map results personally', 'Offered after report dispatch — value first.'].map((f, i) => (
                <div key={i} style={{ fontSize: '15px', color: 'var(--text-secondary)', display: 'flex', gap: '12px' }}>
                  <span style={{ color: 'var(--purple)' }}>✓</span> {f}
                </div>
              ))}
            </div>

            <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={() => handleEnroll(1500, 'Premium')}>
              ENROL — PREMIUM ₹1,500
            </button>
          </motion.div>
        </div>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', marginTop: '32px', maxWidth: '600px' }}>
          The Premium 1:1 expert call is scheduled after your report is dispatched — not during the bootcamp. This keeps the incentive clean.
        </p>
      </div>
    </div>
  )
}
