import { Component, createElement } from '../lib/react/index.js'
import User from './user.js'
import Wrapper from './wrapper.js'
import UserStyled from './user-styled.js'

class App extends Component {
    render() {
        return createElement('div',{
            class: 'app',
            children: [
                new Wrapper({
                    children: [
                        new User({
                            name: 'Ash',
                            avatar: './images/ash.jpg',
                            age: 10,
                            id:'ash'
                        }),
                        new UserStyled({
                            name: 'Ash',
                            avatar: './images/ash.jpg',
                            age: 10,
                            id:'ash'
                        }),
                        new UserStyled({
                            name: 'Brock',
                            avatar: 'https://2img.net/h/www.absoluteanime.com/pokemon/brock.jpg',
                            age: 18,
                            id:'brock'
                        }),
                        new UserStyled({
                            name: 'Misty',
                            avatar: 'https://2img.net/h/animefan25.tripod.com/images/Pokemon/misty12.jpg',
                            age: 12,
                            id:'misty'
                        })
                    ]
                })
            ]
        })
    }
}

export default App