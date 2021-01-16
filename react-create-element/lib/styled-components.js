import { createElement } from './react/index.js'

const htmlTags = ['h1', "h2", "h3", "div", "p", "small", "br", "button", "img", 'footer', 'header', 'article'];

const createStyledElements = (tags) => {
    let object = {}
    tags.forEach(tag => object[tag] = (styles) => { 
        return function (props, content) {
            return createElement(tag, {
                ...props,
                style: styles
            }, content)
        }
    })
    return object
}
const styled = createStyledElements(htmlTags)

export default styled