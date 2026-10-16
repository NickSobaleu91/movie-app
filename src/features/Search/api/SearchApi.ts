import {baseApi} from "@/App/api/baseApi.ts";
import {PopularMoviesResponse, popularMoviesResponseSchema} from "@/features/main/api/mainApi.types.ts";


export const SearchApi = baseApi.injectEndpoints({
    endpoints: (build) =>({
        searchMovies: build.query<PopularMoviesResponse, {query:string,namberPage:number}>({
            query: ({query,namberPage}) =>({
                url:`search/movie`,
                params: {// при get запросе rtk query требует params(параметры которые идут после попросительного знака)
                    query: query,//название query из документации
                    page: namberPage
                }
            }),
            responseSchema: popularMoviesResponseSchema
        })
    })
})





export const { useSearchMoviesQuery} = SearchApi