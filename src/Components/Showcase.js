import React from 'react';
import Orangesolo from '../assets/images/orangesolo2.png';
import Orange from '../assets/images/orangesolo.png';
import {Link} from 'react-router-dom';


//<img src = {Orange} alt ="img"  className ="Orange-showcase-item2"/>

const Showcase = ()=>{
  return(
      <div className = "Showcase-container">
        <div className = "Orange-showcase">
          <div className = "Orange-showcase-item1">
            <div className ="Content">
            <div className = "productname">
            Orange Solo
            </div>
            <div className = "aboutproduct">
            hell is better than heaven
            hell is better than heaven
            hell is better than heaven
            hell is better than heaven
            hell is better than heaven
            hell is better than heaven
            </div>
            <Link to="/faq" className ="more">
              more
            </Link>
            </div>

          </div>

<img src = {Orange} alt ="img"  className ="Orange-showcase-item2"/>

        </div>
      </div>
  );
}
export default Showcase;
