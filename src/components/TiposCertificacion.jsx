import Reveal from './Reveal.jsx'

const COBRE_ITEMS = ['Categoría 5e', 'Categoría 6', 'Categoría 6A', 'Categoría 7', 'Categoría 8']
const FIBRA_ITEMS = ['Pérdidas de inserción', 'Longitud del enlace', 'Reflectancia', 'Localización de eventos', 'Continuidad']

export default function TiposCertificacion() {
  return (
    <section className="section-pad" id="servicios">
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <span className="eyebrow">Tipos de Certificación</span>
          <h2>Certificamos cada medio de transmisión</h2>
        </Reveal>
        <div className="servicios-grid">
          <Reveal className="card frame frame-hover" as="div" delay={0}>
            <span className="tag">Cobre</span>
            <h3>Certificación de Cableado de Cobre</h3>
            <p>Certificación bajo normas ANSI/TIA e ISO/IEC en canales y Permanent Link.</p>
            <ul className="mini">
              {COBRE_ITEMS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card frame frame-hover" as="div" delay={120}>
            <span className="tag">Fibra</span>
            <h3>Certificación de Fibra Óptica</h3>
            <p>Medición con OLTS y OTDR para validar la integridad del enlace completo.</p>
            <ul className="mini">
              {FIBRA_ITEMS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
