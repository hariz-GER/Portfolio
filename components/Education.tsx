export default function Education() {
  return (
    <section id="education">
      <div className="section-wrapper">
        <div className="section-tag">Background</div>
        <h2 className="section-title">Education</h2>
        <div className="divider" />
        <div className="edu-card reveal">
          <div className="edu-icon">🎓</div>
          <div>
            <div className="edu-degree">Bachelor of Science — Physics</div>
            <div className="edu-institution">Loyola College, Chennai</div>
            <div className="edu-period">2020 — 2023</div>
            <p style={{ color: 'var(--text2)', fontSize: '0.88rem', marginTop: '0.6rem', lineHeight: 1.6 }}>
              Analytical problem-solving and systematic thinking from a physics background —
              applied directly to building robust, scalable software systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
