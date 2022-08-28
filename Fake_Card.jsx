import React from 'react'
import './App.css'

const Card = (props) =>
{
    return <div className='column'>
    <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
    <p>{props.position}</p>
    <p>From: {props.location}</p>
    <p>Phone number: {props.number}</p>
    </div>
}

export default Card