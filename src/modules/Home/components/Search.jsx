import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import style from "../style.module.scss"

export default function Search() {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipes?query=${query}`);
    };

    return (
        <div className={style.Search}>
            <label className={style.Search__input}>
                <input
                    className={style.Search__input__field}
                    type="text"
                    placeholder=" "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(i) => (i.key == "Enter" && handleClick())}
                />
                <span className={style.Search__input__label}>Search ...</span>
            </label>
            <button className={style.Search__button} onClick={handleClick}><img src='/search.png' alt='search' /></button>
        </div>
    )
}
