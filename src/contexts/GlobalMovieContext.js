import React, {createContext, useState} from "react";
export const GlobalMoviecontext = createContext()

export const GlobalMoviecontextProvider =(props)=>{
const [movies, setMovies] =useState([])
const [favorites, setFavorites] = useState([])
const [searchValue,setSearchValue]=useState("")



return(
    <GlobalMoviecontext.Provider value={{movies, setMovies, favorites,setFavorites,searchValue,setSearchValue}}>
    {props.children}
    </GlobalMoviecontext.Provider>
)


}