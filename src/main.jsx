import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { KalumApp } from './KalumApp'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KalumApp />
  </StrictMode>,
)
