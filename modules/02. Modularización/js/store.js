import { createStore } from './redux/index.js'
import reducer from './reducers/index.js'

let clicksInfo = {
    burned: 0,
    clicks: 1360563,
}

const store = createStore(reducer, clicksInfo)

export default store