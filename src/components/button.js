import React from 'react';
import './button.css'

const buttons = (props)=>{
    
    return(
        <div className='button'>
        <div className= {`switch-outline ${props.showDate?'background':null}`}>
            <div className= {`switch ${props.showDate?'move':null}`} onClick={props.click}></div>
        </div>
        <i className="fa fa-calendar" ></i>

        </div>
        )
}
export default buttons;