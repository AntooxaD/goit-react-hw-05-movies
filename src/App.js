import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./сomponents/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Container, StyledLoader } from "./сomponents/Styled/Styled";

const Homepage = lazy(() => import("./views/Homepage"));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<StyledLoader type="ThreeDots" color="gray" />}>
        <Routes>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
