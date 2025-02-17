import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
    <Routes>
      <Route path="/login" element={<App />} />
      <Route path="/" element={<App />} />
      
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
