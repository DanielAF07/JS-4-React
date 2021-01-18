import styled from '../lib/styled-components.js'
import { Component, createElement } from '../lib/react/index.js'
import { unmountComponentAtNode } from '../lib/react-dom.js'


const UserStyled = styled.div`
    background-image: linear-gradient(to bottom, ${(props) => props.primaryColor} 0%, ${(props) => props.primaryColor} 130px,${(props) => props.tertiaryColor} 130px, ${(props) => props.tertiaryColor} 131px, ${(props) => props.secondaryColor} 131px, ${(props) => props.secondaryColor} 100%);
    color: ${(props) => props.fontColor};
    text-align: center;
    overflow: hidden;
    padding: 20px;
    font-family: system-ui;
    border-radius: .3rem;
    box-shadow: 0 0 1px rgba(0,0,0,.5);
    cursor: pointer;
    user-select: none;
`

const AvatarStyled = styled.img`
    max-width: 150px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 2px black;
    object-fit: cover;
    max-width:160px;
    max-height:160px;
    width: 160px;
    height: 160px;
`

const theme = {
    light: {
        primaryColor: '#f9f9f9',
        secondaryColor: 'white',
        tertiaryColor: 'rgba(0,0,0,.15)',
        fontColor: 'black',
    },
    dark: {
        primaryColor: '#212429',
        secondaryColor: '#212429',
        tertiaryColor: 'white',
        fontColor: 'white',
    }
}

class User extends Component {
    state = {
        mode: 'light',
        age: this.props.age
    }
    setMode = (event) => {
        if(event.matches) {
            return this.setState({
                mode: 'dark'
            })
        }
        return this.setState({
            mode: 'light'
        })
    }

    componentDidMount(){
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        this.setMode(mediaQuery)
        mediaQuery.addEventListener('change', this.setMode)
    }

    handleClick = (event) => {
        this.setState({
            age: this.state.age + 1
        })
    }

    render() {
        const { mode, age } = this.state
        const colors = mode === 'light' ? theme.light : theme.dark
        const { name, avatar} = this.props
        return UserStyled({
            ...colors,
            onClick: this.handleClick,
            children: [
                AvatarStyled({
                    src: avatar
                }),
                createElement('h2', null, `Hola! Soy ${name} y tengo ${age} años. Estoy en ${mode} modo`)
            ]
        })
    }
}

export default User