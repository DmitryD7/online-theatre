import {CategoryMoviesStateType, fetchMovies, setCategory, slice} from "./categoryMovies-reducer";

const startState: CategoryMoviesStateType = {
    movies: [
        {
            adult: false,
            backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
            genre_ids: [10765, 9648, 18],
            original_title: "WandaVision",
            original_language: "en",
            poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
            vote_average: 8.4,
            vote_count: 4073,
            name: "WandaVision",
            overview: "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
            id: 1,
            release_date: "2021-01-15",
            popularity: 3170.54,
            title: 'WandaVision',
            video: false
        },
        {
            adult: false,
            backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
            genre_ids: [10765, 9648, 18],
            original_title: "Five guys",
            original_language: "en",
            poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
            vote_average: 8.4,
            vote_count: 4073,
            name: "WandaVision",
            overview: "",
            id: 2,
            release_date: "2021-01-15",
            popularity: 3170.54,
            title: "WandaVision",
            video: false
        },
        {
            adult: false,
            backdrop_path: "/57vVjteucIF3bGnZj6PmaoJRScw.jpg",
            genre_ids: [10765, 9648, 18],
            original_title: "WandaVision",
            original_language: "en",
            poster_path: "/glKDfE6btIRcVB5zrjspRIs4r52.jpg",
            vote_average: 8.4,
            vote_count: 4073,
            name: "Big city",
            overview: "",
            id: 3,
            release_date: "2021-01-15",
            popularity: 3170.54,
            title: "Big city",
            video: false
        }
    ],
    category: "horror"
};

const {reducer: categoryMoviesReducer} = slice

test('correct movies should be added', () => {
    const action = fetchMovies.fulfilled({movies: startState.movies}, 'requestId', "action");

    const endState = categoryMoviesReducer({movies: [], category: "drama"}, action);

    expect(endState.movies.length).toBe(3);
});


test('correct category should be set', () => {
    const action = setCategory('drama')
    const endState = categoryMoviesReducer(startState, action)

    expect(endState.category).toBe('drama')
})