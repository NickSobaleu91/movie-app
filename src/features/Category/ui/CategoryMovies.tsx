import { Movie } from "@/features/main/api/mainApi.types.ts"
import { MovieCard } from "@/features/Search/ui/MovieCard"
import { UseFavorites } from "@/common/components/posts/useFavorites/useFavorites.ts"
import s from "./Category.module.css"
import {MovieCardSkeleton} from "@/common/components/MovieCardSkeleton/MovieCardSkeleton.tsx";

type Props = {
    movies: Movie[]
    isLoadingActive: boolean
}

export const CategoryMovies = ({ movies,isLoadingActive }: Props) => {
    const { favorites, favoriteHandler } = UseFavorites()

    return (
        <div className={s.containerMovieCard}>
            {isLoadingActive ? (
                Array.from({ length: 20 }).map((_, index) => (
                    <MovieCardSkeleton key={index} />
                ))
                ): (movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    favoriteHandler={favoriteHandler}
                />
            )))}
        </div>
    )
}