import Reveal from './Reveal.jsx'

const FAQS = [
  {
    q: '¿Cuándo debo certificar?',
    a: 'Idealmente antes de la entrega o cierre del proyecto, y también al recibir una instalación ejecutada por terceros, para validar que cumple con lo contratado.',
  },
  {
    q: '¿Qué normas utilizan?',
    a: 'Trabajamos bajo los estándares ANSI/TIA e ISO/IEC vigentes para cableado de cobre y fibra óptica, con criterios de aceptación reconocidos internacionalmente.',
  },
  {
    q: '¿Qué equipo utilizan?',
    a: 'Certificamos con el Fluke Networks DSX-8000 CableAnalyzer, uno de los equipos de referencia de la industria para certificación Nivel III/IV.',
  },
  {
    q: '¿Cuánto demora?',
    a: 'El tiempo en campo depende de la cantidad de puntos, pero el informe digital se entrega en un máximo de 24 horas tras finalizar la medición.',
  },
  {
    q: '¿Qué incluye el servicio?',
    a: 'Visita técnica, levantamiento, certificación punto por punto, corrección de observaciones si aplica, re-certificación y entrega del informe final completo.',
  },
  {
    q: '¿Recibo un certificado?',
    a: 'Sí. Recibe un reporte PDF, el archivo nativo LinkWare, el listado PASS/FAIL, resumen ejecutivo, observaciones y recomendaciones.',
  },
  {
    q: '¿Qué ocurre si un enlace falla?',
    a: 'Documentamos el punto exacto de la falla y coordinamos su corrección con el equipo instalador. Existe una tolerancia de tiempo para re-certificar sin costo adicional, siempre que se resuelva dentro del mismo tiempo que toma certificar los demás puntos del proyecto. Si se requiere tiempo adicional o una visita en otra fecha, esa re-certificación se cobra de forma independiente.',
  },
]

export default function Faq() {
  return (
    <section className="section-pad" id="faq">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Preguntas frecuentes</span>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
