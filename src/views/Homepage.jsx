import { fetchPopularFilms } from "../service/Api/Api";
import { useState, useEffect } from "react";
import {
  Movies,
  Movie,
  MovieLink,
  MoviePoster,
  StyledLoader,
} from "../styled/Styled";

export default function Homepage() {
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetch = async () => {
      setStatus("pending");
      const films = await fetchPopularFilms();
      setFilms(films);
      setStatus("resolved");
    };
    fetch();
  }, []);
  if (status === "resolved" || status === "idle") {
    return (
      <Movies>
        {films.map((film) => (
          <Movie key={film.id}>
            <MovieLink to={`movies/${film.id}`}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.name}
                width="50px"
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
    );
  }
  if (status === "pending") {
    return <StyledLoader type="Rings" color="gray" />;
  }
}
