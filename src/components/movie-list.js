import React, { useState, useEffect } from "react";
import { MovieCard } from "./movie-card";
import { useAuth0 } from "@auth0/auth0-react";
import FilterBar from "./filter-bar";
import Pagination from "./pagination";
import { PageLoader } from "./page-loader";

export const MovieList = () => {
  const [featuresList, setFeaturesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalpages] = useState(1);

  const { isLoading } = useAuth0();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Add logic to fetch and display data for the selected page
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzJlMTUzODdhZDgzOTE4OTk5MTRjMGMwYjcyYzRmNiIsInN1YiI6IjY1YWUyYjI4ZjhhZWU4MDEwYjFmMmEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RkJ-Sq2statlgtO4dZsjF4oowAYSmbdYh78BMYWyc9o",
      },
    };

    if (searchTerm) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${currentPage}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // Example: Mapping movie data to featuresList structure
          setTotalpages(data.total_pages);
          const mappedFeaturesList = data.results.map((movie, index) => ({
            title: movie.title,
            description: movie.overview,
            id: movie.id, // Modify this URL as needed
            icon: "https://image.tmdb.org/t/p/original/" + movie.poster_path, // You may need to adjust this based on the actual data structure
          }));

          setFeaturesList(mappedFeaturesList);
        })
        .catch((err) => console.error(err));
    } else {
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currentPage}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTotalpages(data.total_pages);
          // Example: Mapping movie data to featuresList structure
          const mappedFeaturesList = data.results.map((movie, index) => ({
            title: movie.title,
            id: movie.id, // Modify this URL as needed
            icon: "https://image.tmdb.org/t/p/original/" + movie.poster_path, // You may need to adjust this based on the actual data structure
            date: movie.release_date,
          }));

          setFeaturesList(mappedFeaturesList);
        })
        .catch((err) => console.error(err));
    }
    console.log(totalpages);
  }, [searchTerm, currentPage, totalpages]);

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Lets View Our Movies</h2>
      <FilterBar onSearchChange={setSearchTerm} />

      <div className="auth0-features__grid">
        {featuresList.map((feature, index) => (
          <MovieCard
            key={index}
            title={feature.title}
            id={feature.id}
            date={feature.date}
            icon={feature.icon}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalpages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
