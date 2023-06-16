import React from "react";

import './MovieCard.css';

export default function MovieCard({movie}) {
    return (
        <div className='movie-card' key={movie.id}>

        <h3 className='card--title--mobile'>{movie.title}</h3>
                        
            <img 
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}/>
            
            <div className='card--content'>
                <h3 className='card--title'>{movie.title}</h3>
                <p><small>Release Date: {movie.release_date}</small></p>
                <p><small>Rating: {movie.vote_average}</small></p>
                <p className='card--desc'>{movie.overview}</p>
            </div>
        </div>
    );
}