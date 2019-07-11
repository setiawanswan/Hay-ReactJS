import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import CommentDetails from './CommentDetails'

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

