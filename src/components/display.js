import React from 'react';
import './display.css';

const display = (props)=> {
    
   return(
       <div className = 'clock-container'>
           <div className = 'outline'>
                 <div className = 'clock' >
                     {props.time}
                <div className = {`date ${props.showDate?null:'delete'}`}>
               {props.date}
                    </div>
                 </div>
                 
           </div>
       </div>
   )
};


export default display;