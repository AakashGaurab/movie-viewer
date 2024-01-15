import React ,{useState,useEffect}from 'react'
import Navbar from '../../component/Navbar'
import style from './Home.module.css'
import Movie from '../../component/Movie';
import CreateMovie from '../../component/CreateMovie';
import { allMovie } from '../../utils/api';

function Home() {
  let [movie,setMovies] = useState(null);
  useEffect(()=>{
    async function getData(){
      let response = await fetch(allMovie,{
        method:"GET",
        headers:{
          "Content-type":"application/json",
          token:sessionStorage.getItem("token")
        }
      });
      let data = await response.json();
      setMovies(data);
    }

    getData();
  },[])
  return (
    <>
    <Navbar/>
    <CreateMovie/>
    
     <div class={style.dis}>

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