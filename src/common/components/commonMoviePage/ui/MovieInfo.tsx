import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { Movie } from "@/features/main/api/mainApi.types.ts"
import s from "./commonMoviePage.module.css"
import {MovieDetails} from "@/common/components/commonMoviePage/api/ typeMoviePageApi.ts";

type Props = {
    movie: Movie
    genres?: MovieDetails["genres"]
    runtime?: MovieDetails["runtime"]
}

export const MovieInfo = ({ movie,genres,runtime }: Props) => {
    const navigate = useNavigate()

    const hours = runtime != null ? Math.floor(runtime / 60) : 0
    const minutes = runtime != null ? runtime % 60 : 0

    return (
        <div className={s.container}>
            <div className={s.poster}>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
            </div>
            <div className={s.info}>
                <h1 className={s.title}>{movie.title}</h1>
                <div className={s.meta}>
                    <p>Release year: {movie.release_date.slice(0, 4)}</p>
                    <div className={s.rating}>
                        {movie.vote_average.toFixed(1)}
                    </div>
                    <p>Runtime: {runtime != null ? `${hours}h ${minutes}m` : "N/A"}</p>
                </div>
                <p className={s.overview}>{movie.overview}</p>
                <div className={s.genres}>
                    <h3>Genres</h3>
                    <Box
                        className={s.genreList}
                        sx={{
                            "& span": {
                                backgroundColor: (theme) => theme.palette.mode === "light"
                                        ? "#c9c9ca"
                                        : "#111b2e",

                                color: (theme) => theme.palette.mode === "light"
                                        ? "#0e0e0e"
                                        : "#ffffff",
                            },}}
                    >
                        <div className={s.genres}>{genres?.map(x=>(<span key={x.id} className={s.genre}>{x.name}</span>))}</div>
                    </Box>
                </div>
            </div>
            <button
                onClick={() => navigate(-1)}
                className={s.backButton}
            >
                Back
            </button>
        </div>
    )
}