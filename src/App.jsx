import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/footer.jsx'
import Side from './components/SideBar.jsx'
import Hero from './components/hero.jsx'

function App() {
  return <>
  <Nav/>
  <Side/>
   <Routes>
     <Route path='/' element={<Hero/>}></Route>
     <Route path='/about' element = {<h1>About</h1>}/>
   </Routes>
<Footer/>
    </>
}

export default App
