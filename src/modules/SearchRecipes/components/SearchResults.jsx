import React from 'react'
import style from "../style.module.scss"
import ResultCard from './ResultCard';
import { Link } from 'react-router-dom';

export default function SearchResults({ data }) {

    return (

        <div className={style.SearchResults}>
            {
                data?.results.length > 0 ?
                    <div className={style.SearchResults__data}>
                        {data.results.map((recipe) => {
                            return (
                                <ResultCard key={recipe.id} recipe={recipe} />)
                        })}
                    </div>
                    :
                    <div className={style.SearchResults__noData}>
                        No results found
                        <Link to={"/"} className={style.SearchResults__noData__link}>Try another search !</Link>
                    </div>
            }
        </div>
    )
}
