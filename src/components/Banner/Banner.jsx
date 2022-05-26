import React from 'react'
import classes from "./Banner.module.scss"
import teamUpSolution from "../../assets/teamupsolution1.svg"

const Banner = () => {
    return (
        <div className={classes.banner}>

            <div className={classes.banner__container}>

                <div className={classes.banner__img}>
                    <img src={teamUpSolution} alt="banner_team_up" style={{ maxWidth: "100%", height: "100%" }} />
                </div>

                <div className={classes.banner__content}>
                    <div className={classes.banner__title}>
                        Team Up Solutions
                    </div>
                    <div className={classes.banner__subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Banner