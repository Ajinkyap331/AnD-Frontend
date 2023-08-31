import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './Pages/Create/page'
import List from './Pages/List/page'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
