import React from "react";

export const HeroBanner = () => {
  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <h1 className="hero-banner__headline">Hello</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Auth0</strong> to show Third Party
        Authentication integration and industry standard.
      </p>
      <p className="hero-banner__description">
        I have also added is the movie integration for
        https://www.themoviedb.org/.
      </p>
    </div>
  );
};
