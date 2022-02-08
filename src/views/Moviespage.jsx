import SearchBar from "../сomponents/SearchBar/SearchBar";
import { fetchByQuery } from "../service/Api/Api";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  StyledLoader,
  Movies,
  Movie,
  MovieLink,
  MoviePoster,
} from "../styled/Styled";

export default function Moviespage() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState("idle");
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetch = async () => {
      try {
        if (query) {
          setStatus("pending");
          const films = await fetchByQuery(query);
          setFilms(films);
          setStatus("resolved");
          if (films.length === 0) {
            throw new Error();
          }
        }
      } catch {
        toast.error("Сan't find such a movie");
      }
    };
    fetch();
  }, [query]);
  if (status === "idle" || status === "resolved") {
    return (
      <>
        <SearchBar />
        <ToastContainer />
        <Movies>
          {films.map((film) => (
            <Movie ey={film.id}>
              <MovieLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: `/movies/?query=${query}` },
                }}
              >
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                  onError={(e) => {
                    e.target.src =
                      "https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg";
                  }}
                />
                <p>{film.title}</p>
              </MovieLink>
            </Movie>
          ))}
        </Movies>
      </>
    );
  }
  if (status === "pending") {
    return <StyledLoader type="Rings" color="gray" />;
  }
}
