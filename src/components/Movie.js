import React from 'react';
import StarRating from './Stars';
import ReviewList from './ReviewList';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            summary: props.summary,
            rating: props.rating,
        }
    };

    render() {

        // let movies = [
        //     {
        //         title: 'Con Air',
        //         image: '#image',
        //         summary: 'Summary',
        //         rating: 'R'
        //     },
        //     {
        //         title: 'Toy Story',
        //         image: '#image',
        //         summary: 'Summary 2',
        //         rating: 'G'
        //     }
        // ];
        return (
            <div className="card text-white bg-dark">
                <div className="card-header">
                    <h3>
                        {this.state.title}
                    </h3>
                    <StarRating />
                </div>
                <div className="row">
                <div className="card-body">
                    <div className="card-group">
                    <div className="card">
                        <div>
                        <img src={this.state.image}/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="divWithScroll">
                        {this.state.summary}
                        </div>
                    </div>
                    <div className="card"><br/>
                        RATED: {this.state.rating}
                    </div>
                    </div>
                </div>
                </div>
                <div className="card-footer">
                    <ReviewList />
                </div>
            </div>
        )
    }
};