import { useState } from 'react'
import { motion } from 'framer-motion'
import DashboardSidebar from '../components/DashboardSidebar'
import RadarChart from '../components/RadarChart'
import { openRazorpayCheckout } from '../utils/razorpay'

const days = [
  { n: 1, label: 'AI & Data Science', status: 'done' },
  { n: 2, label: 'Cyber Security', status: 'done' },
  { n: 3, label: 'Cloud & Infra', status: 'current' },
  { n: 4, label: 'Blockchain & Web3', status: 'locked' },
  { n: 5, label: 'Product Dev', status: 'locked' },
  { n: 6, label: 'ML Engineering', status: 'locked' },
  { n: 7, label: 'Assessment', status: 'locked' },
]

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: '32px',
}

export default function ParentDashboard() {
  const name = localStorage.getItem('as_name') || 'Mr. Sharma'
  // Mock basic vs premium state
  const [isPremium, setIsPremium] = useState(false)

  const handleUpgrade = () => {
    openRazorpayCheckout({
      amount: 500, // Upgrade difference
      planName: 'Premium Upgrade',
      onSuccess: () => setIsPremium(true)
    })
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <DashboardSidebar role="parent" activeItem="Overview" />

      <main style={{ marginLeft: '240px', flex: 1, padding: '48px 48px', maxWidth: 'calc(100vw - 240px)', overflowX: 'hidden' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          {/* Top bar */}
          <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <h1 style={{ fontSize: '48px', color: '#fff', marginBottom: '8px', textTransform: 'none' }}>
              Hello, {name}.
            </h1>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              Monitoring: Arjun Sharma · CS Stream · Bootcamp 2.0
            </span>
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '40px' }}>
            {[
              { label: 'Bootcamp Progress', val: 'Day 3 of 7' },
              { label: 'Stream', val: 'CS' },
              { label: 'Attendance', val: '3 / 3 sessions' },
              { label: 'Report ETA', val: '4 days' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--surface-alt)', padding: '32px' }}>
                <span className="label-tag">{s.label}</span>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '32px', fontWeight: 700, color: '#fff' }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Child's Progress */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <span className="label-tag">Child's Progress</span>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0', overflowX: 'auto', paddingBottom: '8px', marginBottom: '32px' }}>
              {days.map((day, i) => (
                <div key={day.n} style={{ flex: 1, minWidth: '90px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative' }}>
                  {i < days.length - 1 && (
                    <div style={{ position: 'absolute', top: '14px', left: '50%', width: '100%', height: '1px', background: day.status === 'done' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', zIndex: 0 }} />
                  )}
                  <div style={{ width: day.status === 'current' ? '30px' : '20px', height: day.status === 'current' ? '30px' : '20px', borderRadius: '50%', background: day.status === 'done' ? '#fff' : 'transparent', border: day.status === 'done' ? 'none' : day.status === 'current' ? '2px solid #fff' : '1px solid rgba(255,255,255,0.2)', zIndex: 1, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {day.status === 'done' && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                    {day.status === 'current' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '11px', color: day.status === 'locked' ? 'var(--text-muted)' : '#fff', textAlign: 'center', textTransform: 'uppercase' }}>Day {day.n}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>{day.label}</span>
                </div>
              ))}
            </div>

            {/* Facilitator note */}
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '20px', marginTop: '16px' }}>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '12px' }}>
                FACILITATOR OBSERVATION · DAY 2
              </span>
              <p style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '800px' }}>
                "Showed strong analytical instinct on Day 2. Identified the attack vector in the incident log before being prompted. Pay attention on Day 7."
              </p>
            </div>
          </div>

          {/* Career Alignment Report Preview */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="label-tag">Career Alignment Report Status</span>
                <h2 style={{ fontSize: '28px', color: '#fff' }}>Scientific Career Alignment Report</h2>
              </div>
              <span style={{ fontFamily: 'var(--font-headline)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--purple)', border: '1px solid rgba(127,119,221,0.25)', padding: '6px 12px', textTransform: 'uppercase' }}>
                Dispatching in 4 days
              </span>
            </div>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '800px' }}>
              The report will be dispatched 3 days after Day 7. It includes the Intelligence Web-Map (7 dimensions), Interest Heatmap, Performance Audit, and 3-year Recommended CS Path with honest trade-offs included.
            </p>
            {isPremium ? (
              <p style={{ fontSize: '14px', color: '#fff', lineHeight: 1.6, background: 'var(--purple-faint)', border: '1px solid var(--purple)', padding: '16px' }}>
                ✓ Your 25-min expert call will be scheduled after the report is reviewed.
              </p>
            ) : (
              <div style={{ background: 'var(--surface-alt)', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <span style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: '#fff' }}>Upgrade to Premium — ₹1,500</strong><br/>
                  5-page report + 25-min 1:1 with a CS industry expert →
                </span>
                <button className="btn-primary" onClick={handleUpgrade}>
                  Upgrade to Premium
                </button>
              </div>
            )}
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', fontStyle: 'italic' }}>
              Premium upgrade is offered only after the report is dispatched — not during the bootcamp.
            </p>
          </div>

          {/* Plan & Billing */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <span className="label-tag">Plan & Billing</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '16px' }}>
                  {isPremium ? 'Premium Plan · ₹1,500' : 'Basic Plan · ₹1,000'}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(isPremium
                    ? ['5-page Report', '25-min Expert Call', 'Full 7-Day CS Bootcamp Access', 'Payment: Confirmed via Razorpay']
                    : ['2-page Report', 'Full 7-Day CS Bootcamp Access', 'Upgrade available post-report', 'Payment: Confirmed via Razorpay']
                  ).map(item => (
                    <div key={item} style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--purple)' }}>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div style={{ ...cardStyle }}>
            <span className="label-tag">Contact</span>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Have a question about your child's programme?
            </p>
            <a href="mailto:hello@agenticshift.in" className="btn-ghost" style={{ marginBottom: '16px' }}>
              Message the Facilitator →
            </a>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              We respond within 4 hours during bootcamp days.
            </p>
          </div>

        </motion.div>
      </main>
    </div>
  )
}
