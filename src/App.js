import React, { Suspense, lazy } from "react";
import { Route, Redirect, /* Switch,*/ BrowserRouter } from "react-router-dom";
import "./App.css";
/*
import HomePage from "./components/HomePage/HomePage.js";
import MoviesPage from "./components/MoviesPage/MoviesPage.js";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.js";
//import Cast from "./components/Cast/Cast.js";
//import Reviews from "./components/Reviews/Reviews.js";
import Nav from "./components/Nav/Nav.js";
*/

const Nav = lazy(() => import("./components/Nav/Nav.js"));
const HomePage = lazy(() => import("./components/HomePage/HomePage.js"));
const MoviesPage = lazy(() => import("./components/MoviesPage/MoviesPage.js"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage.js")
);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Route component={Nav} />
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
