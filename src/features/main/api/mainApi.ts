import { baseApi } from "@/App/api/baseApi.ts"
import {PopularMoviesResponse, popularMoviesResponseSchema} from "@/features/main/api/mainApi.types.ts"

export const mainhApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPopularMovies: build.query<PopularMoviesResponse, number>({
            query: (numberPage) => ({
                url: "movie/popular",
                params: {
                    page: numberPage
                }
            }),
            responseSchema: popularMoviesResponseSchema
        }),

        getTopMovies: build.query<PopularMoviesResponse, number>({
            query: (numberPage) => ({
                url: "movie/top_rated",
                params: {
                    page: numberPage
                }
            }),
            responseSchema: popularMoviesResponseSchema
        }),

        getUpcomingMovies: build.query<PopularMoviesResponse, number>({
            query: (numberPage) => ({
                url: "movie/upcoming",
                params: {
                    page: numberPage
                }
            }),
            responseSchema: popularMoviesResponseSchema
        }),

        getNowPlayingMovies: build.query<PopularMoviesResponse, number>({
            query: (numberPage) => ({
                url: "movie/now_playing",
                params: {
                    page: numberPage
                }
            }),
            responseSchema: popularMoviesResponseSchema
        })
    })
})

export const {useGetPopularMoviesQuery, useGetTopMoviesQuery, useGetUpcomingMoviesQuery, useGetNowPlayingMoviesQuery} = mainhApi