function render(element, container){
    container.insertAdjacentHTML('beforeend', element.render())
}

export {
    render
}