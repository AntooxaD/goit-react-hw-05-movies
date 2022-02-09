import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./сomponents/Navigation/Navigation";
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Container } from "./styled/Styled";

const Homepage = lazy(() => import("./views/Homepage"));
const Filmpage = lazy(() => import("./views/Filmpage"));
const Moviespage = lazy(() => import("./views/Moviespage"));
const FilmCasts = lazy(() => import("./сomponents/Cast/Cast"));
const FilmReviews = lazy(() => import("./сomponents/Revievws/Rewiews"));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="movies">
          <Route index element={<Moviespage />}></Route>
          <Route path=":movieId" element={<Filmpage />}>
            <Route path="cast" element={<FilmCasts />}></Route>
            <Route path="reviews" element={<FilmReviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} replace={true} />} />
      </Routes>
    </Container>
  );
}
