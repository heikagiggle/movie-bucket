// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilteredGroup from "./FilteredGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMoviews();
  }, []);

  useEffect(() => {
    if(sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
      setFilterMovies(sortedMovies)
    }
  }, [filterMovies, sort])

  const fetchMoviews = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=651f4fe8f6712966a1732d91d1ec7a2f"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    // to select all the movies to show
    if (rate === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <section className="movie_list">
        <header className="align_center movie_list_header">
          <h2 className="align_center movie_list_heading">
            Popular <img src={fire} alt="fire" className="navbar_emoji" />
          </h2>

          <div className="align_center movie_list_fs">
            <FilteredGroup
              minRating={minRating}
              onRatingClick={handleFilter}
              ratings={[8, 7, 6]}
            />

            <select
              name="by"
              id=""
              onChange={handleSort}
              value={sort.by}
              className="movie_sorting"
            >
              <option value="default">SortBy</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>
            <select
              name="order"
              id=""
              onChange={handleSort}
              value={sort.order}
              className="movie_sorting"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          {/*fs= filter and sorting  */}
        </header>

        <div className="movie_cards">
          {filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieList;
