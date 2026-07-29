import Reveal from './Reveal.jsx'

const SERVICIOS = [
  {
    tag: 'Auditoría',
    title: 'Auditoría Técnica de Infraestructura',
    text: 'Evaluamos integralmente la instalación: cumplimiento de normas, calidad de instalación, estado de conectores, organización de racks, inspección física, identificación de errores y etiquetado normativo.',
  },
  {
    tag: 'Diagnóstico',
    title: 'Diagnóstico y Solución de Problemas',
    text: 'Identificamos el origen de fallas que afectan el rendimiento de la red: errores de instalación, interferencias, NEXT, atenuación, return loss, alien crosstalk, pérdidas, enlaces defectuosos, daños físicos y errores de terminación.',
  },
  {
    tag: 'Data Center',
    title: 'Validación de Infraestructura para Data Center',
    text: 'Validamos backbone, troncales, cableado horizontal y vertical, MPO, fibra óptica y organización física de racks.',
  },
  {
    tag: 'Entrega',
    title: 'Certificación para Entrega de Proyectos',
    text: 'Certificación final requerida antes de la entrega para constructoras, integradores, telecomunicaciones, centros de datos, industria, minería, hospitales y gobierno.',
  },
]

export default function Servicios() {
  return (
    <section className="section-pad" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Servicios</span>
        </Reveal>
        <div className="servicios-grid secundaria">
          {SERVICIOS.map((s, i) => (
            <Reveal className="card frame frame-hover" as="div" key={s.title} delay={i * 90}>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
