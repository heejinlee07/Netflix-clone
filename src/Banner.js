import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import {
  BannerHeader,
  BannerContents,
  BannerTitle,
  BannerDescription,
  BannerButtons,
  BannerButton,
  BannerFadeSection,
} from "./Banner.styles";

function Banner() {
  // everytime appear random movie
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // index 값은 length보다 항상 1작음. array의 마지막 값을 구하기.
      console.log(
        "2",
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log("mv", movie);

  //영화 description 글자수 조정
  function truncate(str, n) {
    return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <BannerHeader
      imageUrl={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
    >
      <BannerContents>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
      </BannerContents>
      <BannerFadeSection />
    </BannerHeader>
  );
}

export default Banner;
