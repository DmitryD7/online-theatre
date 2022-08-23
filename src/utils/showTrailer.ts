import {Options} from "react-youtube";
import {MovieType} from "../models/models";
// @ts-ignore
import movieTrailer from 'movie-trailer';

export const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    }
} as Options;

export const handleShowTrailerClick = async (params: handleShowTrailerClickParamsType) => {
    const {movie, setTrailerUrl, trailerUrl} = params;

    if (trailerUrl) {
        setTrailerUrl('')
    } else {
        try {
            const url = await movieTrailer(movie?.name || movie?.title || '');
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        } catch (e) {
            throw new Error("We don't have a trailer for this movie yet!");
        }

    }
};

type handleShowTrailerClickParamsType = {
    movie: MovieType,
    trailerUrl: string | null,
    setTrailerUrl: (value: any) => void,
};