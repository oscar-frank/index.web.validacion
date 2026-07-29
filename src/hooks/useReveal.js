import { useEffect, useRef, useState } from 'react'

/**
 * Devuelve un ref para colocar en el elemento y un booleano que pasa a
 * true la primera vez que el elemento entra en el viewport.
 * Respeta prefers-reduced-motion: si está activado, isVisible arranca en true.
 */
export function useReveal(threshold = 0.18) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible]
}
