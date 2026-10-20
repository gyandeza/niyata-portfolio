import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import AboutPage from './pages/AboutPage'
import './styles.css'
import './about.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>

    <AboutPage />
      <SiteMobileNav />
    </>

    </React.StrictMode>,
)
