import { motion } from 'framer-motion'
import DashboardSidebar from '../components/DashboardSidebar'
import RadarChart from '../components/RadarChart'

const days = [
  { n: 1, label: 'AI & Data Science', status: 'done', build: 'AI Insight Summary — Julius AI' },
  { n: 2, label: 'Cyber Security', status: 'done', build: 'Incident Response Report' },
  { n: 3, label: 'Cloud & Infra', status: 'current', build: 'Cloud Deployment + Error Analysis' },
  { n: 4, label: 'Blockchain & Web3', status: 'locked', build: null },
  { n: 5, label: 'Product Dev', status: 'locked', build: null },
  { n: 6, label: 'ML Engineering', status: 'locked', build: null },
  { n: 7, label: 'Web-Map Assessment', status: 'locked', build: null },
]

const cardStyle: React.CSSProperties = {
  background: 'var(--surface)',
  border: '1px solid rgba(255,255,255,0.08)',
  padding: '32px',
}

export default function StudentDashboard() {
  const name = localStorage.getItem('as_name') || 'Arjun Sharma'

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <DashboardSidebar role="student" activeItem="Dashboard" />

      {/* Main content */}
      <main style={{ marginLeft: '240px', flex: 1, padding: '48px 48px', maxWidth: 'calc(100vw - 240px)', overflowX: 'hidden' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          {/* Top bar */}
          <div style={{ marginBottom: '48px', paddingBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <h1 style={{ fontSize: '48px', color: '#fff', marginBottom: '8px', textTransform: 'none' }}>
              Good morning, {name.split(' ')[0]}.
            </h1>
            <span style={{ fontFamily: 'var(--font-headline)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(127,119,221,0.9)', border: '1px solid rgba(127,119,221,0.25)', padding: '4px 10px' }}>
              Bootcamp 2.0 · Day 3 of 7 · CS Stream
            </span>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '40px' }}>
            {[
              { label: 'Days Completed', val: '3 / 7' },
              { label: 'Stream', val: 'CS' },
              { label: 'Web-Map Status', val: 'Pending — Day 7' },
              { label: 'Report Status', val: 'Dispatching in 4 days' },
            ].map((s, i) => (
              <div key={i} style={{ ...cardStyle, borderRadius: 0, border: 'none', background: 'var(--surface-alt)' }}>
                <span className="label-tag">{s.label}</span>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '32px', fontWeight: 700, color: '#fff' }}>{s.val}</div>
              </div>
            ))}
          </div>

          {/* Today's Session */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <span className="label-tag">Today's Session</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '240px' }}>
                <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '8px' }}>
                  Day 3 — Cloud &amp; Infrastructure
                </h2>
                <p style={{ fontFamily: 'var(--font-headline)', fontSize: '14px', color: 'var(--purple)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Sneha — The Invisible Architect
                </p>
                <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '800px' }}>
                  Deploy a pre-built static site on Vercel. Configure an environment variable. Monitor the build log. Use AI to explain 3 error codes.
                </p>
                <a href="#" id="open-task-btn" className="btn-primary">
                  Open Today's Task →
                </a>
              </div>
              <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-headline)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em', color: '#fff' }}>IN PROGRESS</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Vercel · Netlify</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <span className="label-tag">Bootcamp Journey</span>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0', overflowX: 'auto', paddingBottom: '8px' }}>
              {days.map((day, i) => (
                <div key={day.n} style={{ flex: 1, minWidth: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative' }}>
                  {/* connector line */}
                  {i < days.length - 1 && (
                    <div style={{ position: 'absolute', top: '14px', left: '50%', width: '100%', height: '1px', background: day.status === 'done' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)', zIndex: 0 }} />
                  )}
                  <div style={{
                    width: day.status === 'current' ? '30px' : '20px',
                    height: day.status === 'current' ? '30px' : '20px',
                    borderRadius: '50%',
                    background: day.status === 'done' ? '#fff' : 'transparent',
                    border: day.status === 'done' ? 'none' : day.status === 'current' ? '2px solid #fff' : '1px solid rgba(255,255,255,0.2)',
                    zIndex: 1,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {day.status === 'done' && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    {day.status === 'current' && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                  </div>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '11px', color: day.status === 'locked' ? 'var(--text-muted)' : day.status === 'current' ? '#fff' : 'var(--text-secondary)', textAlign: 'center', letterSpacing: '0.04em', lineHeight: 1.4, textTransform: 'uppercase' }}>
                    Day {day.n}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini-Builds Portfolio */}
          <div style={{ marginBottom: '40px' }}>
            <span className="label-tag">Mini-Builds Portfolio</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
              {days.map(day => (
                <div key={day.n} style={{ background: 'var(--surface-alt)', padding: '32px 24px', opacity: day.status === 'locked' ? 0.4 : 1 }}>
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Day {day.n}</span>
                  <div style={{ fontSize: '15px', color: '#fff', marginBottom: '16px', lineHeight: 1.5 }}>
                    {day.build || `Locked`}
                  </div>
                  {day.status === 'done' && (
                    <a href="#" style={{ fontFamily: 'var(--font-headline)', fontSize: '12px', color: 'var(--text-secondary)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase' }}>View Live →</a>
                  )}
                  {day.status === 'current' && (
                    <span style={{ fontFamily: 'var(--font-headline)', fontSize: '12px', color: 'var(--purple)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>In Progress</span>
                  )}
                  {day.status === 'locked' && (
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--text-muted)' }}>Complete Day {day.n - 1} to unlock</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div style={{ ...cardStyle, marginBottom: '40px' }}>
            <span className="label-tag">Tools for Today</span>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[{ name: 'Vercel', url: 'https://vercel.com', tag: 'Primary' }, { name: 'Netlify', url: 'https://netlify.com', tag: 'Backup' }, { name: 'Claude', url: 'https://claude.ai', tag: 'AI Assist' }].map(tool => (
                <a key={tool.name} href={tool.url} target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', gap: '4px', border: '1px solid rgba(255,255,255,0.15)', padding: '16px 24px', textDecoration: 'none', transition: 'border-color 0.2s', background: 'var(--surface-alt)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
                >
                  <span style={{ fontFamily: 'var(--font-headline)', fontSize: '18px', color: '#fff' }}>{tool.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{tool.tag} · Open Tool →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Web-Map preview */}
          <div style={{ ...cardStyle }}>
            <span className="label-tag">My Intelligence Web-Map · Preview</span>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px' }}>Full map unlocks after Day 7 Assessment</p>
            <RadarChart />
          </div>

        </motion.div>
      </main>
    </div>
  )
}
