import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import "./App.scss"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
