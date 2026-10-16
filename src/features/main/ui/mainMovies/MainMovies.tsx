import {useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopMoviesQuery, useGetUpcomingMoviesQuery
} from "@/features/main/api/mainApi.ts"
import s from "./mainMovies.module.css"
import { useEffect, useState } from "react"
import { Movie } from "@/features/main/api/mainApi.types.ts"
import SearchMovies from "@/common/components/commonSearch/SearchMovies.tsx"
import {useNavigate} from "react-router-dom";

import {MainSection} from "@/features/main/ui/mainMovies/MainSection.tsx";

export const MainMovies = () => {
    const { data: popolarData,isLoading: popularLoading } = useGetPopularMoviesQuery()
    const { data: TopData, isLoading: ToLoading} = useGetTopMoviesQuery()
    const { data: UpcomingData, isLoading: UpcomingLoading} = useGetUpcomingMoviesQuery()
    const { data: NowPlayingData, isLoading: NowPlayingLoading} = useGetNowPlayingMoviesQuery()


    const [movies, setMovies] = useState<Movie | null>(null)
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        if (popolarData) {
            setMovies(popolarData.results[Math.floor(Math.random() * popolarData.results.length)])
        }
    }, [popolarData])

    const backdropPath = movies?.backdrop_path
    const backgroundImage = backdropPath
        ? `https://image.tmdb.org/t/p/original${backdropPath}`
        : ""

    const navigate = useNavigate()
    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(inputValue)}`)
    }

    return (
        <div>
            <div
            className={s.background}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={s.heroContent}>
                <h1>Welcome</h1>
                <h2>Browse highlighted titles from TMDB</h2>
                <SearchMovies
                    inputValue={inputValue}
                    handleInputChange={setInputValue}
                    handleSearch={handleSearch}
                />
            </div>
        </div>
            <MainSection popolarData = {popolarData?.results ?? []} commonTitle = 'Popular Movies' newURL = "/movies/popular" isLoading={popularLoading}/>
            <MainSection popolarData = {TopData?.results ?? []} commonTitle = 'Top Rated Movies' newURL = "/movies/top-rated" isLoading={ToLoading}/>
            <MainSection popolarData = {UpcomingData?.results ?? []} commonTitle = 'Upcoming Movies' newURL = "/movies/upcoming" isLoading={UpcomingLoading}/>
            <MainSection popolarData = {NowPlayingData?.results ?? []} commonTitle = 'Now Playing Movies' newURL = "/movies/now-playing" isLoading={NowPlayingLoading}/>
        </div>
    )
}

