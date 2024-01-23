import React from "react";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>
                The assessment reveals the need for integration, specifically
                focusing on Auth0 authentication for secure user data storage.
                Additionally, there is a requirement for seamless integration
                with the Movie API. &nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
