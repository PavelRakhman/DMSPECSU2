import React, {useContext} from "react";
import "./MainMovieList.css"
import { Favorite } from "./Favorite";
import { GlobalMoviecontext } from "../contexts/GlobalMovieContext";

export function Favorites()
{
    const{favorites} = useContext(GlobalMoviecontext)
return(
<div className="media-scroller snaps-inline">
{favorites.map((favorite,index)=>(<Favorite key={index} movie={favorite}></Favorite>))}
</div>

)
}