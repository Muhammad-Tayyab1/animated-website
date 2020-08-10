import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header.js'
import Body from './Components/Body.js';
import About from './Components/About.js';
import Project from './Components/Project';
import Navbar from './Components/NavBar.jsx';
 function Rout()  {
    return (
       <div>
          
         <Navbar/>
            <Routes>
               <Route  path='/'  element={<Header/>} />
               <Route  path='/'  element={<Body/>} />
               <Route  path='About'  element={<About/>} />
               <Route  path='Project'  element={<Project/>} />
          </Routes>
       </div>
    )
}
export default Rout;