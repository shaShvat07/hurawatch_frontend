import React from 'react'
import { Movie } from '..';
import "./styles.css";

const MovieList = () => {
  return (
    <>
    <div className='heading'>
      <h1> 
      Trending
      </h1>
    </div>
    <div className='movie-list'>
      <Movie /> 
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
      <Movie />   
    </div>
    </>
  )
}

export default MovieList;