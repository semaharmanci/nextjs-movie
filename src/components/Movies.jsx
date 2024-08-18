"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ dt }) => {
  const router = useRouter()
  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className=" relative min-w-[458px] imgContainer">
      <Image style={{objectFit:"cover"}}
        width={458}
        height={300}
        className="rounded-sm"
        src={`https://image.tmdb.org/t/p/original/${
          dt?.backdrop_path || dt?.poster_path
        }`}
        alt=""
      />
      <div className="absolute bottom-0 p-3 text-white fs-2 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{dt?.title}</div>
        <div>
          {dt?.release_date} - <span className="text-amber-500">{dt?.vote_average}</span>
        </div>
      </div>
    </div>
  );
};

export default Movies;
