import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>

    <App />
      <SiteMobileNav />
    </>

    </React.StrictMode>,
)
