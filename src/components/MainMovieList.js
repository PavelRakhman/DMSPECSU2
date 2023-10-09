import React, {useContext} from "react";
import "./MainMovieList.css"
import { MediaElement } from "./MediaElement";
import { GlobalMoviecontext } from "../contexts/GlobalMovieContext";
export function MainMovieList()
{
    const {movies} =useContext(GlobalMoviecontext)
return(
    <div className="media-scroller snaps-inline">
    {movies.map((movie,index)=>(<MediaElement movie={movie} key={index}></MediaElement>))}
    </div>    
    )

}