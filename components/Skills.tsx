const categories = [
  {
    icon: '🧠', label: 'Languages', color: 'var(--primary2)', bg: 'icon-bg-purple', tagClass: 'tag-purple',
    tags: ['JavaScript ES6+', 'TypeScript', 'Python'],
  },
  {
    icon: '🖥️', label: 'Frontend', color: 'var(--cyan)', bg: 'icon-bg-cyan', tagClass: 'tag-cyan',
    tags: ['React.js', 'Next.js', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    icon: '⚙️', label: 'Backend', color: 'var(--green)', bg: 'icon-bg-green', tagClass: 'tag-green',
    tags: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Microservices'],
  },
  {
    icon: '🗄️', label: 'Databases', color: 'var(--pink)', bg: 'icon-bg-pink', tagClass: 'tag-pink',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    icon: '🛠️', label: 'DevOps & Tools', color: 'var(--orange)', bg: 'icon-bg-orange', tagClass: 'tag-orange',
    tags: ['Git / GitHub', 'GitLab', 'Jenkins', 'Docker', 'CI/CD', 'Jira'],
  },
  {
    icon: '🤖', label: 'AI & Integrations', color: 'var(--primary2)', bg: 'icon-bg-purple',
    tags: [
      { text: 'OpenAI', cls: 'tag-purple' },
      { text: 'Gemini AI', cls: 'tag-purple' },
      { text: 'ChromaDB', cls: 'tag-purple' },
      { text: 'Shopify', cls: 'tag-cyan' },
      { text: 'Razorpay', cls: 'tag-cyan' },
      { text: 'WhatsApp API', cls: 'tag-green' },
      { text: 'Zoho CRM', cls: 'tag-green' },
      { text: 'Socket.IO', cls: 'tag-pink' },
    ] as { text: string; cls: string }[],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrapper">
        <div className="section-tag">Technical Skills</div>
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <div className="divider" />
        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.label} className="skill-category reveal">
              <div className="skill-cat-header">
                <div className={`skill-cat-icon ${cat.bg}`}>{cat.icon}</div>
                <div className="skill-cat-name" style={{ color: cat.color }}>{cat.label}</div>
              </div>
              <div className="skill-tags">
                {(cat.tags as (string | { text: string; cls: string })[]).map(tag => {
                  const text = typeof tag === 'string' ? tag : tag.text
                  const cls = typeof tag === 'string' ? (cat as { tagClass?: string }).tagClass! : tag.cls
                  return <span key={text} className={`skill-tag ${cls}`}>{text}</span>
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
