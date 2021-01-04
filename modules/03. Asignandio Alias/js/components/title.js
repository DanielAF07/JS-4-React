import styled from '../styled-components/index.js'
import { component as Component } from '../react/index.js'

const TitleStyled = styled.h1`
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

const Title = Component`<marquee style="margin: 0;"> ${'message'} </marquee>`(props)

export default TitleStyled(Title)