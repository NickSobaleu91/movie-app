import s from "@/common/components/posts/posts.module.css";
import {FavoriveIcon} from "@/common/favoriteIcon/favoriveIcon.tsx";
import {Box} from "@mui/material";
import {Movie} from "@/features/main/api/mainApi.types.ts";
import {useNavigate} from "react-router-dom";


type props = {
    movie: Movie
    favoriteHandler: (movie:Movie ) => void
    favorites: Movie[]
    variant?: "default" | "similar"
}

export const MovieCard = ({movie,favoriteHandler,favorites,variant}:props) => {

    const colorRating = (rating:number) => {
        if(rating >= 7) {
            return s.green
        } else if (rating >= 6){
            return s.yellow
        } else return s.red
    }

    const navigate = useNavigate()
    const turnOnHandler = (id: number) => {
        navigate(`/movie/${id}`, { // тут задаем не только url но и все данные movie которые пришли с пропсов
            state: { movie },
        })
    }

    return (
            <div key={movie.id} className={`${s.card} ${variant === "similar" ? s.similarCard : '' }`} onClick={() => turnOnHandler(movie.id)}>
                <div className={s.picture}>
                    {movie.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt="poster"
                        />
                    ) : (
                        <Box className={s.noPoster} sx={{
                                bgcolor: "background.paper",
                                color: "text.secondary",
                            }}
                        >
                            No poster
                        </Box>
                    )}
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            favoriteHandler(movie)
                        }}
                        className={s.favorite + (favorites.some(item => item.id === movie.id) ? ` ${s.active}` : "")}
                    >
                        {
                            favorites.some(item => item.id === movie.id)
                            ? <FavoriveIcon color="yellow" />
                            : <FavoriveIcon color="white" />
                        }
                    </div>
                    <div className={`${s.rating} ${colorRating(movie.vote_average)}`}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                </div>
                <p>{movie.original_title}</p>
            </div>
        )
}


