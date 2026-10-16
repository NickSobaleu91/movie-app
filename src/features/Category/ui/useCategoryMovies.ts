import {useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopMoviesQuery, useGetUpcomingMoviesQuery
} from "@/features/main/api/mainApi.ts"
export const useCategoryMovies = (type: string | undefined, numberPage: number) => {

    const { data: popularData,isLoading: popularLoading } = useGetPopularMoviesQuery(numberPage, {skip: type !== "popular"})
    const { data: topData, isLoading: ToLoading } = useGetTopMoviesQuery(numberPage, {skip: type !== "top-rated"})
    const { data: upcomingData, isLoading: UpcomingLoading } = useGetUpcomingMoviesQuery(numberPage, {skip: type !== "upcoming"})
    const { data: nowPlayingData, isLoading: NowPlayingLoading } = useGetNowPlayingMoviesQuery(numberPage, {skip: type !== "now-playing"})

    const categoriesData = {
        popular: popularData,//просто ключи и значения с RTK выше
        "top-rated": topData,
        upcoming: upcomingData,
        "now-playing": nowPlayingData
    }

    const selectedData = categoriesData[type as keyof typeof categoriesData]// наш url (из пропсов) к примеру пришел -
    //type = "popular" значит
    //const selectedData = categoriesData[type]
    //const selectedData = categoriesData["popular"]

    //значит мы получим:
    //const selectedData = popularData

    const movies = selectedData?.results ?? [] //selectedData это popularData,topData,upcomingData... тут мы получаем конкретные фильмы под каждую категорию
    const totalPages = selectedData?.total_pages ?? 1

    const categoryTitles: Record<string, string> = {
        popular: "Popular Movies",
        "top-rated": "Top Rated",
        upcoming: "Upcoming Movies",
        "now-playing": "Now Playing Movies"
    }
    const categoryTitle = categoryTitles[type ?? ""] ?? "Popular Movies"

    const isLoadingChoise: Record<string, boolean> = {
        popular: popularLoading,
        "top-rated": ToLoading,
        upcoming: UpcomingLoading,
        "now-playing": NowPlayingLoading
    }
    const isLoadingActive = isLoadingChoise[type as keyof typeof isLoadingChoise]

    return { movies, totalPages, categoryTitle,isLoadingActive}
}