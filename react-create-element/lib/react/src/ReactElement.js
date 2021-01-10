import { render } from '../../react-dom.js'

function renderChildren(children, container) {
    if(!Array.isArray(children)){
        return render(children, container)
    }
    return children.forEach(child => render(child, container))
}

function setEvents(element, event, callback){
    return element.addEventListener(event, callback)
}

function setProperties(prop, value, element) {
    //Suppport for events
    if(prop.startsWith('on') && typeof value === 'function'){
        let event = prop.toLowerCase().replace('on', '')
        return setEvents(element, event, value)
    }
    //support for children
    if(prop === 'children') {
        return renderChildren(value, element)
    }
    
    //support for attributes
    const attribute = prop
    return element.setAttribute(attribute, value)
}

export function createElement(type, props, content) {
    // Elemento
    const element = document.createElement(type)
    // Contenido
    if(content){
        element.textContent = content
    }
    if(props) {
        Object.keys(props).forEach(prop => setProperties(prop, props[prop], element))
    }
    return element
}