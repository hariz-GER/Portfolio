const BriefcaseIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
)

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrapper">
        <div className="section-tag">Career</div>
        <h2 className="section-title">Professional Experience</h2>
        <div className="divider" />
        <div className="timeline">

          <div className="timeline-item reveal">
            <div className="timeline-dot">💼</div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Frontend Developer</div>
                  <div className="timeline-company">
                    <BriefcaseIcon />
                    Bizmagnets.ai — Chennai
                  </div>
                </div>
                <span className="timeline-period timeline-current">Apr 2025 — Present</span>
              </div>
              <ul className="timeline-list">
                <li>Developed enterprise SaaS applications using React.js, TypeScript, Next.js, and modern component architecture.</li>
                <li>Integrated Shopify, Razorpay, Zoho CRM, WooCommerce, Google Sheets, Shiprocket, OpenAI, and WhatsApp Business APIs.</li>
                <li>Built reusable UI components and scalable state management using Redux Toolkit.</li>
                <li>Developed real-time communication workflows using Socket.IO and Meta WhatsApp APIs.</li>
                <li>Managed Git workflows, Jenkins CI/CD pipelines, and delivered 70% of major production features.</li>
              </ul>
              <div className="tech-stack">
                {[
                  ['React.js', 'tag-cyan'], ['TypeScript', 'tag-purple'], ['Next.js', 'tag-cyan'],
                  ['Socket.IO', 'tag-green'], ['Redux Toolkit', 'tag-orange'], ['Jenkins CI/CD', 'tag-pink'],
                ].map(([text, cls]) => (
                  <span key={text} className={`skill-tag ${cls}`} style={{ fontSize: '0.7rem' }}>{text}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-dot">🎓</div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">Frontend Trainee</div>
                  <div className="timeline-company">
                    <BriefcaseIcon />
                    Livewire — Chennai
                  </div>
                </div>
                <span className="timeline-period">Jul 2024 — Dec 2024</span>
              </div>
              <ul className="timeline-list">
                <li>Built full-stack applications using Django, JavaScript, HTML, CSS, and MySQL.</li>
                <li>Worked with REST APIs, SQL optimization, and microservice-based architectures.</li>
                <li>Applied OOP principles, debugging, testing, and Git-based development workflows.</li>
              </ul>
              <div className="tech-stack">
                {[
                  ['Django', 'tag-green'], ['JavaScript', 'tag-purple'],
                  ['MySQL', 'tag-pink'], ['REST APIs', 'tag-orange'],
                ].map(([text, cls]) => (
                  <span key={text} className={`skill-tag ${cls}`} style={{ fontSize: '0.7rem' }}>{text}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
