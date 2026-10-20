import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import TeachingSpeakingPage from './pages/TeachingSpeakingPage'
import './styles.css'
import './knowledge.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<TeachingSpeakingPage />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
