import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Slides from './components/slides'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slides />} />
      </Routes>
    </Router>
  )
}

export default App
