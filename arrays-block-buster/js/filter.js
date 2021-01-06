import {renderFromMap} from './render.js'
import { 
    allMovies, 
    popular as mostValued, 
    notPopular as leastValued,
    movieList
} from './normalize.js'

filter.addEventListener('change', function() {
    switch(this.value){
        case 'most-valued':
            return renderFromMap(mostValued, movieList)
        case 'least-valued':
            return renderFromMap(leastValued, movieList)
        default:
            return renderFromMap(allMovies, movieList)
    }
})