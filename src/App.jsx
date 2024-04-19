import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/footer.jsx'
import Side from './components/SideBar.jsx'
import Home from './components/Pages/Home'
import LearnMore from './components/Pages/learnMore.jsx'
function App() {
  return <>
  <Nav/>
  <Side/>
   <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/learnmore/:id' element={<LearnMore/>}/>
     <Route path='*' element={<h1>Error</h1>}/>
   </Routes>
<Footer/>
    </>
}

export default App
