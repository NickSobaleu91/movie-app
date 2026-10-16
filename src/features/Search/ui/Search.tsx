import SearchMovies from "@/common/components/commonSearch/SearchMovies.tsx"
import s from "./search.module.css"
import { useState } from "react"
import { useSearchMoviesQuery } from "@/features/Search/api/SearchApi.ts"
import { useSearchParams} from "react-router-dom"
import {Posts} from "@/common/components/posts/Posts.tsx";
import {PaginationOutlined} from "@/common/pagination/Pagination.tsx";

export const Search = () => {

    const [searchParams,setSearchParams ] = useSearchParams() //3. ЗАДАЕТ ЗНАЧЕНИЕ В URL
    const [namberPage, setNamberPage] = useState(1)
    const query = searchParams.get("query" )|| '' //2.в переменную query мы берем значение ключа query из url, и ложим в inputValue
    const [inputValue, setInputValue] = useState(query)// для контролирования поля ввода, disable кнопки, в useSearchParams

    const {data,isLoading} = useSearchMoviesQuery({query,namberPage}, {skip: query.length === 0})

    const handleInputChange = (value: string) => {
        setInputValue(value)
        if (value === "") {
            setSearchParams({})
            setNamberPage(1)
        }
    }
    const handleSearch = () => {
        setSearchParams({
            query: inputValue,// 1. query- ключ в url, inputValue -значение ключа query ( из стейта выше)
        })
    }

    return (
        <div className={s.container}>
            <h1>Search Results</h1>
                    <SearchMovies
                        inputValue={inputValue}
                        handleInputChange={handleInputChange}
                        handleSearch={handleSearch}
                    />
            {
                query
                    ? (
                        !isLoading && data?.results?.length === 0
                            ? <h2>No matches found for "{query}"</h2>
                            : <h2>Results for "{query}"</h2>
                    )
                    : <p>Enter a movie title to start searching.</p>
            }
            {query && <Posts data = {data} isLoading = {isLoading}/>}
            <div className={s.pagination}>
            <PaginationOutlined count = {data?.total_pages || 1} setNamberPage = {setNamberPage} query = {query} />
            </div>
        </div>
    )
}

