import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import ResearchWritingPage from './pages/ResearchWritingPage'
import './styles.css'
import './knowledge.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<ResearchWritingPage />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
