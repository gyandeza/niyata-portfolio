import React from 'react'
import ReactDOM from 'react-dom/client'
import SiteMobileNav from './components/SiteMobileNav'
import SupplyChainFlowLab from './pages/SupplyChainFlowLab'
import './styles.css'
import './flowlab.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
<SupplyChainFlowLab />
      <SiteMobileNav />
    </>
  </React.StrictMode>,
)
