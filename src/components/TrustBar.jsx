import Reveal from './Reveal.jsx'
import { useCountUp } from '../hooks/useCountUp.js'

const STATS = [
  { target: 5600, prefix: '+', label: 'Puntos de red certificados' },
  { target: 21, prefix: '+', label: 'Proyectos ejecutados' },
  { target: 100, suffix: '%', label: 'Cobertura a nivel nacional' },
]
const STATIC_STATS = [
  ['24h', 'Reportes digitales'],
  ['TIA / ISO', 'Normas ANSI/TIA e ISO/IEC'],
  ['Fluke', 'Networks de última generación'],
]

function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function CountItem({ target, prefix = '', suffix = '', label }) {
  const [ref, value] = useCountUp(target)
  return (
    <div className="trust-item" ref={ref}>
      <div className="num">{prefix}{formatNumber(value)}{suffix}</div>
      <div className="label">{label}</div>
    </div>
  )
}

export default function TrustBar() {
  return (
    <section className="trustbar">
      <img src="/cifras-bg.jpg" alt="" className="trustbar-bg" aria-hidden="true" />
      <div className="trustbar-overlay"></div>
      <div className="wrap">
        <Reveal className="trustbar-head" as="div">
          <h2>Validación Integral en cifras</h2>
        </Reveal>
        <div className="trust-grid">
          {STATS.map((s) => (
            <CountItem key={s.label} {...s} />
          ))}
          {STATIC_STATS.map(([num, label]) => (
            <div className="trust-item" key={label}>
              <div className="num">{num}</div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
