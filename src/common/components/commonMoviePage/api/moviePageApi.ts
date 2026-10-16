import {baseApi} from "@/App/api/baseApi.ts";
import {MovieCreditsResponse, movieCreditsResponseSchema, MovieDetails, movieDetailsSchema, SimilarMoviesResponse,
    similarMoviesResponseSchema
} from "@/common/components/commonMoviePage/api/ typeMoviePageApi.ts";

export const mainhApi = baseApi.injectEndpoints({
    endpoints: (build) =>({
        getMovieCredits: build.query<MovieCreditsResponse,number>({
            query: (movie_id) =>({
                url: `movie/${movie_id}/credits`,
            }),
            responseSchema: movieCreditsResponseSchema,
        }),
    getSimilarCredits: build.query<SimilarMoviesResponse,number>({
            query: (movie_id) =>({
                url: `movie/${movie_id}/similar`,
            }),
        responseSchema: similarMoviesResponseSchema,
        }),
        getMovieDetails: build.query<MovieDetails,number>({
            query: (movie_id) =>({
                url: `movie/${movie_id}`,
            }),
            responseSchema: movieDetailsSchema,
        })

    }),
})

export const { useGetMovieCreditsQuery, useGetSimilarCreditsQuery,useGetMovieDetailsQuery} = mainhApi