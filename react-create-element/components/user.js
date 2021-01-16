import { Component, createElement } from '../lib/react/index.js'
import { unmountComponentAtNode } from '../lib/react-dom.js'
class User extends Component {
    displayName = 'User'
    state = {
        age: this.props.age
    }

    componentDidMount(){
        console.log(`El componente ${this.displayName} ya se renderizó`)
    }
    componentWillMount(){
        console.log(`El componente ${this.displayName} se va a renderizar por primera vez`)
    }
    componentDidUpdate(){
        console.log(`El componente ${this.displayName} se actualizó`)
    }
    componentWillUpdate(){
        console.log(`El componente ${this.displayName} se va a actualizar`)
    }

    handleClick = (event) =>{
        this.setState({
            age: this.state.age + 1
        })
        if(this.state.age >= 30){
            console.log()
            //unmountComponentAtNode(document.getElementById(this.props.id))
        }
    }

    render() {
        const { avatar, name, id } = this.props
        const { age } = this.state
        return createElement('div', {
            onClick: this.handleClick,
            class: 'user',
            id,
            children: [
                createElement('div', {
                    class: 'avatar',
                    children: createElement('img',{
                        style: `
                            object-fit: cover;
                            max-width:160px;
                            max-height:160px;
                            width: 160px;
                            height: 160px;
                        `,
                        class: 'img',
                        src: avatar
                    })
                }),
                createElement('h2', null, `Hola soy ${name} y tengo ${age} años`)
            ]
        })
    }
}

export default User