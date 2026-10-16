import { MovieCard } from "@/features/Search/ui/MovieCard.tsx"
import { Movie } from "@/features/main/api/mainApi.types.ts"
import { UseFavorites } from "@/common/components/posts/useFavorites/useFavorites.ts"
import { MovieCardSkeleton } from "@/common/components/MovieCardSkeleton/MovieCardSkeleton"
import s from "./mainMovies.module.css"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

type Props = {
    popolarData: Movie[]
    commonTitle: string
    newURL: string
    isLoading: boolean
}

export const MainSection = ({popolarData, commonTitle, newURL, isLoading}: Props) => {

    const navigate = useNavigate()

    const redirectHandel = () => {
        navigate(newURL)
    }

    const { favorites, favoriteHandler } = UseFavorites()

    return (
        <div className={s.MainSection}>
            <div className={s.title}>
                <h2>{commonTitle}</h2>

                <Button
                    onClick={redirectHandel}
                    variant="outlined"
                    sx={{
                        borderRadius: "30px",
                        bgcolor: "background.paper",
                        color: "text.primary"
                    }}
                >
                    View more
                </Button>
            </div>

            <div className={s.MainSectionFlex}>
                {isLoading
                    ? Array.from({ length: 6 }).map((_, index) => (
                        <MovieCardSkeleton key={index} variant="similar"/>
                    ))
                    : popolarData.slice(0, 6).map(oneMovie => (
                        <MovieCard key={oneMovie.id} movie={oneMovie} favorites={favorites} favoriteHandler={favoriteHandler} variant="similar"/>
                    ))
                }
            </div>
        </div>
    )
}

