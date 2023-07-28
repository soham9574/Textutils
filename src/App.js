import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light"); //whether darkmode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      // showAlert("Darkmode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Lightmode has been enabled", "success");
    }
  };
  
  return (
    <>
      <Nav
        mode={mode}
        title="TextUtils"
        about="About Us"
        toggleMode={toggleMode}
      >
    </Nav>
      <Alert alert={alert} />
      <div className="container my-3 ">
        {/* <Router> */}
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  mode={mode}
                  heading="Enter the text to analyze below"
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>

        {/* </Router> */}
      </div>
    </>
  );
}
export default App;
