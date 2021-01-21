import { ADD_MOVIES, SEARCH_MOVIE, SET_FILTER, SEARCH_ID } from '../actions/index.js'
import {
    getAllId,
    getLeastValued,
    getMostValued,
    movieListAsMap
} from '../normalize.js'

import api from '../api.js'

const reducer = (state, {type, payload}) => {
    switch(type){
        case ADD_MOVIES:{
            const movieList = movieListAsMap(payload, state.movieList)
            const all = getAllId(payload, state.list.all)
            const leastValued = getLeastValued(payload, state.list.leastValued)
            const mostValued = getMostValued(payload, state.list.mostValued)
            return {
                ...state,
                movieList,
                list: {
                    ...state.list,
                    all,
                    leastValued,
                    mostValued
                }
            }
        }
        case SET_FILTER:
            return {
                ...state,
                filter: payload
            }
        
        case SEARCH_MOVIE:
            return {
                ...state,
                filter: 'search',
                list: {
                    ...state.list,
                    search: searchMovie(payload, state.movieList, state.list.all)
                }
            }
        case SEARCH_ID:{
            return {
                ...state,
                filter: 'search',
                list: {
                    ...state.list,
                    search: findById(payload, all)
                }
            }
        }
        default:
            return state
    }
}

function filterByTitle(title, list){
    const results = api.searchMovie(title)
    console.log(results)
    const matches = []
    list.forEach((movie) => {
        if(movie.title.toLowerCase().includes(title.toLowerCase())){
            matches.push(movie.id)
        }
    })
    return matches
}

function findById(id, list){
    if(list.includes(parseInt(id,10))){
        return [parseInt(id,10)]
    }
    return list
}

function searchMovie(query, list, allIds) {
    if(isNaN(query)){
        return filterByTitle(query, list)
    }
    return findById(query, allIds)
}

export default reducer