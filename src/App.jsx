import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  /* 
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
 */

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/adduser" element={<AddUser/>} />

        </Routes>

        <Home />
      </Router>
    </>
  )


}

export default App
