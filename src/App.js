import React from "react";
import { Route, Redirect, /* Switch,*/ BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage.js";
import MoviesPage from "./components/MoviesPage/MoviesPage.js";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.js";
//import Cast from "./components/Cast/Cast.js";
//import Reviews from "./components/Reviews/Reviews.js";
import Nav from "./components/Nav/Nav.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={Nav} />
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Redirect to="/" />
      </BrowserRouter>
    );
  }
}

export default App;
