import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Git from './pages/Git/Git'
import Landing from './pages/Landing/Landing'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/git" element={<Git />} />
      </Routes>
    </Router>
  )
}

export default App
