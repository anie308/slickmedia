import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import MovieList from "../Components/MovieList";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
   
    const getMovie = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=721a7429`;
        const response = await fetch(url);
        const responseJson = await response.json();
      
       
        setMovies(responseJson.Search);
      };
      
      useEffect(() => {
        getMovie(searchValue);
      }, [searchValue]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-col space-y-5">
        <MovieList movies={movies} setMovies={setMovies} />
        {/* <MovieList2 movies={movies} setMovies={setMovies} /> */}
      </div>
    </div>
  );
}

export default Home;
