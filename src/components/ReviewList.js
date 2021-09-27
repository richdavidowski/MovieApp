import React from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

export default class ReviewList extends React.Component {
    render() {
        return(
            <div className="reviewCard">
                <div className="card text-white bg-secondary">
                    <div className="card-body divWithScroll" id="reviews">
                        <Review />
                    </div><br/>
                    <div className="card-footer">
                        <ReviewForm />
                    </div>
                    
                </div>
            </div>
        )
    }
}