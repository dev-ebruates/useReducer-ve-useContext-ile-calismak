import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SiteContexProvider } from './context/SiteContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteContexProvider>
       <App />
    </SiteContexProvider>
  </React.StrictMode>,
)
