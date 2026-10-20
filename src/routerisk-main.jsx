import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import RouteRiskCaseStudy from './pages/RouteRiskCaseStudy'
import './styles.css'
import './routerisk.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>

    <RouteRiskCaseStudy />
      <SiteMobileNav />
    </>

    </React.StrictMode>,
)
