import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import React,{ Component } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
const App=()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;