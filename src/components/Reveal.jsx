import { useReveal } from '../hooks/useReveal.js'

/**
 * Envuelve cualquier contenido y lo revela con un fade + subida sutil
 * cuando entra en el viewport. `delay` en ms para escalonar grupos.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, isVisible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' reveal-in' : ''} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
