import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="buttons-container">
          <Link to="/players" className="players">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
