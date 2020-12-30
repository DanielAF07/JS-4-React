import { BURN } from '../actions/index.js'

const reducer = (state, {type, payload}) => {
    switch(type){
        case BURN:
            state.burned += payload.calories
            state.clicks--
            return state
        default:
            return state
    }
}

export default reducer