import rawMovieList from './movies.js'

let popularList = [...rawMovieList].sort((a,b) => a.vote_average > b.vote_average ? -1 : 1)
let notPopularList = [...popularList].reverse()

const movieList = rawMovieList.reduce((list, movie) => {
    list.set(movie.id, movie)
    return list
}, new Map())

const allMovies = rawMovieList.map(movie => movie.id)

const popular = popularList.reduce((list, movie) => {
    if(movie.vote_average >= 7){
        list.push(movie.id)
    }
    return list
}, [])

const notPopular = notPopularList.reduce((list, movie) => {
    if(movie.vote_average < 7){
        list.push(movie.id)
    }
    return list
}, [])

export {
    movieList,
    allMovies,
    popular,
    notPopular
}