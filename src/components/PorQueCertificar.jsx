import Reveal from './Reveal.jsx'

const CARDS = [
  {
    title: 'Mayor velocidad de red',
    text: 'Garantiza el máximo rendimiento del enlace instalado.',
    icon: <path d="M13 2L4 14h7l-1 8 10-13h-7l1-7z" />,
  },
  {
    title: 'Evita reprocesos',
    text: 'Detecta errores antes de la entrega del proyecto.',
    icon: <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />,
  },
  {
    title: 'Cumplimiento de garantías',
    text: 'Muchos fabricantes exigen certificación para respaldar la garantía.',
    icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />,
  },
  {
    title: 'Cumplimiento normativo',
    text: 'ANSI/TIA, ISO/IEC e IEEE, en un solo reporte.',
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </>
    ),
  },
  {
    title: 'Mayor vida útil',
    text: 'Una infraestructura correctamente certificada presenta menos incidencias.',
    icon: <path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z" />,
  },
  {
    title: 'Confianza para auditorías',
    text: 'Ideal para empresas, minería, industria y gobierno.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5" />
      </>
    ),
  },
]

export default function PorQueCertificar() {
  return (
    <section className="porque section-pad">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Por qué certificar</span>
        </Reveal>
        <Reveal as="div">
          <div className="porque-grid">
            {CARDS.map((c) => (
              <div className="porque-card" key={c.title}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {c.icon}
                </svg>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
