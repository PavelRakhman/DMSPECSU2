import React, {useContext, useEffect} from "react";
import LogoImage from "./LIF.png"
import { GlobalMoviecontext } from "../contexts/GlobalMovieContext";
export const TopNav = ()=>{
const {searchValue, setSearchValue,movies,setMovies} = useContext(GlobalMoviecontext)
    
const getMovie =async()=>{
    const URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=2b8195cf`
    const response= await fetch(URL)
    const responseJSON = await response.json()
    if(responseJSON.Search)
    {
        console.clear()
        setMovies(responseJSON.Search)
        console.log(responseJSON.Search)
    }    
}

useEffect(()=>{
    console.clear()
    getMovie()
}, [searchValue])


return(
    <nav className="TopNav">
    <div className="Logo-Container">
    <img src={LogoImage} alt="LOGO"></img>
    </div>
    <input className="searchBox" type="text" value = {searchValue} onChange={(event)=>setSearchValue(event.target.value)} placeholder="type to search"></input>
    </nav>
)    
}