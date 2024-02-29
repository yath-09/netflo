"use client"

import { Genre,Movie,Video } from "../lib/type"
import { useEffect, useState } from "react";
import { AddCircle, CancelRounded, RemoveCircle } from "@mui/icons-material";

interface Props{
    movie:Movie;
    closeModal:()=>void;
}


const Modal = ({movie,closeModal}:Props) => {

  const [video,setVideo]=useState("");
  const [genres, setGenres] = useState<Genre[]>([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    },
  };
  const getMovieDetails = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/movie/${movie.id}?append_to_response=videos`,
        options
      );
      const data = await res.json();

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (video: Video) => video.type === "Trailer"
        );
        setVideo(data.videos.results[index].key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }

      
    } catch (err) {
      console.log("Error fetching movie details", err);
    }
  };
  
  useEffect(()=>{
    getMovieDetails();
  },[movie]);

  return (
   
    <div className="fixed inset-0 z-30 bg-black-1 bg-opacity-90 w-full max-w-2xl mx-auto overflow-hidden overflow-y-scroll scrollbar-hide rounded-xl">
        <button className="absolute right-5 top-5 z-40" onClick={closeModal}>
        <CancelRounded
          sx={{ color: "white", fontSize: "35px", ":hover": { color: "red" } }}
        />
        </button>

        <iframe
        src={`https://www.youtube.com/embed/${video}?loop=1&autoplay=1&mute=1`}
        className="top-0 left-0 w-full h-3/5"
        loading="lazy"
        allowFullScreen
        />
        
        <div className="text-white flex flex-col gap-3 p-6">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <p className="text-base-bold">Name:</p>
                    <p className="text-base-light">{movie?.title || movie?.name}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-base-bold">Add To List</p>    
                    <AddCircle
                        className="cursor-pointer text-red-500"
                    />
                </div>
                </div>

                <div className="flex gap-2">
                <p className="text-base-bold">Release Date:</p>
                <p className="text-base-light">{movie?.release_date}</p>
                </div>

                <p className="text-base-light">{movie?.overview}</p>

                <div className="flex gap-2">
                <p className="text-base-bold">Rating:</p>
                <p className="text-base-light">{movie?.vote_average}</p>
                </div>

                <div className="flex gap-2">
                <p className="text-base-bold">Genres:</p>
                <p className="text-base-light">
                    {genres.map((genre) => genre.name).join(", ")}
                </p>
            </div>
      </div>
       
       


    </div>
  )
}

export default Modal