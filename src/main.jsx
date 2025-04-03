import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProjectContext from './context/ProjectContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <ProjectContext>
  <App />

  </ProjectContext>
 
  </BrowserRouter>
  </StrictMode>,
)
