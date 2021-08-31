// Code MovieReviews Here
import React from 'react'

const renderMovies = (movie_reviews) => {
    return (
        movie_reviews.map( (review, idx) => {
            return (
                <div key={idx} className="review">
                    <h3>Title: {review.display_title}</h3>
                    <div>
                        <span>Reviewed By: {review.byline}</span>
                        <span>Published On: {review.publication_date}</span>
                        <span>Summary: {review.headline}</span>
                        <p>{review.summary_short}</p>
                    </div>                    
                </div>
            )
        })
    )
}

// Using props as an arg
// const MovieReviews = ( props ) => {
//     return (
//         <div class="review-list">
//             {this.renderMovies(props.reviews)}
//         </div>
//     )
// }

// In lieu of passing in props, use object destructuring to access the props keys directly
const MovieReviews = ( {reviews} ) => {
    if(reviews !== "") {
        return (
            <div className="review-list">
                {renderMovies(reviews)}
            </div>
        )
    }
    return null
}

export default MovieReviews