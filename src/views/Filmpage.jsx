import FilmInfo from "../сomponents/Filminfo/Filminfo";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams, Outlet } from "react-router-dom";
import { fetchFilmById } from "../service/Api/Api";
import { ImArrowLeft } from "react-icons/im";

import { BackButton, MovieLink } from "../styled/Styled";

export default function Filmpage() {
  const [film, setFilm] = useState("");
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const film = await fetchFilmById(movieId);
      setFilm(film);
    };
    fetch();
  }, [movieId]);

  const handleBackClick = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <>
      <BackButton onClick={handleBackClick}>
        <ImArrowLeft />
      </BackButton>

      <FilmInfo film={film} />
      <div>
        <MovieLink
          to={`/movies/${movieId}/cast`}
          state={{
            from: location?.state?.from ?? "/",
          }}
        >
          <span>Cast</span>{" "}
        </MovieLink>
        <MovieLink
          to={`/movies/${movieId}/reviews`}
          state={{ from: location?.state?.from ?? "/" }}
        >
          <span>Reviews</span>{" "}
        </MovieLink>
      </div>
      <Outlet />
    </>
  );
}
