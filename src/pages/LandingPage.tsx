import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import RadarChart from '../components/RadarChart'
import { openRazorpayCheckout } from '../utils/razorpay'

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-typing-on-laptop-1580/mp4' // Using same video as fallback

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar />

      {/* SECTION 1: HERO */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} src={VIDEO_URL} poster="/fallback.jpg" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: '1000px' }}>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="label-tag" style={{ color: 'var(--text-secondary)' }}>
            INDIA'S FIRST AI DIRECTIONAL INTELLIGENCE PROGRAM
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontSize: 'clamp(60px, 8vw, 88px)', color: '#fff', marginBottom: '24px' }}>
            Shift to the future.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
            style={{ fontSize: '22px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px' }}>
            7 days. One stream. A scientific map of where your CS aptitude actually points.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a href="/login" className="btn-ghost">
              Explore Bootcamp 1.0 — Free
            </a>
            <a href="#model" className="btn-primary">
              See Bootcamp 2.0
            </a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.75 }}
            style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Class 11 &amp; 12 · CS Stream · Chennai · Kolkata · Raipur
          </motion.p>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </section>

      {/* SECTION 2: THE NUMBERS */}
      <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="section-inner grid-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
          {[
            { label: 'Bootcamp 1.0', val: 'FREE' },
            { label: 'Days, Bootcamp 2.0', val: '7' },
            { label: 'CS Career Branches Explored', val: '6' },
            { label: 'Bootcamp 2.0 starts from', val: '₹1,000' },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '32px 24px' }}>
                <div style={{ fontFamily: 'var(--font-headline)', fontSize: '56px', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '12px' }}>{stat.val}</div>
                <div className="label-tag" style={{ marginBottom: 0 }}>{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 3: WHAT IS AGENTICSHIFT */}
      <section id="about" className="section-pad">
        <div className="section-inner grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: '56px', color: '#fff', textTransform: 'none' }}>
              Not a coding class.<br />A direction finder.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
              AgenticShift is India's first AI Directional Intelligence Program for Class 11 &amp; 12 CS students. We run a 7-day live career simulation across 6 major branches of Computer Science — AI &amp; Data Science, Cyber Security, Cloud &amp; Infrastructure, Blockchain &amp; Web3, Product Development, and ML Engineering. Every student who completes Bootcamp 2.0 receives a personalised Career Alignment Report with an Intelligence Web-Map showing exactly which CS branch their aptitude points toward. The product is not the bootcamp. The product is the report.
            </p>
            <hr className="hr-rule" style={{ marginBottom: '24px' }} />
            <a href="#streams" style={{ fontFamily: 'var(--font-headline)', fontSize: '14px', fontWeight: 700, color: '#fff', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Our Philosophy →
            </a>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 4: CS STREAM — THE ENGINEER'S CIRCUIT */}
      <section id="streams" className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="section-inner">
          <ScrollReveal><span className="label-tag">THE CS STREAM</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '64px', marginBottom: '24px' }}>
              <span className="label-tag" style={{ color: 'var(--text-secondary)' }}>FOUNDING STREAM · CS / SCIENCE</span>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 56px)', marginBottom: '32px' }}>The Engineer's Circuit</h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
                {['AI & Data Science', 'Cyber Security', 'Cloud & Infrastructure', 'Blockchain & Web3', 'Product Development', 'ML Engineering'].map(tag => (
                  <span key={tag} style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '8px 16px', fontSize: '13px', fontFamily: 'var(--font-body)', color: '#fff' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '800px', marginBottom: '40px' }}>
                6 career branches. 6 live simulations. One Intelligence Web-Map. One clear answer: which branch of CS are you actually built for?
              </p>
              <a href="#model" className="btn-primary">Explore the CS Curriculum →</a>
            </div>
            <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              Commerce, Humanities, and Biotech streams are in future roadmap — launching only once the CS stream has proven operational maturity and verified domain facilitators are secured for each new stream.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 5: TWO BOOTCAMPS */}
      <section id="bootcamp" className="section-pad">
        <div className="section-inner">
          <ScrollReveal><span className="label-tag">THE MODEL</span></ScrollReveal>
          <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.1)' }}>
            <ScrollReveal>
              <div style={{ background: 'var(--surface-alt)', padding: '64px', height: '100%' }}>
                <div style={{ fontSize: '56px', fontWeight: 700, fontFamily: 'var(--font-headline)', color: '#fff', marginBottom: '16px' }}>FREE</div>
                <h3 style={{ fontSize: '32px', marginBottom: '12px' }}>The Discovery Sprint</h3>
                <p className="label-tag" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>3 Days · No-Code · CS Stream</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                  <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 1:</strong> AI Model Landscape — Claude, Gemini, GPT-4o, Sarvam AI. Hallucination red-team drill.</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 2:</strong> Agentic Systems &amp; Prompt Engineering — Cursor, Bolt.new, Windsurf.</div>
                  <div style={{ fontSize: '15px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 3:</strong> Portfolio Sprint — Deploy your first site on Bolt.new or Framer.</div>
                </div>
                <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600, marginBottom: '40px' }}>Outcome: Portfolio website + AI model fluency. A real artefact you own.</p>
                <a href="/login" className="btn-primary">Register for Free →</a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div id="model" style={{ background: 'var(--surface-alt)', padding: '64px', height: '100%' }}>
                <div style={{ fontSize: '56px', fontWeight: 700, fontFamily: 'var(--font-headline)', color: '#fff', marginBottom: '16px' }}>₹1,000 / ₹1,500</div>
                <h3 style={{ fontSize: '32px', marginBottom: '12px' }}>Career Simulation + Intelligence Assessment</h3>
                <p className="label-tag" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>7 Days · CS Stream · Live Cohort</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 1:</strong> AI &amp; Data Science — Julius AI · Dataset insight sprint</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 2:</strong> Cyber Security — Hack The Box · Incident Response Report</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 3:</strong> Cloud &amp; Infrastructure — Vercel · Deploy + build log analysis</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 4:</strong> Blockchain &amp; Web3 — Thirdweb · Deploy a Class Token</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 5:</strong> Product Development — v0.dev + Claude · UI mockup + PRD</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 6:</strong> ML Engineering — Hugging Face · Model Failure Report</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}><strong style={{ color: '#fff' }}>Day 7:</strong> Intelligence Web-Map Assessment</div>
                </div>
                <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600, marginBottom: '40px' }}>Outcome: Career Alignment Report dispatched 3 days after Day 7</p>
                <a href="/register" className="btn-ghost">Enrol in Bootcamp 2.0 →</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 6: THE 6 CS DOMAINS */}
      <section className="section-pad">
        <div className="section-inner">
          <ScrollReveal><span className="label-tag">6 BRANCHES. 6 DAYS. ONE CLEAR ANSWER.</span></ScrollReveal>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { branch: 'AI & Data Science', persona: 'Ram — The Data Intelligence Analyst', tool: 'Julius AI', reality: 'In 2026, you load 10,000 rows into Julius AI and get publication-quality charts in 5 minutes. The skill is the question, not the function.' },
              { branch: 'Cyber Security', persona: 'Kabir — The Digital Detective', tool: 'Hack The Box', reality: 'Most real security work is reading logs and communicating findings clearly. The best analysts are meticulous readers, not just coders.' },
              { branch: 'Cloud & Infrastructure', persona: 'Sneha — The Invisible Architect', tool: 'Vercel', reality: 'In 2026, Sneha provisions a global server in Singapore with 3 clicks. What required a DevOps team takes 8 minutes.' },
              { branch: 'Blockchain & Web3', persona: 'Dev — The Trust Architect', tool: 'Thirdweb', reality: 'Every major Indian bank now has a blockchain unit. The smart-contract engineer earns 40% more than a standard backend developer.' },
              { branch: 'Product Development', persona: 'Ananya — The Product Builder', tool: 'v0.dev + Claude', reality: 'A sharp 17-year-old with a clear problem statement, a v0.dev prototype, and a 1-page PRD can walk into a startup and contribute immediately.' },
              { branch: 'ML Engineering', persona: 'Priya — The Model Trainer', tool: 'Hugging Face Spaces', reality: 'The most valuable ML skill is knowing how to evaluate a model and identify failure cases — not writing neural networks from scratch.' },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ fontSize: '24px', color: '#fff', marginBottom: '8px' }}>{card.branch}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--purple)', fontFamily: 'var(--font-headline)', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '24px' }}>
                    {card.persona}
                  </p>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', flex: 1, marginBottom: '24px' }}>
                    {card.reality}
                  </p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                    <span className="label-tag" style={{ marginBottom: 0, color: 'var(--text-muted)' }}>TOOL: {card.tool}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 7: THE INTELLIGENCE WEB-MAP */}
      <section id="webmap" className="section-pad" style={{ textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <span className="label-tag">The Assessment</span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', marginBottom: '24px' }}>The Intelligence Web-Map</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '48px' }}>
              Every student who completes Bootcamp 2.0 receives a personalised Spider-Web chart mapping 7 intelligence dimensions against the 6 CS career branches they experienced firsthand over 7 days.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <RadarChart />
            <p className="label-tag" style={{ marginTop: '40px', marginBottom: '12px' }}>Dispatched 3 days after Bootcamp 2.0 ends · Sent to student &amp; parents</p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>4 Assessment Layers: Aptitude · Domain Knowledge · Creative Problem-Solving · Systems Reasoning</p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 8: CAREER ALIGNMENT REPORT */}
      <section className="section-pad">
        <div className="section-inner grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <ScrollReveal>
            <div style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.1)', padding: '48px' }}>
              <h4 style={{ fontSize: '24px', marginBottom: '24px' }}>SCIENTIFIC CAREER ALIGNMENT REPORT</h4>
              <hr className="hr-rule" />
              <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Performance Audit — Day-by-day facilitator observations', 'Interest Heatmap — Where you showed the most flow & curiosity', 'Intelligence Web-Map — 7-dimension spider chart, annotated', 'Recommended Path — 3-year roadmap: majors, skills, career trajectories'].map(item => (
                  <div key={item} style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--purple)', marginTop: '2px' }}>■</span>
                    {item}
                  </div>
                ))}
              </div>
              <hr className="hr-rule" />
              <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: '#fff', textTransform: 'uppercase', fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>Basic — ₹1,000</strong> · 2-page report · 3 days dispatch
                </div>
                <div style={{ border: '1px solid var(--purple)', padding: '12px 16px', fontSize: '12px', color: 'var(--text-primary)', background: 'var(--purple-faint)' }}>
                  <strong style={{ color: '#fff', textTransform: 'uppercase', fontFamily: 'var(--font-headline)', letterSpacing: '0.05em' }}>Premium — ₹1,500</strong> · 5-page report + 25-min expert 1:1 call
                </div>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', fontStyle: 'italic' }}>
                Premium plan offered AFTER report dispatch — value first, upgrade second.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 48px)', textTransform: 'none', marginBottom: '24px' }}>
              Clarity of direction.<br />Not just lines of code.
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Three days after Bootcamp 2.0 ends, a detailed PDF is dispatched to the student and their parents. The Premium plan adds a 25-minute 1:1 call with an industry expert in the student's recommended CS branch — not a generic call, but a conversation about why this specific student's profile points where it does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* ENROLLMENT / PAYMENT SECTION (Moved to /enroll) */}

      <hr className="hr-rule" />

      {/* SECTION 9: CITIES */}
      <section id="cities" className="section-pad">
        <div className="section-inner">
          <ScrollReveal><span className="label-tag">CITIES</span></ScrollReveal>
          <div className="grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { city: 'Chennai', desc: 'HYBRID · Primary Launch City' },
              { city: 'Kolkata', desc: 'ONLINE · LIVE ZOOM COHORT · 6–8 PM IST' },
              { city: 'Raipur', desc: 'ONLINE · HINDI-FIRST · Sarvam AI Language Support' },
            ].map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div style={{ padding: '40px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none', height: '100%' }}>
                  <h3 style={{ fontSize: '40px', marginBottom: '16px' }}>{c.city}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'var(--font-headline)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {c.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr-rule" />

      {/* SECTION 10: THE HONEST CLOSER */}
      <section className="section-pad" style={{ textAlign: 'center', background: 'var(--surface-alt)' }}>
        <div className="section-inner" style={{ maxWidth: '900px' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, marginBottom: '32px' }}>
              "ANY OTHER ONLINE PLATFORM CAN COPY A CODING TUTORIAL IN 3 MONTHS.<br/>
              IT CANNOT COPY A 7-DAY LIVE CAREER SIMULATION<br/>
              WITH A PERSONALISED INTELLIGENCE WEB-MAP."
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              The moat is the depth of the experience — and the data it generates.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '48px' }}>
              The curriculum refreshes every 6 months. The Web-Map is unique to every student.
            </p>
            <a href="/login" className="btn-primary">Start with Bootcamp 1.0 — Free</a>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '64px 0' }}>
        <div className="section-inner">
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              <span className="logo-wordmark" style={{ color: '#fff', fontSize: '14px', marginRight: '8px' }}>AGENTICSHIFT</span><br />
              India's First AI Directional Intelligence Program
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Bootcamp 1.0', 'Bootcamp 2.0', 'The Web-Map', 'Login'].map(l => (
                <a key={l} href={l === 'Login' ? '/login' : `#${l.toLowerCase().replace(/ /g, '')}`} style={{ fontFamily: 'var(--font-headline)', fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {l}
                </a>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'right' }}>
              Chennai · Kolkata · Raipur<br />
              CS Stream · May 2026
            </p>
          </div>
          <hr className="hr-rule" style={{ marginBottom: '24px' }} />
          <p className="label-tag" style={{ textAlign: 'center', marginBottom: 0 }}>
            Bootcamp 1.0: Free · Bootcamp 2.0: ₹1,000 Basic / ₹1,500 Premium
          </p>
        </div>
      </footer>
    </div>
  )
}
