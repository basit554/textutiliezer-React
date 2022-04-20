import React, {useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');// Whether dark mode is enabled or not
  // const [moode, setMoode] = useState('light'); 
  const [alert, setAlert] =useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#05335c';
      showAlert("Dark Mode has been enebled", "success");
      document.title = 'TextUtiliezer - DarkMode';
      // setInterval(() => {
      //   document.title = 'TextUtiliezer is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtiliezer Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enebled", "success");
      document.title = 'TextUtiliezer - LightMode';
    }
  }
  // const toggleMoode = ()=>{
  //   if(moode === 'light'){
  //     setMoode('grey');
  //     document.body.style.backgroundColor = 'grey'
  //     showAlert("Grey Mode has been enebled", "success")
  //   }
  //   else{
  //     setMoode('light');
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light Mode has been enebled", "success")
  //   }
  // }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}

    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtiliezer" mode={mode}  toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
          {<About/>}
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />
          </Route>
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;


