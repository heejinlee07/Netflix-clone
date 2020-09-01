import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import { RowBlock, RowPosters, RowPoster } from "./Row.styles";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //whenever click on thumbnail, capture the trailer url
  const [trailerUrl, setTrailerUrl] = useState("");

  // A snippet of code which runs based on a specific condition
  useEffect(() => {
    // if [], run once then the row loads, and dont run again
    // if [movies], everytime movies cheange,run
    //async
    async function fetchData() {
      // when i make this request, wait for the promise to come back
      if (!fetchUrl) return;
      const request = await axios.get(fetchUrl);
      // console.log("request", request);
      // console.log("request.data.results", request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //key- using a variable which is being passed from outside of the block
  }, [fetchUrl]);

  // console.table(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    //when user click movie
    console.log(movie);
    console.log("hi");
    // name이 없을때는 ""
    movieTrailer(movie?.name || "")
      .then((url) => {
        //task- urlparams 관련
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(url);
        setTrailerUrl(urlParams.get("v"));
        console.log(urlParams);
      })
      .catch((error) => {
        setTrailerUrl(null);
        alert("no trailer found");
        console.log(error.message);
      });
  };

  return (
    <RowBlock>
      {/* title */}
      <h2>{title}</h2>
      <RowPosters>
        {movies.map((movie) => (
          <RowPoster
            isLargeRow={isLargeRow}
            key={movie.id}
            onClick={() => handleClick(movie)}
            // className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </RowPosters>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </RowBlock>
  );
}

export default Row;

/**
 * note-
 * isLargeRow : app에서 isLargeRow={true}라고 넘겨준 props
 * isLargeRow ? movie.poster_path : movie.backdrop_path
 * 위의 조건식에 따라 isLargeRow가 true면 poster_path의 그림을 보여주고,
 * 아니라면 backdrop_path를 보여준다. app에서는 row 중 netflix original에서만
 * isLargeRow를 props로 넘겨주고 있으므로 해당 항목만 poster_path로 보여진다.
 * className도 마찬가지로 isLargeRow가 있느냐 없느냐에 따라 결정됨.
 */
