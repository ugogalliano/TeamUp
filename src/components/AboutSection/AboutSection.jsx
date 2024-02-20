import React from "react";
import classes from "./AboutSection.module.scss";
import Girl from "../../assets/girl.png";
import facebookFilled from "../../assets/facebook-filled.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutSection = () => {
  return (
    <div className={classes.about_section_container}>
      <div className={classes.about_section_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam
        vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Risus pretium quam vulputate dignissim
        suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
        pretium quam vulputate dignissim suspendisse in.
      </div>

      <div className={classes.about_img_container}>
        <LazyLoadImage
          src={Girl}
          style={{ borderRadius: "100%", height: "150px", width: "150px" }}
          alt="ragazza"
        />

        <div className={classes.about_information}>
          <p>Purnima Rakholia</p>
          <span>Founder</span>

          <img src={facebookFilled} alt="facebook_icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
