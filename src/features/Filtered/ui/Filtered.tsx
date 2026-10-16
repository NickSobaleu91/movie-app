import {useGetDiscoverMoviesQuery} from "@/features/Filtered/api/FilteredApi.ts";
import { MovieCard } from "@/features/Search/ui/MovieCard";
import {UseFavorites} from "@/common/components/posts/useFavorites/useFavorites.ts";
import s from "./filtered.module.css";
import {PaginationOutlined} from "@/common/pagination/Pagination.tsx";
import { useState} from "react";
import { Box } from "@mui/material";
import {MultipleSelect} from "@/features/Filtered/ui/select.tsx";
import * as React from "react";
import {DebounceAndRangeSlader} from "@/features/Filtered/ui/DebounceAndRangeSlader.tsx";
import {GenreFilter} from "@/features/Filtered/ui/GenreFilter.tsx";
import {MovieCardSkeleton} from "@/common/components/MovieCardSkeleton/MovieCardSkeleton.tsx";
import Button from "@mui/material/Button";



export const Filtered = () => {

    const [numberPage, setNamberPage] = useState(1)
    const [personName, setPersonName] = React.useState<string>("");
    const [value, setValue] = React.useState<number[]>([0, 10]);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([])
    const { favorites, favoriteHandler } = UseFavorites()

    const resetHandler = () => {
        setNamberPage(1)
        setPersonName("")
        setValue([0, 10])
        setSelectedGenres([])
    }


    const sortOptions: Record<string, string> = {
        "Popularity ↓": "popularity.desc",
        "Popularity ↑": "popularity.asc",
        "Rating ↓": "vote_average.desc",
        "Rating ↑": "vote_average.asc",
        "Release Date ↓": "primary_release_date.desc",
        "Release Date ↑": "primary_release_date.asc",
        "Title A-Z": "title.asc",
        "Title Z-A": "title.desc",
    }
    const sortBy = sortOptions[personName]
    const { data,isLoading } = useGetDiscoverMoviesQuery({numberPage, sortBy,value,with_genres: selectedGenres})

    const movies =  data?.results ?? []

    return (
            <div className={s.container}>

                <div className={s.containerForBoxAndMovieCard}>
                    <Box sx={{ bgcolor: "background.paper", width: "260px", height: "800px", flexShrink: 0, borderRadius: "20px",padding:"20px" }}>
                        <h3 style={{marginBottom:"50px"}}>Filters / Sort</h3>
                        <MultipleSelect personName = {personName} setPersonName = {setPersonName}/>
                        <DebounceAndRangeSlader value ={value} setValue = {setValue}/>
                        <GenreFilter selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>
                        <Button style={{background:"#4982AF",color:"white",borderRadius:"20px"}} onClick={resetHandler}>Reset filters</Button>

                    </Box>

                    <div className={s.containerMovies}>
                        {isLoading ? (Array.from({ length: 20 }).map((_, index) => (
                                <MovieCardSkeleton key={index} variant="similar"/>
                            )))
                            :(movies.map((movie) => (
                            <MovieCard key = {movie.id} movie = {movie} favoriteHandler ={favoriteHandler} favorites = {favorites} variant="similar"/>
                        )))}
                    </div>
                </div>

                <div className={s.pagination}>
                    <PaginationOutlined count={data?.total_pages || 1} setNamberPage={setNamberPage} query="something"/>
                </div>

            </div>
        );
    };

