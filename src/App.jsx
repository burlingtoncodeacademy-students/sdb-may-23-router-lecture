import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import AboutMe from "./components/AboutMe"
import Nav from './components/Nav'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='*' element={ <NotFound /> }/>
        <Route path='/' element={ <Home /> }/>
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/mainroute'>
          <Route path='subroute/:name' element={ <AboutMe /> }/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
