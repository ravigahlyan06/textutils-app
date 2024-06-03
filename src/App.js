import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Alert from "./component/Alert";
import About from "./component/About";
import TextForm from "./component/TextForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    }, 2000);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#b1aeae";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about"  element={<About mode={mode}/>} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
