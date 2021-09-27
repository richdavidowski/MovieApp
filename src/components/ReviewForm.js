import React from 'react';

export default class ReviewForm extends React.Component {
    render() {
        return(
            <div><br/>
            <input id="input-form" type="text" placeholder="Write Your Review" /><br/><br/>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        )
    }
};