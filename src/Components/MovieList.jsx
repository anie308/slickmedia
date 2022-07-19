import React from "react";
// import { movies } from "../data"; 
import MovieCard from "./MovieCard";
import "./style.css";



function MovieList({movies }) {
    
  
  return (
   <div className="mx-[20px] mb-[40px]">
     <div className="flex items-center space-x-4  overflow-x-auto scrol">
      {movies?.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
   </div>
  );
}
//

export default MovieList;
