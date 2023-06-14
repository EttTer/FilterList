import allMovies from "./data"
import { useState, useEffect } from "react"

export const App = () => {

 const [searchingText,setSearchingText]=useState("")
 const [filteredMovies,setFilteredMovies] =useState([])

 useEffect(()=>{

const moviesAfterFilter = allMovies.filter((oneMovie)=>{
  return oneMovie.title.toLocaleLowerCase().includes(searchingText.toLocaleLowerCase())
})
setFilteredMovies(moviesAfterFilter)

 },[searchingText])


  return (
    <div className="movies-box">
 <form>
  <input type="text" placeholder="Hledaný text" onChange={
    (e)=> setSearchingText (e.target.value)}/>
 </form>
    <div className="all-movies">
      {
        filteredMovies.map((oneMovie)=>{
          const {id, image, title, age, tags, description} =oneMovie

          return <div key={id} className="one-movie">
               <img src={image}/>
               <h2>{title}</h2>
               <p>{age}</p>
               <p>{tags}</p>
          </div>

        })
      }
    </div>

    </div>
  )
}
export default App