import axios from "axios"
import {CommonResponseType} from "./apiTypes";

const instanceApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
const API_KEY = 'f8eecce8fd6c9ebe254fb3ae3c81a49c'

export const moviesApi = {
    fetchTrending() {
        return instanceApi.get<CommonResponseType>(`trending/all/week?api_key=${API_KEY}`)
    },
    fetchTopRated() {
        return instanceApi.get<CommonResponseType>(`tmovie/top_rated?api_key=${API_KEY}&language=en-US`)
    },
    fetchPopular() {
        return instanceApi.get<CommonResponseType>(`tmovie/popular?api_key=${API_KEY}&language=en-US`)
    },
    fetchActionMovies() {
        return instanceApi.get<CommonResponseType>(`discover/movie?api_key=${API_KEY}&with_genres=28`)
    },
    fetchComedy() {
        return instanceApi.get<CommonResponseType>(`discover/movie?api_key=${API_KEY}&with_genres=35`)
    },
    fetchHorror() {
        return instanceApi.get<CommonResponseType>(`discover/movie?api_key=${API_KEY}&with_genres=27`)
    },
    fetchDrama() {
        return instanceApi.get<CommonResponseType>(`discover/movie?api_key=${API_KEY}&with_genres=10749`)
    },
    fetchDocumentaries() {
        return instanceApi.get<CommonResponseType>(`discover/movie?api_key=${API_KEY}&with_genres=99`)
    },
}