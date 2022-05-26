import React from 'react'

//utils
import facebookIcon from "../../assets/facebook-filled.png"
import instagramIcon from "../../assets/Instagram-filled.png"
import linkedinIcon from "../../assets/linkedin-fill.png"
import classes from "./ContactUs.module.scss"
import phone from "../../assets/phone.png"
import mail from "../../assets/mail.png"


const ContactUs = () => {
    return (
        <div className={classes.contact_us_container}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.

            <div className={classes.contact_us_icons}>
                <img src={facebookIcon} alt="facebook_icon"></img>
                <img src={instagramIcon} alt="instagram_icon"></img>
                <img src={linkedinIcon} alt="linkedin_icon"></img>

            </div>


            <div className={classes.contact_us_info}>

                <p >
                <img src={mail} alt="mail_icon"/>

                    <span>corporate@teamupsolutions.in</span>
                </p>
                <p>
                <img src={phone} alt="phone_icon"/>

                    <span>8194019679</span>
                </p>

            </div>
        </div>
    )
}

export default ContactUs