import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/global.css";
import "./styles/buttons.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/section.css";
import "./styles/footer.css";
import "./styles/faculty.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
