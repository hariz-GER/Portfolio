'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let cx = 0, cy = 0, rx = 0, ry = 0
    let animId: number

    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY }
    document.addEventListener('mousemove', onMove)

    function animate() {
      rx += (cx - rx) * 0.12
      ry += (cy - ry) * 0.12
      cursor!.style.left = cx + 'px'
      cursor!.style.top = cy + 'px'
      ring!.style.left = rx + 'px'
      ring!.style.top = ry + 'px'
      animId = requestAnimationFrame(animate)
    }
    animate()

    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')

    const attachHover = () => {
      document.querySelectorAll('a, button, .project-card, .skill-category, .info-card, .contact-card, .timeline-content, .skill-tag').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    attachHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  )
}
