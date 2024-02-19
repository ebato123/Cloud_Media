import { useState } from "react";
import axios from "axios";

import { apiContext } from "./apiContext";

export default function MDBApiComp({ children }) {
  //API CONSTs
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "8e68a9f78645e907e68328294fcb233c";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  //state variables
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [playing, setPlaying] = useState(false);

  //GET function (API)
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);
  };

  //SearchMovie function
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <apiContext.Provider
      value={{
        API_URL,
        API_KEY,
        IMAGE_PATH,
        URL_IMAGE,
        movies,
        setMovies,
        searchKey,
        setSearchKey,
        trailer,
        setTrailer,
        movie,
        setMovie,
        playing,
        setPlaying,
        fetchMovies,
        searchMovies,
      }}
    >
      {children}
    </apiContext.Provider>
  );
}
