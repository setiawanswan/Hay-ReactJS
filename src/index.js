import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                content="Nice blog post!" 
                avatar = {faker.image.avatar()}
            />
            <CommentDetails 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="I like this subject" 
                avatar = {faker.image.avatar()}
            />
            <CommentDetails 
                author="Jane" 
                timeAgo="Today at 3:16PM" 
                content="I love you" 
                avatar = {faker.image.avatar()}
            />
            <CommentDetails 
                author="John" 
                timeAgo="Today at 1:30PM" 
                content="I like play footbal" 
                avatar = {faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

