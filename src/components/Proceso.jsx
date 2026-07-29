import { useReveal } from '../hooks/useReveal.js'
import Reveal from './Reveal.jsx'

const COLORS = [
  'var(--azul)',
  'var(--verde)',
  'var(--amber)',
  'var(--azul)',
  'var(--verde)',
  'var(--amber)',
  'var(--azul)',
]

const STEPS = [
  { title: 'Visita técnica', text: 'Reconocimiento del proyecto y condiciones de acceso.' },
  { title: 'Levantamiento', text: 'Alcance real: puntos, categoría y medios a certificar.' },
  { title: 'Identificación de enlaces', text: 'Mapeo y rotulado antes de iniciar la medición.' },
  { title: 'Certificación', text: 'Medición punto por punto con Fluke DSX-8000.' },
  { title: 'Corrección de observaciones', text: 'Se documentan y coordinan los enlaces en FAIL.' },
  { title: 'Re-certificación', text: 'Nueva medición hasta obtener PASS.' },
  { title: 'Entrega del informe final', text: 'Resultados, respaldo técnico y recomendaciones.' },
]

export default function Proceso() {
  const [ref, isVisible] = useReveal(0.25)

  return (
    <section className="section-pad" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">El proceso que se sigue</span>
        </Reveal>
        <div ref={ref} className={`proceso-flow${isVisible ? ' in-view' : ''}`}>
          <div className="pf-track">
            <div className="pf-track-fill"></div>
          </div>
          {STEPS.map((step, i) => (
            <div className="pf-step" key={step.title}>
              <div className="pf-num" style={{ background: COLORS[i] }}>{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
