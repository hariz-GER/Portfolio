'use client'

import { useEffect, useRef } from 'react'

const phrases = [
  'scalable SaaS products.',
  'AI-powered apps.',
  'real-time experiences.',
  'clean, fast interfaces.',
  'production-ready code.',
]

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false
    let timeout: ReturnType<typeof setTimeout>

    function typeLoop() {
      const el = typedRef.current
      if (!el) return
      const current = phrases[pi]
      if (!deleting) {
        el.textContent = current.slice(0, ci + 1)
        ci++
        if (ci === current.length) {
          deleting = true
          timeout = setTimeout(typeLoop, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, ci - 1)
        ci--
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length }
      }
      timeout = setTimeout(typeLoop, deleting ? 45 : 80)
    }
    typeLoop()

    const counters = document.querySelectorAll<HTMLElement>('[data-count]')
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return
      counters.forEach(el => {
        const target = parseInt(el.dataset.count!)
        const suffix = target === 70 ? '%' : '+'
        let current = 0
        const step = target / 40
        const timer = setInterval(() => {
          current += step
          if (current >= target) {
            el.textContent = target + suffix
            clearInterval(timer)
          } else {
            el.textContent = Math.floor(current) + suffix
          }
        }, 35)
      })
      observer.disconnect()
    }, { threshold: 0.3 })

    const stats = document.querySelector('.hero-stats')
    if (stats) observer.observe(stats)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="hero">
      <div className="glow-orb orb1" />
      <div className="glow-orb orb2" />
      <div className="glow-orb orb3" />
      <div className="hero-inner">
        <div className="hero-badge">
          <span className="dot" />
          Available for opportunities
        </div>
        <h1 className="hero-name">
          <span>Hariharan Ganesan</span>
        </h1>
        <p className="hero-title">
          I build&nbsp;
          <span ref={typedRef} id="typed-text" />
          <span className="typed-cursor">|</span>
        </p>
        <p className="hero-desc">
          Software Engineer crafting scalable SaaS and AI-powered applications.
          Turning complex problems into elegant, production-ready solutions with
          React, TypeScript, and modern web technologies.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get in Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num" data-count="1">0+</div>
            <div className="stat-label">Year Experience</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-count="4">0+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-count="70">0%</div>
            <div className="stat-label">% Production Features</div>
          </div>
          <div className="stat">
            <div className="stat-num" data-count="15">0+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
