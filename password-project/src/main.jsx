import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Password from '/src/Password'
import '/src/assets/css/style.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Password/>
    
  </StrictMode>,
)
