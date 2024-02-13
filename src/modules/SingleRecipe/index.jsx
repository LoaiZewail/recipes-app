import React from 'react'
import style from "./style.module.scss"
import { useFetchSingleRecipe } from '../../hooks/useFetchSingleRecipe';
import Loading from '../../components/Loading';
import ErrorUI from '../../components/Error';
import Recipe from './components/Recipe';
import { motion } from 'framer-motion'

export default function SingleRecipe() {

    const { data, error, isLoading } = useFetchSingleRecipe();

    return (
        <motion.div className={style.SingleRecipe} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {isLoading && <Loading />}
            {error && <ErrorUI message={error?.response.data.message} />}
            {data && <Recipe recipe={data} />}
        </motion.div>
    )
}
