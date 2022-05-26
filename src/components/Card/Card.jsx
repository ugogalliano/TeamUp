import React from 'react'
import classes from "./Card.module.scss"

//utils
import cryptoImage from "../../assets/cryptocurrency.png"
import { AnimatePresence, motion } from "framer-motion"
const Card = () => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 300
                }}
                transition={{
                    duration: 0.6
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}
                exit={{
                    opacity: 0,
                    x: 300
                }}
                key={"card"} className={classes.card_container}>

                <img src={cryptoImage} alt="crypto_image" />

                <div className={classes.card_title}>
                    OUTBOUND SERVICES
                </div>
                <div className={classes.card_content}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in.
                </div>



            </motion.div>
        </AnimatePresence>

    )
}

export default Card