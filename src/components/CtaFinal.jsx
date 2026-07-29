import SignalTrace from './SignalTrace.jsx'
import Reveal from './Reveal.jsx'

export default function CtaFinal() {
  return (
    <section className="section-pad cta-final" id="contacto">
      <div className="wrap">
        <Reveal as="div">
          <h2>¿Su infraestructura está lista para certificar?</h2>
        </Reveal>
        <SignalTrace variant="narrow" />
        <div className="btn-row">
          <a
            className="btn-img btn-img-sm"
            href="https://wa.me/51978683393?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20certificaci%C3%B3n%20de%20infraestructura."
          >
            <img src="/boton-whatsapp.png" alt="Contactar por WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  )
}
