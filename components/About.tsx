const cards = [
  { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu' },
  { icon: '💼', label: 'Status', value: 'Available', style: { color: 'var(--green)' } },
  { icon: '🎯', label: 'Specialization', value: 'Frontend + AI Apps' },
  { icon: '⚡', label: 'Focus', value: 'SaaS & Real-time' },
  { icon: '📧', label: 'Email', value: 'hariharan.ganesan.dev@gmail.com', style: { fontSize: '0.78rem' } },
  { icon: '🎓', label: 'Education', value: 'B.Sc. Physics, 2023' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-wrapper">
        <div className="section-tag">About Me</div>
        <h2 className="section-title">
          Crafting Digital<br />Experiences That Matter
        </h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              I&apos;m a <strong>Software Engineer and Frontend Developer</strong> based in Chennai,
              Tamil Nadu, with a passion for building scalable, production-grade applications
              that solve real-world problems.
            </p>
            <p>
              At <strong>Bizmagnets.ai</strong>, I develop enterprise SaaS products used by real
              customers — integrating complex systems like WhatsApp Business APIs, Shopify,
              Razorpay, and AI services into seamless user experiences.
            </p>
            <p>
              My background in <strong>Physics</strong> (Loyola College, Chennai) gives me a unique
              analytical mindset — I approach engineering challenges systematically, always
              thinking about performance, scalability, and maintainability.
            </p>
            <p>
              Beyond work, I build AI-powered tools — from RAG document assistants to
              intelligent job recommendation systems — driven by a genuine fascination with
              how AI is reshaping software.
            </p>
          </div>
          <div className="about-cards reveal-right">
            {cards.map(({ icon, label, value, style }) => (
              <div key={label} className="info-card">
                <div className="info-card-icon">{icon}</div>
                <div className="info-card-title">{label}</div>
                <div className="info-card-value" style={style}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
