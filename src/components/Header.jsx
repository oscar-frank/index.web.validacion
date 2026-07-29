import { useState } from 'react'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site">
      <div className="nav-inner">
        <a href="#inicio">
          <img src="/logo-slogan-derecha.png" alt="Validación Integral" style={{ height: 84, width: 'auto' }} />
        </a>
        <nav>
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a
            className="btn-img"
            href="https://wa.me/51978683393?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20certificaci%C3%B3n%20de%20infraestructura."
          >
            <img src="/boton-whatsapp.png" alt="Contactar por WhatsApp" />
          </a>
          <button
            className="burger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
