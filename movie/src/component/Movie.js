import React from 'react'
import { deleteMovie } from '../utils/api'
import Swal from 'sweetalert2';
function Movie(props) {
  let deletemovie=async(id)=>{
      let response = await fetch(deleteMovie+`/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          token:sessionStorage.getItem("token")
        }
      });

      let data1 = await response.json();
      if (data1.message){
        Swal.fire({
          icon:"success",
          title:data1.message,
        })
      }
      else {
        Swal.fire({
          icon:"error"
        })
      }
  }
  return (
    <>
    <div>
      <img src={props.ele.Poster} alt="" />
      <h4>{props.ele.Title}</h4>
      <p>Year: {props.ele.Year}</p>
      <p>Imdb ID: {props.ele.imdbID}</p>
      <div>
      <button type="button" class="btn btn-danger" onClick={()=>{ deletemovie(props.ele._id) }}>Delete</button>
      </div>
    </div>
    
    </>
  )
}

export default Movie