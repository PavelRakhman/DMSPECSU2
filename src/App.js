import React from "react";
import { GlobalMoviecontextProvider } from "./contexts/GlobalMovieContext";
import "./styles.css"
//component import
import { TopNav } from "./components/TopNav";
import { MainMovieList } from "./components/MainMovieList";
import { Favorites } from "./components/Favorites";
function App() {
  return (
    <GlobalMoviecontextProvider>
    <TopNav></TopNav>
    <h3 className="MainListHeading">Movies</h3>
    <MainMovieList></MainMovieList>
    <h3 className="FavoriteListHeading">Favorites</h3>
    <Favorites></Favorites>
    </GlobalMoviecontextProvider>
  );
}

export default App;
