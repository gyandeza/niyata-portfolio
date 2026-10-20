import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import LabsPage from './pages/LabsPage'
import './styles.css'
import './labs.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<LabsPage />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
