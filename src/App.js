
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm'; 
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {

const[mode, setMode]=useState("light"); // whether dark mode is enabled or not
const[alert,setAlert]=useState(null)

const showAlert=(message,type)=>
{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=> {
  setAlert(null); 
},2000);

}


const toggleMode=()=>
{
  if(mode==="light")
  {
  setMode("dark");
  document.body.style.backgroundColor="#042743";
  showAlert("Dark Mode has been Enabled","success");
  //document.title="Text Manipulator-Dark Mode";
  
  // setInterval(()=> {
  //   document.title="INSTALL Text Manipulator"
  // },2000)

  // setInterval(()=> {
  //   document.title="Text Manipulator UPDATE!"
  // },1500)


}
  else
  {
  setMode('light');
  document.body.style.backgroundColor="white";
  showAlert("Light Mode has been Enabled","success");
  //document.title="Text Manipulator-Light Mode";
  }

}

  return (
  <>
{/*<Navbar title="Test" aboutText="About Test"/>*/}
<Router>
<Navbar title="Text Manipulator" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3"> {/* container is class of bootstrap which makes our form be in center. my-3 is a class gives margin from y */}
          <Routes>
           <Route exact path="/about"element={<About  mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Manipulator - Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>}/>
          </Routes>
          </div>
  </Router>



</>
  );
}

export default App;
