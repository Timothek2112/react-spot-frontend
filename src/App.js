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
import UsersManager from "./components/UsersManager"
import UserEditor from "./components/UserEditor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Navigate to="/controlPanel" replace />} />
            <Route exact path="/controlPanel" element={<ControlPanel />} />
            <Route exact path="/constructor" element={<Constructor />} />
            <Route exact path="/report" element={<ReportView />} />
            <Route exact path="/usersManager" element={<UsersManager/>}/>
            <Route exact path="/userConstructor" element={<UserEditor/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
