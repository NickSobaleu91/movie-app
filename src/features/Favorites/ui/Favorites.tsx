import {MovieCard} from "@/features/Search/ui/MovieCard.tsx";
import { UseFavorites } from "@/common/components/posts/useFavorites/useFavorites.ts"
import s from "./favorites.module.css"


export const Favorites = () => {
    const { favorites, favoriteHandler } = UseFavorites()

    return (
        <div className={s.container}>
            <h1>Favorites</h1>
            {favorites.length === 0 ? (
                <p>Add movies to favorites to see them on this page.</p>
            ) : (
                <>
                <p>Favorite Movies</p>
            <div className={s.module}>
                {favorites.map(favorite => (
                    <MovieCard
                        key={favorite.id}
                        movie={favorite}
                        favoriteHandler={favoriteHandler}
                        favorites={favorites}
                        variant="similar"
                    />
                ))}
            </div>
                </>

            )}
        </div>
    )
}

