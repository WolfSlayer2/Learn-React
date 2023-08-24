// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const defaults = { col: 'black', val: 'primary' };

  const [modebg, setModebg] = useState('light');
  const [alert, setalert] = useState(null);
  const [colors, setcolors] = useState(defaults);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }
  const changeColorbg = (col, val) => {
    setcolors({
      col: col,
      val: val
    })
    document.body.style.backgroundColor = col;
  }
  const toggleNavBg = () => {
    if (modebg === 'light') {
      setModebg('dark');
      document.body.style.backgroundColor = "#414345";
      showAlert('Dark Mode has been enabled', 'success');
      document.title = "Word Counter - Dark mode";
    }
    else {
      setModebg('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', 'success');
      document.title = "Word Counter";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="First App" mode={modebg} toggle={toggleNavBg} colorchange={changeColorbg} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Try! Word Counter | Character Utility | Text Manipulation" mode={modebg} alertchange={showAlert} Color={colors} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
