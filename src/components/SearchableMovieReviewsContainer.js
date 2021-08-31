import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WbYVoFWKvsyNoYqwyaCABqXrZDVURUZ4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: "",
            reviews: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                reviews: json.results
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}/>
                    <button>SEARCH</button>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}