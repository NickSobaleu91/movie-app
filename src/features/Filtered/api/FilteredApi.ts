import {baseApi} from "@/App/api/baseApi.ts";
import {PopularMoviesResponse, popularMoviesResponseSchema} from "@/features/main/api/mainApi.types.ts";
export const FilteredApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDiscoverMovies: build.query<PopularMoviesResponse, {numberPage:number,sortBy:string,value:number[],with_genres:number[]}>({
            query: ({numberPage, sortBy,value, with_genres}) => ({
                url: "discover/movie",
                params: {
                    page: numberPage,
                    sort_by:sortBy,
                    "vote_average.gte":value[0],
                    "vote_average.lte":value[1],
                    with_genres: with_genres.join(",")
                }
            }),
            responseSchema: popularMoviesResponseSchema,
        }),
    })
})

export const { useGetDiscoverMoviesQuery } = FilteredApi







