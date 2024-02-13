import React, { useEffect, useState } from 'react'
import style from "./style.module.scss"
import { Link } from 'react-router-dom'

export default function NavBar() {

    //horizontal scroll indicator logic
    const [scrollTop, setscrollTop] = useState(0)

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        setscrollTop(scrolled);
    };

    useEffect(() => {
        if (typeof window !== undefined) {
            window.addEventListener("scroll", onScroll)
        }
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
            <div className={style.navbar}>
                <Link to={"/"}>
                    Home
                </Link>
            </div>
            {window.location.pathname.includes("/recipes/") &&
                <div className={style.progress}>
                    <div className={style.progress__inner} style={{ width: `${scrollTop}%` }} />
                </div>
            }
        </>
    )
}
