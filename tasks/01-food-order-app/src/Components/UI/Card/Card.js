import React from "react";
import style from './Card.module.css'

const Card = props => {
    return (
        <section className={`${props.className} ${style.card}`}>
            {props.children}
        </section>
    )
}

export default Card