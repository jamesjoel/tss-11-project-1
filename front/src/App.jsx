import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {

 

  return (
    <>
    <Header />
    <div className="container my-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
    </>
  )
}

export default App