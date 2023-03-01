import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} aboutText="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">      
        <Routes>
          <Route path="/" element={<TextForm heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode ={mode} showAlert={showAlert}/>} />
          <Route path="about" element={<About mode={mode}/>} />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
