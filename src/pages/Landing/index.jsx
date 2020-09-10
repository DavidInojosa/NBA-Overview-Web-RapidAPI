import React from "react";
import { Link } from "react-router-dom";

import goldenimg from "../../assets/images/Golden_State_Warriors.svg";
import bostonimg from "../../assets/images/Boston_Celtics.png";
import atlantaimg from "../../assets/images/Atlanta_Hawks.png";
import utahimg from "../../assets/images/Utah_Jazz.png";
import torontoimg from "../../assets/images/Toronto_Raptors.png";
import sanimg from "../../assets/images/San_Antonio_Spurs.png";
import sacramentoimg from "../../assets/images/Sacramento_Kings.png";
import portlandimg from "../../assets/images/Portland_TrailBlazers.png";
import phoeniximg from "../../assets/images/Phoenix_Suns.png";
import philadelphiaimg from "../../assets/images/Philadelphia.png";
import orlandoimg from "../../assets/images/Orlando_Magic.png";
import oklahomaimg from "../../assets/images/Oklahoma_City_Thunder.png";
import nYimg from "../../assets/images/New_York_Knicks.png";
import newOrleansimg from "../../assets/images/New_Orleans_Pelicans.png";
import minnesotaimg from "../../assets/images/Minnesota_Timberwolves.png";
import milimg from "../../assets/images/Milwaukee_Bucks.png";
import miamiimg from "../../assets/images/Miami_Heat.png";
import mephisimg from "../../assets/images/Memphis_Grizzlies.png";
import lakersimg from "../../assets/images/Los_Angeles_Lakers_logo.png";
import laclippersimg from "../../assets/images/Los_Angeles_Clippers.png";
import washinghtonimg from "../../assets/images/Washington_Wizards.png";
import indianaimg from "../../assets/images/Indiana_Pacers.png";
import houstonimg from "../../assets/images/Houston_Rockets.png";
import detroitimg from "../../assets/images/Detroit_Pistons.png";
import denverimg from "../../assets/images/Denver_Nuggets.png";
import dallasimg from "../../assets/images/Dallas_Mavericks.png";
import clevelandimg from "../../assets/images/Cleveland_Cavaliers.png";
import chicagoimg from "../../assets/images/Chicago_Bulls.png";
import charlotteimg from "../../assets/images/Charlotte_Hornets.png";
import brooklynimg from "../../assets/images/Brooklyn_Nets.png";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="images-container-top">
          <img src={utahimg} alt="Atlanta" />
          <img src={brooklynimg} alt="Atlanta" />
          <img src={charlotteimg} alt="Atlanta" />
          <img src={chicagoimg} alt="Atlanta" />
          <img src={dallasimg} alt="Atlanta" />
          <img src={clevelandimg} alt="Atlanta" />
          <img src={denverimg} alt="Atlanta" />
          <img src={detroitimg} alt="Atlanta" />
          <img src={houstonimg} alt="Atlanta" />
          <img src={indianaimg} alt="Atlanta" />
          <img src={washinghtonimg} alt="Atlanta" />
          <img src={laclippersimg} alt="Atlanta" />
          <img src={mephisimg} alt="Atlanta" />
          <img src={miamiimg} alt="Atlanta" />
          <img src={milimg} alt="Atlanta" />
        </div>
        <div className="buttons-container">
          <Link to="/main" className="main">
            Entrar
          </Link>
        </div>
        <div className="images-container-bot">
          <img src={atlantaimg} alt="Atlanta" />
          <img src={lakersimg} alt="Atlanta" />
          <img src={minnesotaimg} alt="Atlanta" />
          <img src={newOrleansimg} alt="Atlanta" />
          <img src={nYimg} alt="Atlanta" />
          <img src={oklahomaimg} alt="Atlanta" />
          <img src={orlandoimg} alt="Atlanta" />
          <img src={philadelphiaimg} alt="Atlanta" />
          <img src={phoeniximg} alt="Atlanta" />
          <img src={portlandimg} alt="Atlanta" />
          <img src={sacramentoimg} alt="Atlanta" />
          <img src={sanimg} alt="Atlanta" />
          <img src={torontoimg} alt="Atlanta" />
          <img src={bostonimg} alt="Atlanta" />
          <img src={goldenimg} alt="Atlanta" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
