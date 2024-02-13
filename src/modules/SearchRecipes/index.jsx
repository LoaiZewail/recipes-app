import React from 'react'
import style from "./style.module.scss"
import SearchResults from './components/SearchResults'
import { useFetchSearchRecipes } from '../../hooks/useFetchSearchRecipes';
import Loading from '../../components/Loading';
import ErrorUI from '../../components/Error';
import { motion } from 'framer-motion'

export default function SearchRecipes() {

    const { data, error, isLoading } = useFetchSearchRecipes();

    return (
        <motion.div className={style.SearchRecipes} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {isLoading && <Loading />}
            {error && <ErrorUI message={error?.response.data.message} />}
            {data && <SearchResults data={data} />}
        </motion.div>
    )
}
