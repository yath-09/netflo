"use client";

import { baseImgUrl } from "@lib/constants";
import { Movie } from "../lib/type";
import { useState } from "react";


const MovieCard = ({ movie }: { movie: Movie }) => {


  return (
    <>
      <div className="relative h-24 min-w-48 sm:h-32 sm:min-w-60 md:h-36 md:min-w-72 cursor-pointer hover:outline-white" >
        <img
          src={
            movie?.backdrop_path || movie?.poster_path
              ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
              : "/assets/no-image.png"
          }
          className="object-cover w-full h-full rounded-lg"
          alt={movie?.title || movie?.name}
        />
        <div className="absolute inset-0 rounded-lg border-2 border-transparent hover:border-white"></div>
      </div>

      
    </>
  );
};

export default MovieCard;