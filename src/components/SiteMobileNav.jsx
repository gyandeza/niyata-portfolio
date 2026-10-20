import { useEffect, useState } from 'react'
import './site-mobile-nav.css'

const links = [
  { label: 'Home', href: './index.html' },
  { label: 'Selected work', href: './index.html#work' },
  { label: 'About', href: './about.html' },
  { label: 'Research & writing', href: './research.html' },
  { label: 'Teaching & speaking', href: './teaching.html' },
  { label: 'Credentials', href: './credentials.html' },
  { label: 'Niyata Labs', href: './labs.html' },
  { label: 'RouteRisk', href: './routerisk.html' },
  { label: 'Flow Lab', href: './flowlab.html' },
  { label: 'Collaborate', href: './collaborate.html' },
]

export default function SiteMobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const currentPage = typeof window === 'undefined'
    ? 'index.html'
    : (window.location.pathname.split('/').pop() || 'index.html')

  return (
    <div className="niyata-mobile-nav">
      {open && (
        <nav id="niyata-mobile-links" aria-label="Niyata site navigation">
          <p>EXPLORE NIYATA</p>
          {links.map((item) => {
            const target = item.href.slice(2).split('#')[0]
            const isCurrent = target === currentPage
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            )
          })}
        </nav>
      )}
      <button
        type="button"
        aria-label={open ? 'Close site navigation' : 'Open site navigation'}
        aria-expanded={open}
        aria-controls="niyata-mobile-links"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'CLOSE' : 'EXPLORE'} <span aria-hidden="true">{open ? '×' : '☰'}</span>
      </button>
    </div>
  )
}
