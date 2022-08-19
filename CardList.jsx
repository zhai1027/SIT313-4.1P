import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
import './App.css';

function CardList(props) {
    return (
        <Card>
            <Image src={props.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>
            <span className='date'>{props.date}</span>
            </Card.Meta>
            <Card.Description>
            {props.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
            <Icon name='user' />
                {props.friends}
                </a>
                </Card.Content>
        </Card>
    )
}

export default CardList
/*
            <div>
                <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/joe.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    120 Friends
                </a>
                </Card.Content>
            </Card>
            </div>

            <div>
                <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    120 Friends
                </a>
                </Card.Content>
            </Card>
            </div>
*/