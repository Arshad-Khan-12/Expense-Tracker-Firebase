import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { Tracker } from "./pages/tracker/index";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
