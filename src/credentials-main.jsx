import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import CredentialsPage from './pages/CredentialsPage'
import './styles.css'
import './credentials.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<CredentialsPage />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
