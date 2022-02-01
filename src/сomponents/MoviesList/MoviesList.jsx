import { fetchPopularFilms } from "../../service/Api/Api";
import { useState, useEffect } from "react";
import { Movies, Movie, MoviePoster } from "./FilmsList.styled";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const films = await fetchPopularFilms();
      setFilms(films);
    };
    fetch();
  }, []);
  return (
    <>
      <Movies>
        {films.map((film) => (
          <Movie key={film.id}>
            <Link to={`/${film.id}`}>
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
            </Link>
          </Movie>
        ))}
      </Movies>
      );
    </>
  );
}
