import React from 'react'
import './App.css'
import { Card, Icon, Image } from 'semantic-ui-react'
import CardList from './CardList'
import Persons from './Person'

function CardComponent (staff , i){
    return <CardList
    img = {staff.img}
    name = {staff.name}
    date = {staff.date}
    description = {staff.description}
    friends = {staff.friends}/>
}

const CardList_NEW = () =>
{
    return <div className='Card_Replace'>
        {Persons.map(CardComponent)}
    </div>
}

function Card_OUTPUT(){
    return(
        <div>
            <div className='Card'>
            <Card.Group>
                <CardList
                img = {Persons[0].img}
                name = {Persons[0].name}
                date = {Persons[0].date}
                description = {Persons[0].description}
                friends = {Persons[0].friends}
                />
            </Card.Group> 
            </div>

            <div className='Card'>
            <Card.Group>
                <CardList
                img = {Persons[1].img}
                name = {Persons[1].name}
                date = {Persons[1].date}
                description = {Persons[1].description}
                friends = {Persons[1].friends}
                />
            </Card.Group> 
            </div>

            <div className='Card'>
            <Card.Group>
                <CardList
                img = {Persons[2].img}
                name = {Persons[2].name}
                date = {Persons[2].date}
                description = {Persons[2].description}
                friends = {Persons[2].friends}
                />
            </Card.Group>
            </div>

            <div className='Card'>
            <Card.Group>
                <CardList
                img = {Persons[3].img}
                name = {Persons[3].name}
                date = {Persons[3].date}
                description = {Persons[3].description}
                friends = {Persons[3].friends}
                />
            </Card.Group> 
            </div>

            <div className='Card'>
                <Card.Group>
                <CardList
                img = {Persons[4].img}
                name = {Persons[4].name}
                date = {Persons[4].date}
                description = {Persons[4].description}
                friends = {Persons[4].friends}
                />
            </Card.Group>  
            </div>
        </div>
    )
}

export default CardList_NEW
