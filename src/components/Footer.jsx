export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img
              src="/logo-con-slogan-abajo.png"
              alt="Validación Integral"
              style={{ maxWidth: 170, marginBottom: 22 }}
            />
            <p className="footer-quote">
              &#8220;Detrás de cada red hay una promesa: que va a funcionar cuando se le necesite. Certificar
              no es un trámite, es la diferencia entre suponer que su infraestructura funciona y
              comprobarlo.&#8221;
            </p>
          </div>
          <div>
            <h4>Contacto</h4>
            <p>Teléfono: +51 978 683 393</p>
            <p>Correo: Renzo.rodriguez@circularis.pe</p>
            <p>Cobertura: Todo el Perú</p>
            <p>Horario de atención: 24 horas mediante bot de atención (preguntas, cotización y agendamiento de certificaciones)</p>
            <p>Horario de asesoría: Lunes a Viernes de 8:00 a.m. a 5:00 p.m.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <a href="#servicios">Servicios</a>
            <a href="#faq">Preguntas frecuentes</a>
          </div>
        </div>
        <div className="footer-bottom">
          Validación Integral es de propiedad de Braicorp Ingenieros SAC.
          <br />
          © {year} Validación Integral — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
