import { useLocation } from "react-router-dom"
import {
    useGetMovieCreditsQuery,
    useGetMovieDetailsQuery,
    useGetSimilarCreditsQuery
} from "@/common/components/commonMoviePage/api/moviePageApi"

//---------------страница с данными о фильме, передаем данные с usenavigate и получаем через useLocation

import { MovieInfo } from "./MovieInfo.tsx"
import { MovieCast } from "./MovieCast.tsx"
import { SimilarMovies } from "./SimilarMovies.tsx"

export const CommonMoviePage = () => {
    const location = useLocation()
    const movie = location.state?.movie

    const { data } = useGetMovieCreditsQuery(movie?.id ?? 0, {skip: !movie,})
    const { data: similarMovieData } = useGetSimilarCreditsQuery(movie?.id ?? 0, {skip: !movie,})
    const {data: detailData} = useGetMovieDetailsQuery(movie?.id ?? 0, {skip: !movie,})


    if (!movie) return <div>Movie not found</div>

    return (
        <div>
            <MovieInfo movie={movie}  genres = {detailData?.genres} runtime = {detailData?.runtime} />
            <MovieCast cast={data?.cast} />
            <SimilarMovies movies={similarMovieData?.results}/>
        </div>
    )
}


