import React from 'react'
import "./styles.css"
const Movie = () => {
  return (
    <div className='movie-box'> 
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4XKm8wkbLVvTl6Q37Ax7cysuKyrCReeUqCO6hlS1sOvpBeGtCQKsFRg5f8NDHDAqmYkw" alt=""/>
        <div className='heading2'>
            Title
        </div>
        <div className='info'>
            <div className='duration'> SS1 | 120m </div>
            <div className='type'> Movie </div>
        </div>
    </div>

  )
}

export default Movie;