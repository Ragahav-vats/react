import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import './css/style.css'


createRoot(document.getElementById('root')).render(
  <>
    <HomePage />
    <AboutPage />
  </>,
)
