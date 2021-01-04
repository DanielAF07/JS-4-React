import { isRequired } from './validation.js'

function makeIceCream(flavor1 = isRequired('flavor1'), flavor2 = isRequired('flavor2')){
    alert(`Haz comprado un delicioso helado de ${flavor1.dataset.flavor} y ${flavor2.dataset.flavor}`)
}

export {
    makeIceCream
}