import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import FH from './First_Header';// Component for the first header
import FM from './IMAGE_FIRST';// Component for the first image as tasksheet provide
import Comments from './Comments'
import 'semantic-ui-css/semantic.min.css'
import Button from './Button'//Button for "See all articles"
import Bottom from './Bottom_Input'//SIGN UP FOR 
import Card from './Card'//Card part
import Bottom_AD from './Bottom_Advertisement'//Last part of the work
import Bottom_Last from './Bottom_Last'//Same as above

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={{margin: 20}}>SIT313 4.1P task</h1>
    <FH/>
    <FM/>

    <Comments/> 
    <Button/>

    <Card/>
    <Button/>

    <Bottom/>
    
    <Bottom_AD/>
    <Bottom_Last/>
  </div>
)