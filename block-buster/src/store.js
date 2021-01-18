import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'
import movies from './movies.js'

import {
    movieListAsMap,
    getAllId,
    getMostValued,
    getLeastValued
} from './normalize.js'

const initialState = {
    movieList: movieListAsMap(movies),
    filter: 'all',
    list: {
        all: getAllId(movies),
        mostValued: getMostValued(movies),
        leastValued: getLeastValued(movies)
    }
}

const store = createStore(reducer, initialState)

export default store