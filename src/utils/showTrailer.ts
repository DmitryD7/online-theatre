import {Options} from "react-youtube";
// @ts-ignore
import movieTrailer from 'movie-trailer'
import {MovieType} from "../models/models";

export const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    }
} as Options

export const handleShowTrailerClick = (params: handleShowTrailerClickParamsType) => {
    const {movie, setTrailerUrl, trailerUrl} = params

    if (trailerUrl) {
        setTrailerUrl('')
    } else {
        movieTrailer(movie?.name || movie?.title || '')
            .then((url: string) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((e: any) => console.log(e))
    }
}

type handleShowTrailerClickParamsType = {
    movie: MovieType,
    trailerUrl: string | null,
    setTrailerUrl: (value: any) => void
}