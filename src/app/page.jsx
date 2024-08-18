
import React from "react";
import Movies from "../components/Movies"

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre
        ? "movie/" + searchParams.genre
        : "trending/all/day"
    }?api_key=81575db8643566cf1ba326b927e51b9a&language=en-US&page=1`,
    {
      next: { revalidate: 10000 },
    }
  );

  const data = await res.json();
  

  return <div className=" flex items-center flex-wrap gap-3 m-5">
    {
        data?.results?.map((dt,i)=>(
            <Movies key={i} dt={dt}/>
        ))
    }
  </div>;
};

export default Page;
