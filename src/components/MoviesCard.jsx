import React from 'react'
import './movieCard.css'

const MoviesCard = (prop) => {

  const API_IMG = "https://image.tmdb.org/t/p/w500/"

  return (
    <div className='card'>
      <div className="poster">
        <img src={API_IMG + prop.poster_path}/>
      </div>

      <div className="info">
        <p className="title">{prop.title}</p>
        <p className="voter">{prop.vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="overview_title">Overview</h2>
        <h3 className='overwiew_info'>{prop.overview}</h3>
      </div>
    </div>
  )
}

export default MoviesCard
