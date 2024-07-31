import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
