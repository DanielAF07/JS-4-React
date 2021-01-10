function render(element, container = window){
    if(typeof element === 'string' || element instanceof Element){
        return container.append(element)
    }
    const childElement = element.render()
    return container.append(childElement)
}

export {
    render
}