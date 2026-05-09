import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

interface SidebarProps {
  role: 'student' | 'parent'
  activeItem: string
}

const studentNav = ['Dashboard', 'My Bootcamp', 'My Web-Map', 'Career Report', 'Resources', 'Settings']
const parentNav = ['Overview', "Child's Progress", 'Intelligence Web-Map', 'Career Report', 'Billing & Plan', 'Settings']

export default function DashboardSidebar({ role, activeItem }: SidebarProps) {
  const navigate = useNavigate()
  const name = localStorage.getItem('as_name') || (role === 'student' ? 'Arjun Sharma' : 'Mr. Sharma')
  const navItems = role === 'student' ? studentNav : parentNav

  const handleLogout = () => {
    localStorage.removeItem('as_token')
    localStorage.removeItem('as_role')
    localStorage.removeItem('as_name')
    navigate('/login')
  }

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: '240px',
        minHeight: '100vh',
        background: '#0a0a0a',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0, left: 0, bottom: 0,
        zIndex: 50,
      }}
    >
      {/* Logo + User */}
      <div style={{ padding: '28px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo-wordmark" style={{ fontSize: '14px', color: '#fff', display: 'block', marginBottom: '20px' }}>
            AgenticShift
          </span>
        </Link>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginBottom: '8px' }}>
          {name}
        </div>
        <span style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'rgba(127,119,221,0.9)',
          border: '1px solid rgba(127,119,221,0.3)',
          padding: '3px 8px',
          display: 'inline-block',
        }}>
          CS Stream
        </span>
      </div>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: '16px 0' }}>
        {navItems.map(item => {
          const isActive = item === activeItem
          return (
            <div
              key={item}
              style={{
                padding: '11px 24px',
                fontFamily: 'var(--font-headline)',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                borderLeft: isActive ? '2px solid #fff' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >
              {item}
            </div>
          )
        })}
      </nav>

      {/* Logout */}
      <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          id="logout-btn"
          onClick={handleLogout}
          style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-headline)',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            cursor: 'pointer', transition: 'color 0.2s', padding: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
        >
          Log out →
        </button>
      </div>
    </motion.div>
  )
}
