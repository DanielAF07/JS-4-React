import { BURN }  from './actions/index.js'
import store from './store.js'

store.subscribe(() => {
    // console.log("Ha cambiado un estado", store.getState())
    window.alterResult.textContent = `Te faltan ${store.getState().clicks} para quemar una pizza y una coca cola`
    window.result.textContent = `Haz quemado ${store.getState().burned.toFixed(2)} calorías`
})

const burn = () => {
    store.dispatch({
        type: BURN,
        payload: {
            calories: 1.42
        }
    })
}

window.burn.addEventListener('click', burn)