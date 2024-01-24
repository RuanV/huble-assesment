import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { PageLayout } from "../components/page-layout";
import { useParams } from "react-router-dom";
import Tag from "../components/tag";
import ImageSlider from "../components/image-slider";
import { motion } from "framer-motion";

const iconStyle = {
  maxHeight: "400px",
  width: "auto", // Maintain the aspect ratio
  margin: "30px",
};
export const DetailedMovie = () => {
  const { user } = useAuth0();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState(null);
  const [overviewtext, setOverview] = useState(null);
  console.log(process.env.BEARER_TOKEN);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
        setOverview(data.overview);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        setSimilar(data.results);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!user) {
    return null;
  }

  const BackIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M20 11H7.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L7.414 13H20a1 1 0 0 0 0-2z"
      />
    </svg>
  );

  return (
    <PageLayout>
      <div className="content-layout">
        <a
          href={"/movie"}
          className="auth0-feature__view-link back-button"
          rel="noopener noreferrer"
          style={{ fontSize: "30px" }}
        >
          <BackIcon /> Back
        </a>
        {movie && (
          <div>
            <h1
              id="page-title"
              className="content__title"
              style={{ fontSize: "40px" }}
            >
              {movie.title}
            </h1>
            <div
              className=""
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
                  "url(" +
                  `https://image.tmdb.org/t/p/original${movie.backdrop_path}` +
                  ")",
                padding: "20px",
              }}
            >
              <div style={{ backgroundColor: "rgba(0, 0, 0, 0,0) " }}>
                <table
                  style={{ backgroundColor: "rgba(0, 0, 0, 0,0) !important" }}
                >
                  <tr
                    style={{ backgroundColor: "rgba(0, 0, 0, 0,0)!important" }}
                  >
                    <td style={{ backgroundColor: "rgba(0, 0, 0, 0,0)" }}>
                      <div
                        className="movie-details-header"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0,0)" }}
                      >
                        <motion.div
                          transition={{
                            ease: "linear",
                            duration: 2,
                            delay: 3,
                            x: { duration: 1 },
                          }}
                        >
                          <div
                            className="movie-details-header-overlay"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0,0)" }}
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                              alt={movie.title}
                              className="movie-details-poster"
                              style={iconStyle}
                            />
                          </div>
                        </motion.div>
                      </div>
                    </td>
                    <td
                      style={{
                        fontSize: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0,0)",
                      }}
                    >
                      <div>
                        <table
                          style={{ backgroundColor: "rgba(0, 0, 0, 0,0)" }}
                        >
                          <tr>
                            {movie.genres.map((tag, index) => (
                              // eslint-disable-next-line react/jsx-key
                              <td
                                style={{
                                  margin: "8px",
                                  backgroundColor: "rgba(0, 0, 0, 0,0) ",
                                }}
                              >
                                <Tag key={index} label={tag.name} />
                              </td>
                            ))}
                          </tr>
                        </table>
                      </div>
                      <p className="movie-details-overview">
                        {overviewtext.split(" ").map((el, i) => (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 1,
                              delay: i / 10,
                            }}
                            key={i}
                          >
                            {el}{" "}
                          </motion.span>
                        ))}
                      </p>
                      <div className="movie-details-meta">
                        <p>
                          <strong>Release Date:</strong> {movie.release_date}
                        </p>
                        <p>
                          <strong>Run Time:</strong> {movie.runtime} minutes
                        </p>
                        <p>
                          <strong>Release Date:</strong> {movie.release_date}
                        </p>
                        <p>
                          <strong>Orignal Language:</strong>
                          {movie.original_language}
                        </p>
                        <p>
                          <strong>Popularity:</strong> {movie.popularity}
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <p style={{ fontSize: "20px" }}>
                      <strong>Rating:</strong> {movie.vote_average}
                    </p>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )}
        <h1
          id="page-title"
          className="content__title"
          style={{ fontSize: "40px", marginTop: "20px" }}
        >
          Similar Movies
        </h1>
        <span style={{ fontSize: "10px" }}>(scroll for effect)</span>
        {similar && <ImageSlider slides={similar} />}
      </div>
    </PageLayout>
  );
};

export default DetailedMovie;
