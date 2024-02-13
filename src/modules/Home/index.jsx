import React from 'react'
import Search from './components/Search'
import style from "./style.module.scss"
import Magnatic from '../../components/Magnatic'
import { motion } from 'framer-motion'

export default function Home() {

    return (
        <motion.div className={style.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Magnatic>
                <div className={style.home__title}>
                    Explore recipes
                </div>
            </Magnatic>
            <Search />
        </motion.div>
    )
}
