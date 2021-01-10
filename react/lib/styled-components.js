const htmlTags = ['h1', "h2", "h3", "div", "p", "small", "br", "button", "img"];

const createStyledElements = (tags) => {
    let object = {}
    tags.forEach(tag => object[tag] = (styles) => {
        if (tag == 'img'){
            return function (content) {
                return`
                <${tag} style="${styles}" ${content}>
                </${tag}>`
            } 
        } else {
            return function (content) {
                return`
                <${tag} style="${styles}">
                ${content}
                </${tag}>`
            }
        }
    })
    return object
}
const styled = createStyledElements(htmlTags)

export default styled