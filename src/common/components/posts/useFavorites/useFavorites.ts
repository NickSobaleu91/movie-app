import {useEffect, useState} from "react";
import {Movie} from "@/features/main/api/mainApi.types.ts";



export const UseFavorites = () => {

    const [favorites, setFavorites] = useState<Movie[]>(() => {
        const savedMovies = localStorage.getItem("favoriteId")

        return savedMovies ? JSON.parse(savedMovies) : []
    })

    useEffect(() => {
        localStorage.setItem("favoriteId", JSON.stringify(favorites));
    },[favorites])

    const favoriteHandler = (movie:Movie) => {
        const id = movie.id;
        if(!favorites.some(item => item.id === movie.id)){
            setFavorites([...favorites, movie])
        } else {
            setFavorites(favorites.filter(x => x.id !== id))
        }
    }
    return {favorites,favoriteHandler}
};

