import { createElement } from './react/index.js'

const htmlTags = ['h1', "h2", "h3", "div", "p", "small", "br", "button", "img", 'footer', 'header', 'article', 'form', 'input', 'select', 'section'];


function buildStyles(strings, dynamicValues, props) {
    let style = strings.slice()
    dynamicValues.forEach((value, index) => {
        style[index] += value(props)
    })
    return style.join('')
}

const createStyledElements = (tags) => {
    let object = {}
    tags.forEach(tag => object[tag] = (strings, ...dynamicValues) => { 
        return function (props, content) {
        const style = buildStyles(strings, dynamicValues, props)
            return createElement(tag, {
                ...props,
                style
            }, content)
        }
    })
    return object
}
const styled = createStyledElements(htmlTags)

export default styled