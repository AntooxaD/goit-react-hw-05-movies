import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./сomponents/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Container, StyledLoader } from "./styled/Styled";

const Homepage = lazy(() => import("./views/Homepage"));
const Filmpage = lazy(() => import("./views/Filmpage"));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<StyledLoader type="Rings" color="gray" />}>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/movies/:filmId" element={<Filmpage />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
