import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import data from "./components/data.js"


const objArray = data.map((e)=>
    <MainContent 
      key={e.id}
      e={e}
    />
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {objArray}
  </StrictMode>,
)
