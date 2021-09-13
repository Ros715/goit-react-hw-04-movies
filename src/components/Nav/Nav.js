import React from "react";
import { Link /*, Route, Redirect, BrowserRouter*/ } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/movies">Movies</Link>
        </button>
      </div>
    );
  }
}

export default Nav;
