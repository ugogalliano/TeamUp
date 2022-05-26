import React from "react";
import classes from "./BannerTeam.module.scss";
import teamImage from "../../assets/teamImage.png"

const BannerTeam = () => {
  return (
    <div className={classes.banner_team}>
      <div className={classes.banner_description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam
        vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Risus pretium quam vulputate dignissim
        suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
        pretium quam vulputate dignissim suspendisse in.
      </div>

      <div className={classes.banner_team_img}>
      <img src={teamImage} alt="Immagine_Team">
          
          </img>
      </div>


    </div>
  );
};

export default BannerTeam;
