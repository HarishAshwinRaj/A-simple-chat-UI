import React from 'react';
import Pic from '../assets/images/pic2.png';

const Board = ()=>{
  return(
    <div className ="Orange-body-element">



      <div  className = "Orange-board-element"  style={{backgroundImage:`url(${Pic})`}}>
          <div className = "Orange-banner-title" >
          Orange solo
          </div>
          <div className = "aboutproduct minimize">
            hell is better than heaven
              hell is better than heaven
                hell is better than heaven

          </div>
          <div className = "price" >$399
          </div>
      </div>


      <div  className = "Orange-board-element"  style={{backgroundImage:`url(${Pic})`}}>
          <div className = "Orange-banner-title" >
          Orange solo+
          </div>
          <div className = "aboutproduct minimize">
            hell is better than heaven
              hell is better than heaven
                hell is better than heaven

          </div>
          <div className = "price" >$499
          </div>
      </div>

    </div>
  )
}
export default Board;
