import {MainMovies} from "@/features/main/ui/mainMovies/MainMovies.tsx";
import {Category} from "@/features/Category/ui/Category.tsx";
import {Filtered} from "@/features/Filtered/ui/Filtered.tsx";
import {Search} from "@/features/Search/ui/Search.tsx";
import {Favorites} from "@/features/Favorites/ui/Favorites.tsx";
import {CommonMoviePage} from "@/common/components/commonMoviePage/ui/commonMoviePage.tsx";

export const movies = [
    { title: "Main", path: "/", Component: MainMovies, showInHeader: true },
    { title: "Category movies", path: "/movies/:type", Component: Category, showInHeader: true },
    { title: "Filtered movies", path: "/filtered", Component: Filtered, showInHeader: true },
    { title: "Search", path: "/search", Component: Search, showInHeader: true },
    { title: "Favorites", path: "/favorites", Component: Favorites, showInHeader: true },
    { title: "changeMovie", path: "/movie/:id", Component: CommonMoviePage, showInHeader: false },
]