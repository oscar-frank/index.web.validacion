import { useReveal } from '../hooks/useReveal.js'

/**
 * Elemento de firma del sitio: una traza de señal (como una medición en
 * curso) que se dibuja de izquierda a derecha y se "asienta" en un
 * indicador PASS. Se usa en el hero (variante grande) y como divisor
 * entre secciones (variante angosta).
 */
export default function SignalTrace({ variant = 'wide', className = '' }) {
  const [ref, isVisible] = useReveal(0.3)
  const isWide = variant === 'wide'

  return (
    <div
      ref={ref}
      className={`signal-trace signal-trace--${variant}${isVisible ? ' is-live' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox={isWide ? '0 0 640 120' : '0 0 640 40'} preserveAspectRatio="none">
        <path
          className="trace-guide"
          d={
            isWide
              ? 'M0,60 L640,60'
              : 'M0,20 L640,20'
          }
          pathLength="100"
        />
        <path
          className="trace-line"
          d={
            isWide
              ? 'M0,60 L60,60 L90,20 L120,95 L150,35 L180,75 L210,55 L250,58 L300,62 L360,59 L420,61 L480,60 L540,60 L640,60'
              : 'M0,20 L60,20 L90,6 L120,32 L150,12 L180,26 L210,18 L260,20 L640,20'
          }
          pathLength="100"
        />
      </svg>
      {isWide && (
        <span className="trace-pass">
          <span className="trace-dot" />
          PASS
        </span>
      )}
    </div>
  )
}
