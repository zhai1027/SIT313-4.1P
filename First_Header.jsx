import React from 'react'
import './App.css'

function First_Header(){
    return (
    <div className="Background_Color">
        <hr></hr>
        <div className='FONT_STYLE1'>            
            <form>            
                    <h1 style={{marginLeft: 10}}>DEV@DEAKIN
                    <input className='INPUT_STYLE1' placeholder="Search......" required="required"></input>                    
                    <button className="BUTTON_STYLE1" type="submit">POST</button>
                    <button className="BUTTON_STYLE1" style={{color: 'red'}} type="submit">LOGIN</button>
                    </h1>                                          
            </form>
        </div>
        <hr></hr>  
    </div>
    )
}

export default First_Header;