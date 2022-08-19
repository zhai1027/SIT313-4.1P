import React from 'react'
import './App.css'
import { Comment, Header } from 'semantic-ui-react'
import CommentItem from './Comment_Item'
import author from './authors'

function Comments() {
    return(
        <div>
            <div className='Comments_middle'>
                <Header as='h1' dividing>
                    Comments
                </Header>

                <div className='DIV1'>
                    <Comment.Group>

                    <CommentItem 
                        name = {author[0].name}
                        img = {author[0].img}
                        detail = {author[0].detail}
                        date = {author[0].date}
                        action = {author[0].action}
                    />
                    </Comment.Group>
                </div>

                <div className='DIV1'>
                    <Comment.Group>
                    <CommentItem 
                        name = {author[1].name}
                        img = {author[1].img}
                        detail = {author[1].detail}
                        date = {author[1].date}
                        action = {author[1].action}
                    />
                    </Comment.Group>
                </div>

                <div className='DIV1'>
                    <Comment.Group>
                    <CommentItem 
                        name = {author[2].name}
                        img = {author[2].img}
                        detail = {author[2].detail}
                        date = {author[2].date}
                        action = {author[2].action}
                    />
                    </Comment.Group>
                </div>

                
                <div className='DIV1'>
                    <Comment.Group>
                    <CommentItem 
                        name = {author[3].name}
                        img = {author[3].img}
                        detail = {author[3].detail}
                        date = {author[3].date}
                        action = {author[3].action}
                    />
                    </Comment.Group>
                </div>

                
                <div className='DIV1'>
                    <Comment.Group>
                    <CommentItem 
                        name = {author[4].name}
                        img = {author[4].img}
                        detail = {author[4].detail}
                        date = {author[4].date}
                        action = {author[4].action}
                    />
                    </Comment.Group>
                </div>
            </div>
        </div>
    )
}

export default Comments;