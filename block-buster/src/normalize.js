// let popularList = [...rawMovieList].sort((a,b) => a.vote_average > b.vote_average ? -1 : 1)
// let notPopularList = [...popularList].reverse()

function movieListAsMap(newList, oldList = new Map()){
    if(!Array.isArray(newList)){
        newList = [newList]
    }
    return newList.reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, oldList)
}

function movieAsMap(newMovie){
    return [newMovie].reduce((list, movie) => {
        list.set(movie.id, movie)
        return list
    }, new Map())
}

function getAllId(list, oldList = []){
    if(!Array.isArray(list)){
        list = [list]
    }
    return oldList.concat(list.map(movie => movie.id))
}

function getMostValued(list, oldList = []){
    if(!Array.isArray(list)){
        list = [list]
    }
    return list.reduce((list, movie) => {
        if(movie.vote_average >= 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}

function getLeastValued(list, oldList = []){
    if(!Array.isArray(list)){
        list = [list]
    }
    return list.reduce((list, movie) => {
        if(movie.vote_average < 7){
            list.push(movie.id)
        }
        return list
    }, oldList)
}

export {
    movieListAsMap,
    movieAsMap,
    getAllId,
    getMostValued,
    getLeastValued
}