import { useState } from "react";
import Home from "./components/Home";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import ControlPanel from "./components/ControlPanel";
import Constructor from "./components/Constructor";
import PrivateRoute from "./components/Routers/PrivateRoute";
import ReportView from "./components/ReportView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route exact path="/controlPanel" element={<ControlPanel />} />
            <Route exact path="/constructor" element={<Constructor />} />
            <Route exact path="/report" element={<ReportView />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
