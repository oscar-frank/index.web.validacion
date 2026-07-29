import SignalTrace from './SignalTrace.jsx'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <img
        src="/hombre-con-equipo.jpg"
        alt="Ingeniero realizando una certificación con Fluke DSX-8000 frente a un rack empresarial"
        className="hero-bg"
      />
      <div className="hero-overlay"></div>
      <div className="wrap hero-content">
        <span className="hero-kicker">Certificación Fluke Networks DSX-8000</span>
        <h1>La calidad no se supone,<br /><span className="accent">se comprueba.</span></h1>
        <p className="lead">
          Detrás de cada red hay una promesa: que va a funcionar cuando se le necesite. Certificar no es un
          trámite, es la diferencia entre suponer que su infraestructura funciona y comprobarlo.
        </p>
        <div className="btn-row">
          <a
            className="btn-img btn-img-sm"
            href="https://wa.me/51978683393?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20certificaci%C3%B3n%20de%20infraestructura."
          >
            <img src="/boton-whatsapp.png" alt="Contactar por WhatsApp" />
          </a>
        </div>
        <SignalTrace variant="wide" />
      </div>
    </section>
  )
}
