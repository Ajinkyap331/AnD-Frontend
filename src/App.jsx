import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create/page";
import List from "./Pages/List/page";
import Home from "./Pages/Home/page";
import Update from "./Pages/Update/page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/list" element={<List />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
