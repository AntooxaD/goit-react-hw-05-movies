import FilmInfo from "../сomponents/Filminfo/Filminfo";
import { useState, useEffect } from "react";
import {
  useNavigate,
  useLocation,
  useParams,
  Route,
  Outlet,
} from "react-router-dom";
import { fetchFilmById } from "../service/Api/Api";
import { ImArrowLeft } from "react-icons/im";
import FilmCasts from "../сomponents/Cast/Cast";
import FilmReviews from "../сomponents/Revievws/Rewiews";
import { BackButton, MovieLink } from "../styled/Styled";

export default function Filmpage() {
  const [film, setFilm] = useState("");
  const { url } = Outlet();
  const { filmId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const film = await fetchFilmById(filmId);
      setFilm(film);
    };
    fetch();
  }, [filmId]);
  const history = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    history.push(location.state?.from ? location.state?.from : "/");
  };

  return (
    <>
      <BackButton onClick={handleBackClick}>
        <ImArrowLeft />
        Go back
      </BackButton>

      <FilmInfo film={film} />
      <div>
        <MovieLink
          to={{
            pathname: `${url}/cast`,
            state: {
              from: location?.state?.from ?? "/",
            },
          }}
        >
          <span>Cast</span>{" "}
        </MovieLink>
        <MovieLink
          to={{
            pathname: `${url}/reviews`,
            state: {
              from: location?.state?.from ?? "/",
            },
          }}
        >
          <span>Reviews</span>{" "}
        </MovieLink>
      </div>
      <Route path={`${url}/cast`}>
        <FilmCasts id={filmId} />
      </Route>
      <Route path={`${url}/reviews`}>
        <FilmReviews id={filmId} />
      </Route>
    </>
  );
}
