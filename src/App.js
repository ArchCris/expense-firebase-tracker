import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import ExpenseTracker from "./pages/expense-tracker";
import './App.css'
import CheckAuth from "./components/CheckAuth";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth/>}/>
          <Route path="/expense-tracker" element={<CheckAuth><ExpenseTracker/></CheckAuth>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
