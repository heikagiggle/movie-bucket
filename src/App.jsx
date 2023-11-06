// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movielist/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList/>
    </div>
  );
};

export default App;
