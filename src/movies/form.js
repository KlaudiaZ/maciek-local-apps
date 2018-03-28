import { addMoviesToList } from './list';

export const init = () => {
    const addMovie = document.querySelector('#bug-add');
    const movieType = document.getElementById('movie-type');
    const movieTitle = document.getElementById('movie-title-add');
    const movieDescription = document.getElementById('movie-title-add');
    addMovie.addEventListener('click', (e) => {
        addMoviesToList(movieType.value, movieTitle.value, movieDescription.value);
    });
}