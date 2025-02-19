import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tambah from './componens/TambahTgs.jsx'
import {BrowserRouter,Routes,Route} from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './componens/login.jsx'
import Register from './componens/register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<App />} />
      <Route path="/tambah" element={<Tambah />} />
      
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
