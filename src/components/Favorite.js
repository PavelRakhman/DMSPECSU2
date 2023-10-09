import React, {useContext} from "react";
import "./MediaElement.css"
import { GlobalMoviecontext } from "../contexts/GlobalMovieContext";
import { Favorites } from "./Favorites";

export function Favorite({movie})
{
    const{favorites,setFavorites}=useContext(GlobalMoviecontext)
    
    const clickHandler =(movieObject)=>{
        if(favorites.length>0)
        {
            console.clear()
        setFavorites(favorites.filter((favorite)=>favorite!==movieObject))
        console.log(favorites)
        }
    }
    return(
        <div className="MediaElement">
        <p className="MovieTitle">{movie.Title}</p>
        <p className="MovieYear">{movie.Year}</p>
        <img className="MoviePoster" src={movie.Poster} alt="poster"></img>
        <div className="controlls">
        <button className="RemoveFromFavourites" onClick={()=>clickHandler(movie)}>Remove from Favorites</button>
        </div>
        </div>    
    )
}