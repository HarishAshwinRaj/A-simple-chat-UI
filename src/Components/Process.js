import React from'react';
import Ship from '../Svgcomp/shipping.svg';
import Refund from '../Svgcomp/refund.svg';
import Support from '../Svgcomp/support.svg';

const ProcessElement=({img,title,text})=>{
  return (
    <div className = 'ProcessElement'>
      <img src={img} alt="shipping img" className = "demi-logo"/>
      <div className = "process-title">
      {title}
      </div>
      <div className = "process-content">
{text}
      </div>
    </div>
  )
}
const Process = ()=>{
  return(
<div className ="Orange-body-element" >
    <ProcessElement img = {Ship} title = {"FREE SHIPPING"} text = {"  hell is better than heaven hell is better than  heaven hell is better than heaven hell is better than heaven hell is better than heaven hell is better than  heaven  hell is better than heaven hell is better than heaven"}/>
    <ProcessElement img = {Refund} title = {"100% REFUND"} text = {"  hell is better than heaven hell is better than  heaven hell is better than heaven hell is better than heaven hell is better than heaven hell is better than  heaven  hell is better than heaven hell is better than heaven"}/>
        <ProcessElement img = {Support} title = {"SUPPORT 24/7"} text = {"  hell is better than heaven hell is better than  heaven hell is better than heaven hell is better than heaven hell is better than heaven hell is better than  heaven  hell is better than heaven hell is better than heaven"}/>
</div>
  )
}
export default Process;
