import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import CollaboratePage from './pages/CollaboratePage'
import './styles.css'
import './credentials.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<CollaboratePage />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
