import { log } from "console";
import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=81575db8643566cf1ba326b927e51b9a&language=en-US&page=1`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  return (
    <div className="relative p-10 min-h-screen">
      <Image
        fill
        style={{ objectFit: "cover" }}
        className="rounded-sm p-5"
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt=""
      />
      <div className="absolute">
        <div className="text-xl text-gray-200 font-bold my-3">{movieDetail?.title}</div>
        <div className="text-amber-200 w-1/2">{movieDetail?.overview}</div>
        <div className="text-gray-900 my-3">{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
        <div className="my-2 border w-24 hover:bg-white hover:text-black transition-colors p-2 rounded-md text-center text-lg cursor-pointer">Trail</div>
      </div>
    </div>
  );
};

export default Page;
