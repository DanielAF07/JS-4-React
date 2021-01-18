import { ADD_MOVIES, SET_FILTER } from '../actions/index.js'
import {
    getAllId,
    getLeastValued,
    getMostValued,
    movieListAsMap
} from '../normalize.js'
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
            return state
        default:
            return state
    }
}

export default reducer