const ITEMS = [
  {
    lines: ['Certificación de', 'cableado de cobre'],
    icon: (
      <>
        <path d="M4 15h4v4H4zM8 17h4M14 7h6v6h-6zM17 13v2M14 9h-3v6" />
        <rect x="2" y="13" width="4" height="4" rx="1" />
      </>
    ),
  },
  {
    lines: ['Certificación de', 'fibra óptica'],
    icon: (
      <>
        <path d="M3 20l5-5" />
        <path d="M8 15c3 0 4-6 7-6M11 6l2 2M13 4l2 2M9 8l2 2" />
        <circle cx="19" cy="5" r="1.4" />
        <circle cx="17" cy="9" r="1.4" />
        <circle cx="21" cy="9" r="1.4" />
      </>
    ),
  },
  {
    lines: ['Auditoría técnica', 'de infraestructura'],
    icon: (
      <>
        <rect x="5" y="3" width="12" height="18" rx="1.5" />
        <path d="M9 2h4v2H9z" />
        <path d="M8 8h6M8 11h6M8 14h4" />
        <circle cx="17" cy="17" r="4" />
        <path d="M15.3 17l1.2 1.2 2.2-2.4" />
      </>
    ),
  },
  {
    lines: ['Diagnóstico y', 'solución de problemas'],
    icon: (
      <>
        <rect x="2" y="5" width="14" height="10" rx="1.5" />
        <path d="M4 10h2l1.5-3 2 5 1.5-3H13" />
        <circle cx="17" cy="17" r="4" />
        <path d="M20 20l2 2" />
      </>
    ),
  },
  {
    lines: ['Validación de', 'infraestructura Data Center'],
    icon: (
      <>
        <rect x="3" y="2" width="8" height="9" rx="1" />
        <rect x="3" y="13" width="8" height="9" rx="1" />
        <path d="M5.5 5h.01M5.5 8h.01M5.5 16h.01M5.5 19h.01" />
        <path d="M15 4h6M15 8h6M15 12h6M15 16h6M15 20h6" />
      </>
    ),
  },
  {
    lines: ['Certificación para', 'entrega de proyectos'],
    icon: (
      <>
        <path d="M6 2h9l4 4v16H6z" />
        <path d="M15 2v4h4M9 12h6M9 15h6" />
        <circle cx="10.5" cy="19.5" r="2.5" />
        <path d="M9.3 19.6l.9.9 1.6-1.7" />
      </>
    ),
  },
]

export default function TiraStrip() {
  return (
    <div className="tira-strip">
      {ITEMS.map((item, i) => (
        <div className="tira-item" key={i}>
          <div className="tira-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              {item.icon}
            </svg>
          </div>
          <span>
            {item.lines[0]}<br />{item.lines[1]}
          </span>
        </div>
      ))}
    </div>
  )
}
