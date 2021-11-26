import React from 'react'
import './Movie.css'

const Movie = ({ title, genres, cover, summary, year, rating, likes }) => {

    return (
        <div className='movie-container'>
            <img src={cover} alt={title}></img>
            <h3>{title} ({year})</h3>
            <h4>{genres.join(" ")}</h4>
            <h4>{rating} / ❤️ {likes ? likes : 0} </h4>
        </div>
    )
}

export default Movie