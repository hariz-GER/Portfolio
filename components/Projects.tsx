const projects = [
  {
    num: '01 — AI',
    title: 'AI Job Recommendation System',
    desc: 'An AI-powered platform that intelligently matches resumes to job listings using OpenAI and Gemini APIs, delivering compatibility scores and smart recommendations.',
    features: [
      'Resume-to-job matching with AI scoring',
      'Intelligent compatibility analysis',
      'FastAPI backend with PostgreSQL persistence',
    ],
    stack: [['React.js', 'tag-cyan'], ['FastAPI', 'tag-green'], ['PostgreSQL', 'tag-pink'], ['OpenAI', 'tag-purple']],
    glow: 'rgba(99,102,241,0.4)',
  },
  {
    num: '02 — RAG',
    title: 'RAG-Powered HR Document Q&A',
    desc: 'An end-to-end Retrieval-Augmented Generation application enabling HR teams to query policy documents using natural language with context-aware responses.',
    features: [
      'ChromaDB Cloud vector storage pipeline',
      'Document chunking & embedding workflows',
      'Gemini AI for context-aware generation',
    ],
    stack: [['Python', 'tag-purple'], ['Flask', 'tag-green'], ['ChromaDB', 'tag-cyan'], ['Gemini AI', 'tag-pink']],
    glow: 'rgba(34,211,238,0.3)',
  },
  {
    num: '03 — CHAT',
    title: 'AI Smart Chatbot Platform',
    desc: 'A production-ready AI chatbot platform supporting multi-turn conversations, persistent chat history, and real-time communication powered by Gemini AI.',
    features: [
      'Multi-turn conversation with memory',
      'Real-time workflows via WebSocket',
      'Scalable REST API architecture',
    ],
    stack: [['Next.js', 'tag-cyan'], ['Express.js', 'tag-green'], ['PostgreSQL', 'tag-pink'], ['Gemini AI', 'tag-purple']],
    glow: 'rgba(74,222,128,0.25)',
  },
  {
    num: '04 — HEALTH',
    title: 'Fitness Tracker Application',
    desc: 'A comprehensive wellness platform featuring workout tracking, BMI monitoring, and analytics dashboards with a fully responsive, data-driven interface.',
    features: [
      'Workout logging & progress tracking',
      'BMI monitoring & health analytics',
      'Responsive dashboards & data visualization',
    ],
    stack: [['MongoDB', 'tag-pink'], ['Express.js', 'tag-green'], ['React.js', 'tag-cyan'], ['Node.js', 'tag-orange']],
    glow: 'rgba(244,114,182,0.25)',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-wrapper">
        <div className="section-tag">Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="divider" />
        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.num} className="project-card reveal">
              <div className="project-glow" style={{ background: p.glow }} />
              <div className="project-num">{p.num}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="project-features">
                {p.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <div className="project-footer">
                <div className="project-stack">
                  {p.stack.map(([text, cls]) => (
                    <span key={text} className={`stack-badge ${cls}`}>{text}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
