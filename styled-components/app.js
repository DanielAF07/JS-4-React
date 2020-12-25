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

function component(strings, ...dynamicValues) {
    return function(props) {
        let newContent = strings.slice()
        dynamicValues.forEach((value, index) => {
            newContent[index] += props[value]
        })
        return newContent.join("")
    }
}


const htmlTags = ['h1', "h2", "h3", "div", "p", "small", "br", "button"];

const styled = createStyledElements(htmlTags)

const TitleStyled = styled.div`
    display:flex;
    font-family: system-ui;
    color: orange;
    font-size: 50px;
    text-shadow: 2px 2px 0 black;
    line-height: 100vh;
    margin: 0;
    justify-content: center;
`


const props = {
    message: "No te rindas"
}
const Title = component`<h1 style="margin: 0;"> ${'message'} </h1>`(props)



console.log(Title)

function render(component, container) {
    container.innerHTML = component
}

render(TitleStyled(Title), window.container)