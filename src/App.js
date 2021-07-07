
import './css/App.css';
import './css/Orange.css';
import "./css/Faq.css";

import FaqBot from "./FaqBot";

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
    
      <div className="Orange-app">
      <FaqBot/>
         
      </div>
 
  );
}

export default App;
