import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PaginationOutlined } from "@/common/pagination/Pagination.tsx"
import { CategoryTabs } from "./CategoryTabs"
import { CategoryMovies } from "./CategoryMovies"
import { useCategoryMovies } from "./useCategoryMovies"

import s from "./Category.module.css"

export const Category = () => {
    const [namberPage, setNamberPage] = useState(1)

    const { type } = useParams()

    const { movies, totalPages, categoryTitle,isLoadingActive } =
        useCategoryMovies(type, namberPage)
        useEffect(() => {
        setNamberPage(1)
    }, [type])

    return (
        <div className={s.container}>
            <div>
                <CategoryTabs />
                <h2>{categoryTitle}</h2>
                <CategoryMovies movies={movies} isLoadingActive = {isLoadingActive}/>
            </div>
            <div className={s.pagination}>
                <PaginationOutlined
                    count={totalPages}
                    setNamberPage={setNamberPage}
                    query="something"
                />
            </div>
        </div>
    )
}
