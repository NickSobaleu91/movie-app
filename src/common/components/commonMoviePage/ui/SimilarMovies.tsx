import { MovieCard } from "@/features/Search/ui/MovieCard.tsx"
import { UseFavorites } from "@/common/components/posts/useFavorites/useFavorites.ts"
import s from "./commonMoviePage.module.css"
import {SimilarMovie} from "@/common/components/commonMoviePage/api/ typeMoviePageApi.ts";

type Props = {
    movies?: SimilarMovie[]
}

export const SimilarMovies = ({ movies }: Props) => {
    const { favorites, favoriteHandler } = UseFavorites()

    return (
        <>
            <h2 className={s.character}>Similar Movies</h2>
            <div className={`${s.container} ${s.similarRow}`}>
                {movies
                    ?.slice(0, 6)
                    .map(movie => (
                        <MovieCard
                            variant="similar"
                            key={movie.id}
                            movie={movie}
                            favoriteHandler={favoriteHandler}
                            favorites={favorites}
                        />
                    ))}
            </div>
        </>
    )
}