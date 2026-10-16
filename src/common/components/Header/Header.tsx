import Logo from "@/assets/images/logo.svg"
import s from './header.module.css'
import {changeThemeModeAC, selectThemeMode} from "@/App/app-slice.ts";
import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {Link, NavLink } from "react-router-dom"
import {movies} from "@/common/routesconfig/routesconfig.ts";
import LightPhoto from "@/assets/images/images.jpg"
import DarkPhoto from "@/assets/images/1655916160112774163.jpg"
import {Box, LinearProgress} from "@mui/material";

export const Header = () => {

    const themeMode = useAppSelector(selectThemeMode)
    const dispatch = useAppDispatch()
    const changeMode = () => { const newMode = themeMode === "light" ? "dark" : "light"
        dispatch(changeThemeModeAC({ themeMode: newMode }))
        localStorage.setItem("themeMode", newMode)
    }

    const isFetching = useAppSelector((state) =>
        Object.values(state.baseApi.queries).some(query => query?.status === "pending")
    )//state.baseApi.queries — все запросы, которые RTK Query отслеживает в состоянии.

    return (
    <div className={s.common}>
        <div className={s.container}>
            <Link to="/" className={s.logoLink}>
                <img src={Logo} alt="TMDB logo" className={s.logo} />
            </Link>

            <ul className={s.menu}>
                {movies
                    .filter(movie => movie.showInHeader)
                    .map(movie => (
                    <li key={movie.path}>
                        <NavLink
                            to={movie.path === "/movies/:type" ? "/movies/popular" : movie.path}
                            className={({ isActive }) =>
                                isActive ? `${s.menuItem} ${s.active}` : s.menuItem
                            }
                        >
                            {movie.title}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <button onClick={changeMode} className={s.themeButton}>
                <img
                    src={themeMode === "light" ? LightPhoto : DarkPhoto}
                    alt="Switch theme"
                    loading="eager"
                />
            </button>

        </div>
        <Box sx={{ width: '100%' }}>
            {isFetching &&<LinearProgress aria-label="Loading…" />}
        </Box>
    </div>
    )
};

