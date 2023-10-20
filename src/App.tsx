import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from '@/views/home'
import Details from '@/views/detail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App
