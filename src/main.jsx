import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bobo from './Bobo'
import Pot from './Pot'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bobo/>
    <Pot/>
    
  </StrictMode>,
)
