import { useScrollReveal } from '../hooks/useScrollReveal'

// Lightweight wrapper: fades + lifts the child element on first scroll into view.
// Keeps existing className/style passed through so the design system is untouched.
export default function RevealOnScroll({ children, className = '', as: Tag = 'div', threshold = 0.15 }) {
  const [ref, visible] = useScrollReveal({ threshold })
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
