import React from 'react'
import './App.css'
import IM_Facebook from './Image/Facebook.png'
import IM_IG from './Image/IG.png'
import IM_TW from './Image/Twitter.png'

function bottom(){
    return(
        <div className='AD_Main'>
            <div>
                <div  className='AD_F'>
                        <h1>EXPLORE</h1>
                        <h3>Home</h3>
                        <h3>Questions</h3>
                        <h3>Articles</h3>
                </div>

                <div  className='AD_F'>
                    <h1>SUPPORT</h1>
                    <h3>FAQs</h3>
                    <h3>Help</h3>
                    <h3>Contact Us</h3>
                </div>   

                <div  className='AD_F'>
                    <h1>Stay connected</h1>
                    <div>
                        <img style={{width: 50, height: 50}} src = {IM_Facebook} alt='Facebook'></img>
                        <img style={{width: 50, height: 50}} src = {IM_IG} alt='INS'></img>
                        <img style={{width: 50, height: 50}} src = {IM_TW} alt='Twitter'></img> 
                    </div>
 
                </div >
            </div>


        </div>
    )
}

export default bottom