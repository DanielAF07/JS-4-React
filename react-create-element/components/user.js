import { Component, createElement } from '../lib/react/index.js'

class User extends Component {
    handleClick = (event) =>{
        console.log(this.props.name)
    }

    render() {
        const { avatar, name } = this.props
        
        return createElement('div', {
            onClick: this.handleClick,
            class: 'user',
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
                createElement('h2', null, name)
            ]
        })
    }
}

export default User