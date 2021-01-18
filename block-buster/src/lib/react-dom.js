function render(element, container = document.body){
    if(typeof element === 'string' || element instanceof Element){
        return container.append(element)
    }
    function reRender(newChild) {
        container.replaceChild(newChild, childElement)
        childElement = newChild
    }
    element.update = reRender
    let childElement = element.build()
    container.append(childElement)
    element.componentDidMount()
}

function unmountComponentAtNode(container){
    if(container && container.hasChildNodes()) {
        container.style.display = "None"
        return true
    }else {
        return false
    }
}

export {
    render,
    unmountComponentAtNode
}