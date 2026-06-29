'use client'

import { useEffect, useState } from 'react'

const navItems = ['about', 'skills', 'experience', 'projects', 'education']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{ background: scrolled ? 'rgba(3,7,18,0.95)' : 'rgba(3,7,18,0.7)' }}>
      <div className="nav-logo">&lt;HG /&gt;</div>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {navItems.map(id => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => setOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(o => !o)}>
        <span /><span /><span />
      </div>
    </nav>
  )
}
