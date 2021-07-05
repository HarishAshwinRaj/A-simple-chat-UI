import {useEffect,useState } from 'react';
import logo from './orangelogo.svg';
import './App.css';
import './Orange.css';
import "./Faq.css";
import Header from  "./Components/Header";
import Showcase from "./Components/Showcase";
import Body from "./Components/Body";
import FaqBot from "./Components/FaqBot";
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
function App() {
/*
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/",{
      method: "POST",
     body:JSON.stringify({
         question:"what about memory"
     }),
     headers: {
         "Content-type": "application/json"
     }
   }).then(resp=>resp.json()).then(jso=>console.log(jso," i ve got this")).catch(err=>console.log(err,'errr'))
  },[])
*/
  return (
    <Router>
      <div className="Orange-app">
          <Switch>
                  <Route exact path ="/">
                        <Header/>
                        <Showcase/>
                        <Body/>
                  </Route>
                  <Route  path ="/faq">
                        <FaqBot/>
                  </Route>

          </Switch>
      </div>
    </Router>
  );
}

export default App;
