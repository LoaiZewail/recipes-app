import React from 'react'
import style from "./style.module.scss"

export default function Loading() {

    return (
        <div className={style.Loading}>
            <img src='/loading.gif' alt='loading' />
        </div>
    )
}
