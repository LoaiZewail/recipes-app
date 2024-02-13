import React from 'react'
import style from "../style.module.scss"
import { Link } from 'react-router-dom'

export default function ResultCard({ recipe }) {

    return (
        <div className={style.ResultCard}>
            <Link to={`/recipes/${recipe.id}`}>
                <div className={style.ResultCard__card}>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className={style.ResultCard__card__title}>{recipe.title}</div>
                    <div className={style.ResultCard__card__more}>Read more...</div>
                </div>
            </Link>
        </div>
    )
}
