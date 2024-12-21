import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Para from './parag'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Para></Para>
  </StrictMode>,
)
