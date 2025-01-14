import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Ideas from './pages/Ideas';
import StrengthInNumbers from './pages/StrengthInNumbers';
import Footer from './component/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <Ideas/>
      <StrengthInNumbers/>
      <Footer/>
    </>
  )
}

export default App
