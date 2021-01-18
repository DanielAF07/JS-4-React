// let popularList = [...rawMovieList].sort((a,b) => a.vote_average > b.vote_average ? -1 : 1)
// let notPopularList = [...popularList].reverse()

function movieListAsMap(newList, oldList = new Map()){
    return newList.reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, oldList)
}

function getAllId(list, oldList = []){
    return oldList.concat(list.map(movie => movie.id))
}

function getMostValued(list, oldList = []){
    return list.reduce((list, movie) => {
        if(movie.vote_average >= 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}

function getLeastValued(list, oldList = []){
    return list.reduce((list, movie) => {
        if(movie.vote_average < 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}

export {
    movieListAsMap,
    getAllId,
    getMostValued,
    getLeastValued
}