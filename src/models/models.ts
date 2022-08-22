export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type CommonResponseType = {
    page: number
    results: Array<MovieType>
    total_pages: number
    total_results: number
}

export type MovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    name: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type CategoriesMoviesType = 'action' | 'comedy' | 'horror' | 'drama' | 'documentary'