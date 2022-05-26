import React from 'react'
import classes from "./TitleSection.module.scss"

const TitleSection = ({ title, id,color }) => {
    return (
        <div className={classes.title__section__container} style={{color:color}} id={id}>
            {title}
        </div>
    )
}

export default TitleSection