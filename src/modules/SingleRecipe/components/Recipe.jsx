import React from 'react'
import style from '../style.module.scss'

export default function Recipe({ recipe }) {

    return (
        <div className={style.Recipe}>

            <div className={style.Recipe__header}>
                <div className={style.Recipe__header__title}>
                    <h1>{recipe.title}</h1>
                    <div className={style.Recipe__header__title__stats}>
                        <div>Cook Time: {recipe.readyInMinutes} mins</div>
                        <div>Servings: {recipe.servings}</div>
                    </div>
                </div>
                <div className={style.Recipe__header__img}>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            </div>

            <div className={style.Recipe__summary}>
                <div className={style.Recipe__summary__title}>
                    Summary
                </div>
                <div className={style.Recipe__summary__desc}>
                    <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                </div>
            </div>

            <div className={style.Recipe__ingredients}>
                <div className={style.Recipe__ingredients__title}>
                    Ingredients
                </div>
                <ul>
                    {recipe.extendedIngredients.map((i, index) => (
                        <li key={index}> &#x2022; {i.original}</li>
                    ))}
                </ul>
            </div>

            <div className={style.Recipe__steps}>
                <div className={style.Recipe__steps__title}>
                    Directions
                </div>
                <div className={style.Recipe__steps__desc}>
                    {recipe.analyzedInstructions[0].steps.map((i, index) => (
                        <div key={index} className={style.Recipe__steps__desc__item}>
                            <p>Step {i.number}</p>
                            {i.step}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
