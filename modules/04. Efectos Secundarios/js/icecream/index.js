import { makeIceCream } from './icecream-machine.js'
import { selectFlavor } from './flavors.js'

const $flavors = document.querySelectorAll('.flavor')

$flavors.forEach( flavor => flavor.addEventListener('click', selectFlavor))

window.btn.addEventListener('click', () => {
    const $flavors = document.querySelectorAll('.flavor.is-active')
    try {
        makeIceCream($flavors[0], $flavors[1])
    } catch (error) {
        alert('Aun no completas tu orden de helado')
    }
})