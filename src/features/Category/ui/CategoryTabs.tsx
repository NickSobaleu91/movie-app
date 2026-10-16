import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom"
import s from "./Category.module.css"

const categories = [
    { title: "Popular Movies", path: "/movies/popular" },
    { title: "Top Rated Movies", path: "/movies/top-rated" },
    { title: "Upcoming Movies", path: "/movies/upcoming" },
    { title: "Now Playing Movies", path: "/movies/now-playing" }
]

export const CategoryTabs = () => {
    return (
        <div className={s.containerCategories}>
            {categories.map(category => (
                <Button
                    key={category.title}
                    component={NavLink}
                    to={category.path}
                    variant="outlined"
                    sx={{
                        borderRadius: "30px",
                        "&.active": {
                            bgcolor: "primary.main",
                            color: "primary.contrastText"
                        }
                    }}
                >
                    {category.title}
                </Button>
            ))}
        </div>
    )
}