import React from 'react'
import Card from './Fake_Card'
import staffList from './Fake_StaffList'
import './App.css'

function CardComponent (staff , i){
    return <Card 
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    location = {staff.location}
    number = {staff.number}
  />
}

const CardList = () =>
{  
    return <div className="row">
        {staffList.map(CardComponent)}
    </div>
}

export default CardList;