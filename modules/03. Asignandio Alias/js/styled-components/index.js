const createStyledElements = (tags) => {
    let object = {}
    tags.forEach(tag => object[tag] = (styles) => {
            return function (content) {
                return`
                <${tag} style="${styles}">
                    ${content}
                </${tag}>`
            }
        })
    return object
}

const htmlTags = ['h1', "h2", "h3", "div", "p", "small", "br", "button"];

const styled = createStyledElements(htmlTags)

export default styled