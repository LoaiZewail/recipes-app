import React from 'react'
import style from "./style.module.scss"

export default function ErrorUI({ message }) {

    return (
        <div className={style.ErrorUI}>
            <div className={style.ErrorUI__message1}>
                Error fetching data
            </div>
            {message && <div className={style.ErrorUI__message2}>{message}</div>}
        </div>
    )
}
