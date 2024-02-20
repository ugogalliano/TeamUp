import React from "react";
import classes from "./BannerTeam.module.scss";
import TeamImage from "../../assets/teamImage.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <LazyLoadImage
          src={TeamImage}
          style={{ width: "200px", height: "200px" }}
          alt="Immagine_Team"
        />
      </div>
    </div>
  );
};

export default BannerTeam;
