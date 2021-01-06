import movies from './movies.js'
import render from './render.js'
let $search = window['search-form']

$search.addEventListener('submit', function (event) {
    event.preventDefault()
    const formData = new FormData(this)
    const query = formData.get('title')
    const filteredMovies = searchMovie(query)
    console.log(filteredMovies)
    if(filteredMovies[0] != undefined){
        return render(filteredMovies)
    }
    render(movies)
    alert('No encontramos tu pelicula')

})

function filterByTitle(title){
    return movies.filter((movie, index) => 
        movie.title.toLowerCase().includes(title.toLowerCase())
    )
}

function findById(id){
    return movies.find(movie => id == movie.id)
}

function searchMovie(query) {
    if(isNaN(query)){
        return filterByTitle(query)
    }
    return [findById(query)]
}