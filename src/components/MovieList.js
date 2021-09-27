import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies,
        };
    }
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
        let movies;
        if (this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }

        return(

            <div className="container"><br/>
                <div className="card text-white bg-danger">
                    <div className="card-header">
                        <h1>Movie List</h1>
                    </div>
                    <div className="card-body">
                        {movies}
                    </div>
                </div>
            </div>
        )
    }
    }