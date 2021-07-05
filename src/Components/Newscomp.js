import React from 'react';
import Front from '../assets/images/frontcase.jpg';
import Lappy from '../assets/images/lappy.jpg';
import Case from '../assets/images/case.jpg';
const NewsElement = ({img})=>{

  return(
    <div className = "flex-row padding">
    <img src={img} alt = 'img' className = "flex2"/>
<div className = "flex-column">
<div className = "date-style">
16 APRIL 2021
</div>
<div className = "news-heading">
Typesetting industry
</div>
<div className = "news-content">
hell is better than heaven
hell is better than heaven
hell is better than heaven
</div>
</div>

    </div>
  )
}



const Newscomp =()=>{
  return(
  <div className = "margin10 flex-col ">
    <div className ="news-style"> LATEST NEWS</div>
    <div className  = "flex-row  margin-top5 ">
    <NewsElement img ={Front}/>
    <NewsElement img ={Lappy}/>
    <NewsElement img ={Case}/>
    </div>
  </div>
  )
}

export default Newscomp;
