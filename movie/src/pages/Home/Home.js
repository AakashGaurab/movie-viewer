import React ,{useState,useEffect}from 'react'
import Navbar from '../../component/Navbar'
import style from './Home.module.css'
import Movie from '../../component/Movie';
import CreateMovie from '../../component/CreateMovie';
import { allMovie } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import Loader from '../../component/Loader';   // importing loader

function Home() {
  let id = sessionStorage.getItem("token");
  if (!id){
    window.location.href="/login";
  }


  let [movie,setMovies] = useState(null);
  let [flag,setFlag] = useState(false);
  useEffect(()=>{
    async function getData(){
      try {              // try catch to handle error
        setFlag(true);   // to display loader
        let response = await fetch(allMovie,{
          method:"GET",
          headers:{
            "Content-type":"application/json",
            token:sessionStorage.getItem("token")
          }
        });
        let data = await response.json();
        setMovies(data);
        setFlag(false);  // to turn off loader
      } catch (error) {
        Swal.fire({
          icon:"error",
          title:error
        })
      }
    }

    getData();
  },[])

  let searchMovie=async()=>{
    let searchText = document.querySelector("#search").value;
    if (searchText==""){
      Swal.fire({
        icon:"info",
        title:"Empty Search"
      })
      return;
    }
    try {
      setFlag(true);
      let response = await fetch(`https://www.omdbapi.com/?apikey=894a101c&s="${searchText}&page=1"`);
      let data = await response.json();
      console.log(data);
      setMovies(data.Search);
      setFlag(false);
    } catch (error) {
      Swal.fire({
        icon:"error",
        title:error
      })
    }
    
  }
  return (
    <>
    <Navbar/>

    <div className={style.search}>
      <input  placeholder="Search Movies"  aria-describedby="basic-addon2" id='search'/>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" style={{color: "#171716",cursor:"pointer"}} onClick={searchMovie}/>
    </div>
    
    <CreateMovie/>
    
     <div class={style.dis}>

     {flag?Loader:""}
     {movie && movie.map((element)=>{
      return (
      <Movie ele={element} />
      )
     })}


     </div>
    </>
  )
}

export default Home