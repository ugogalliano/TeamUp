import React from "react";
import classes from "./Banner.module.scss";
import TeamUpSolution from "../../assets/teamupsolution1.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.banner__container}>
        <div rel="preload" className={classes.banner__img}>
          <LazyLoadImage
            src={TeamUpSolution}
            style={{ width: 500, height: 400 }}
            alt="banner_team_up"
          />
        </div>

        <div className={classes.banner__content}>
          <div className={classes.banner__title}>Team Up Solutions</div>
          <div className={classes.banner__subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
            pretium quam vulputate dignissim suspendisse in.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
