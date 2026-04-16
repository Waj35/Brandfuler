import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const leave = () => setVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches) return null

  return (
    <motion.div
      className="cursor-glow"
      animate={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
      transition={{ type: 'spring', mass: 0.3, stiffness: 80, damping: 18 }}
    />
  )
}
