import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create/page";
import List from "./Pages/List/page";
import Home from "./Pages/Home/page";
import Update from "./Pages/Update/page";
import CompanyCreate from "./Pages/Companies/Create";
import CompanyList from "./Pages/Companies/List";
import CompanyUpdate from "./Pages/Companies/Update";
import Company from "./Pages/Companies/page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/ccreate" element={<CompanyCreate />} />
          <Route path="/clist" element={<CompanyList />} />
          <Route path="/cupdate" element={<CompanyUpdate />} />
          <Route path="/company" element={<Company />} />
          <Route path="/list" element={<List />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
