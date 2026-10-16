import { Box } from "@mui/material"
import s from "./commonMoviePage.module.css"
import {Cast} from "@/common/components/commonMoviePage/api/ typeMoviePageApi.ts";

type Props = {
    cast?: Cast[]
}

export const MovieCast = ({ cast }: Props) => {
    return (
        <>
            <h2 className={s.character}>Cast</h2>
            <Box
                className={s.cast}
                sx={{
                    [`& .${s.nameInMovie}`]: {
                        color: (theme) =>
                            theme.palette.mode === "light"
                                ? "rgba(0, 0, 0, 0.6)"
                                : "rgba(255, 255, 255, 0.6)",
                    },
                }}
            >
                {cast
                    ?.slice(0, 6)
                    .map(({ id, name, profile_path, character }) => (
                        <div key={id} className={s.actorCard}>
                            {profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
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
                            <p className={s.nameInLive}>{name}</p>
                            <p className={s.nameInMovie}>{character}</p>
                        </div>
                    ))}
            </Box>
        </>
    )
}