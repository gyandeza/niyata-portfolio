export default function Nav() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="identity" href="#top" aria-label="Niyata home">
          <span className="identity-mark">N</span>
          <span>
            <strong>NIYATA</strong>
            <small>GILANG YANDEZA</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="./about.html">About</a>
          <a href="./research.html">Research</a>
          <a href="./teaching.html">Teaching</a>
        </nav>
        <a className="nav-cta" href="./collaborate.html">Connect ↗</a>
      </div>
    </header>
  )
}
