import React ,{useState}from 'react'
import style from "./Component.module.css";
import Swal from 'sweetalert2'
import { postMovie } from '../utils/api';
function CreateMovie() {

    let submitMovie=async(event)=>{
        event.preventDefault();
        let obj ={}
        obj.Title = document.querySelector("#Title").value;
        document.querySelector("#Title").value ="";
        obj.Year = document.querySelector("#Year").value;
        document.querySelector("#Year").value ="";
        obj.imdbID = document.querySelector("#imdbID").value;
        document.querySelector("#imdbID").value="";
        obj.Type = document.querySelector("#Type").value;
        document.querySelector("#Type").value="";
        obj.Poster = document.querySelector("#Poster").value;
        document.querySelector("#Poster").value="";

        let response = await fetch(postMovie,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                token:sessionStorage.getItem("token")
            },
            body:JSON.stringify(obj)
        });


        if (response.status==201){
            Swal.fire({
                icon:"success",
            })
        }
        else {
            Swal.fire({
                icon:"error",
                title:"Error Uplocading Data"
            })
        }

    }
  return (
    <>
     <div className={style.upper_button}>
    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Create Movie</button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Create Movie</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className="row g-3 needs-validation">

            <div className="mb-3">
              <label htmlFor="Title" className="form-label">Title</label>
              <input type="String" className="form-control" id="Title" required="true" />
            </div>
            <div className="mb-3">
              <label htmlFor="Year" className="form-label">Year</label>
              <input type="number"  min="1900" max="2024" className="form-control" id="Year" placeholder='Year' required="true" />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">ImdbID</label>
             <input type="string" className="form-control" id="imdbID" placeholder='Enter N/A if None' required="true" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Type</label>
              <select class="form-select" aria-label="Default select example" id='Type' >
                    <option selected>Open this select menu</option>
                    <option value="Movie">Movie</option>
                    <option value="Webseries">Web Series</option>
                </select>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Poster Link</label>
             <input type="string" className="form-control" id="Poster" required="true"/>
            </div>
            <button type="submit" className="btn btn-primary" style={{width:"fit-content"}} onClick={submitMovie}>Create</button>
            </form>


            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default CreateMovie