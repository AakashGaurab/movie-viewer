import React from 'react'

function Movie(props) {
  return (
    <>
    <div>
        <img src={props.ele.Poster} alt="" />
        <h4>{props.ele.Title}</h4>
        <p>Year: {props.ele.Year}</p>
        <p>Imdb ID: {props.ele.imdbID}</p>
        
    </div>
    
    </>
  )
}

export default Movie