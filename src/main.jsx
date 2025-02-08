import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/reset.css'
import './components/css/index.css'
import App from './components/app/App.jsx'
import "modern-normalize/modern-normalize.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
