import React, {useContext} from "react";
import "./MediaElement.css"
import { GlobalMoviecontext } from "../contexts/GlobalMovieContext";

export function MediaElement({movie})
{
    const{favorites, setFavorites} = useContext(GlobalMoviecontext)
    const clickHandler=(movieObject)=>
    {
        if(favorites.includes(movieObject)==false)
        {
            console.clear()
        setFavorites([...favorites,movieObject])
console.log(favorites)
        }
        else{
            alert("The movie is already in the favorites")
        }


    }
    return(
        <div className="MediaElement">
        <p className="MovieTitle">{movie.Title}</p>
        <p className="MovieYear">{movie.Year}</p>
        <img className="MoviePoster" src={movie.Poster} alt="poster"></img>
        <div className="controlls">
        <button className="AddToFavourites" onClick={()=>clickHandler(movie)}>Add to Favorites</button>
        </div>
        </div>    
    )
}

