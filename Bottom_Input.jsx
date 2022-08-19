import React from "react";
import './App.css'

function Bottom(){
    return (
        <div className="Background_Color">
            <hr></hr>
            <div className='FONT_STYLE2'>            
                <form>              
                        <h1 style={{marginLeft: 10}}>SIGN UP FOR OUR DAILY INSIDER
                        <input className='INPUT_STYLE2' placeholder="Enter your email" required="required"></input>                    
                        <button className="BUTTON_STYLE2" type="submit">Subscribe</button>
                        </h1>                                          
                </form>
            </div>
        <hr></hr>  
    </div>

    )
}
export default Bottom