import {PopularMoviesResponse} from "@/features/main/api/mainApi.types.ts";
import s from './posts.module.css'
import {MovieCard} from "@/features/Search/ui/MovieCard.tsx";
import {UseFavorites} from "@/common/components/posts/useFavorites/useFavorites.ts";
import {MovieCardSkeleton} from "@/common/components/MovieCardSkeleton/MovieCardSkeleton.tsx";

type Props = {
    data?: PopularMoviesResponse
    isLoading: boolean
    }

    export const Posts = ({data,isLoading}:Props) => {

        const { favorites, favoriteHandler } = UseFavorites()

        return (
        <div className={s.posts}>
            {isLoading ? (Array.from({ length: 20 }).map((_, index) => (
                    <MovieCardSkeleton key={index} />
                )))
                :(data?.results.map(movie => (
            <MovieCard key = {movie.id} movie = {movie} favoriteHandler ={favoriteHandler} favorites = {favorites} />
                )))}
        </div>
    );
};

