import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { App_Context_Provider } from '../context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App_Context_Provider>
        <App />
    </App_Context_Provider>
  </BrowserRouter>

)
