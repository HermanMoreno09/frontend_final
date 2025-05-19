  {/*import { useState } from 'react'
  import { BrowserRouter } from 'react-router-dom'
  import Sidebar from './dashboard/Sidebar'
  import MainPanel from './dashboard/MainPanel'

  function App() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <MainPanel />
      </div>
      </BrowserRouter>
    )
  }
  export default App*/}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import MainPanel from "./dashboard/MainPanel";
import AuthForm from "./login/AuthForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="g-sidenav-show bg-gray-100">
              <div className="min-height-300 bg-primary position-absolute w-100" />
              <AuthForm />
            </div>
          }
        />
        <Route
          path="/*"
          element={
            <div className="">
              <div className="" />
              <Sidebar />
              <MainPanel />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
