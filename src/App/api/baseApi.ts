import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query"
import {handleErrors} from "@/App/api/handleErrors.ts";
import { toast } from "react-toastify"
// сначала RTK Query вызывает нашу функцию baseQueryWithErrorHandling
// внутри неё мы делаем реальный запрос через rawBaseQuery и получаем result.

const rawBaseQuery = fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",

    prepareHeaders: (headers) => {
        const token = import.meta.env.VITE_ACCESS_TOKEN

        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        headers.set("accept", "application/json")
        return headers
    },
})

const baseQueryWithErrorHandling: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
    const result = await rawBaseQuery(args, api, extraOptions)
    if(result.error) handleErrors(result.error)
    return result
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithErrorHandling,
    endpoints: () => ({}),
    catchSchemaFailure: (error) => {
        toast.error("Ошибка валидации ответа сервера")

        return {
            status: "CUSTOM_ERROR" as const,
            error: "Schema validation failed",
            data: error.issues,
        }
    },
})




// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//
// export const baseApi = createApi({
//     reducerPath: "baseApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "https://api.themoviedb.org/3",
//
//         prepareHeaders: (headers) => {
//             const token = import.meta.env.VITE_ACCESS_TOKEN
//             if (token) {
//                 headers.set("Authorization", `Bearer ${token}`)
//             }headers.set("accept", "application/json")
//
//             return headers
//         },
//     }),
//
//     endpoints: () => ({}),
// })


