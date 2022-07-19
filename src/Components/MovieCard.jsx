import React from 'react'

function MovieCard({movie}) {
  return (
    <div className='max-w-[300px] min-h-[300px] max-h-[300px] '>
     <div className=''> <img src={movie.Poster} alt="" className='max-w-[300px] min-h-[300px] max-h-[300px]'/></div>
    </div>
  )
}

export default MovieCard