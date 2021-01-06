export function renderFromMap(list, map){
    cleanMovieList()
    list.forEach(movieId => renderElement(map.get(movieId)))
}

function renderElement(movie) {
    const element = buildElement(movie)
    window.container.insertAdjacentHTML('beforeend',element)
}

function buildElement({title, poster_path, vote_average, id, recommended}) {
    return `
    <article class="movie ${recommended ? 'recommended' : ''} ">
        <img class="movie-poster" src="//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}" alt="${title}">
        <p class="movie-title">${title}</p>
        <p class="movie-id">${id}</p>
        <span class="movie-rate">${vote_average}</span>
    </article>
    `
}

function cleanMovieList(){
    window.container.innerHTML = ""
}

export default function renderMovieList(movieList) {
    cleanMovieList()
    movieList.forEach(renderElement)
}