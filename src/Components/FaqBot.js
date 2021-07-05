import{useState} from 'react';
import Smile from "../Svgcomp/smile.svg";
import Send from "../Svgcomp/send.svg";

const FaqmsgBox=()=>{
  const [msg,setmsg] =useState( [
                  {res:1,text:"hello"},
                ]);
  const [text,settext] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    setmsg(e=>[...e,{res:0,text:text}]);
    //doing fetch and set actions
    fetch("http://127.0.0.1:8000/api/",{
      method: "POST",
     body:JSON.stringify({
         question:text
     }),
     headers: {
         "Content-type": "application/json"
     }
   }).then(resp=>resp.json()).then(jso=>{
     console.log(jso.reply," i ve got this");
     setmsg(e=>[...e,{res:1,text:jso.reply}]);
 }).catch(err=>console.log(err,'errr'))
 settext("");
  }


  return(
    <div>
        <div className = "faq-message-box faq">
        {
          msg.map((msg)=>(
            <div className ={(msg.res===1)?"right":"left"}>
            {msg.text}
            </div>
          ))
        }

        </div>
        <form className="faq-texter"
          onSubmit = {handleSubmit}
          >
          <img src={Smile} alt = "smile" className = "smile"/>
            <input type = "text" className="faq-text-box"
            value ={text}
            placeholder ="type the message"
            onChange={(e)=>{settext(e.target.value);}}
            />
            <div className = "sendbtn">
            <img src = {Send} alt = "send btn" className = "send"/>
            </div>
        </form>
    </div>
  )
}
const FaqBot = ()=>{

  return(
    <div className="full">
    <div className ="faqwidget">
      <div className = "faqheader">
        <div className ="faqtitle">
        Orange Hero
        </div>
        <div className ="faqmessage">
        your personal chatbox
        </div>
      </div>
<FaqmsgBox/>
    </div>
  </div>
  )
}
export default FaqBot;
