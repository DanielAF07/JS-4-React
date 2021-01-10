import { Component, createElement } from '../lib/react/index.js'
import User from './user.js'
import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'


function hello(){
    console.log("HOLAA")
}

class App extends Component {
    render() {
        return createElement('div',{
            class: 'app',
            children: [
                new Wrapper({
                    children: [
                        new User({
                            name: 'Ash',
                            avatar: './images/ash.jpg'
                        }),
                        new User({
                            name: 'Brock',
                            avatar: 'https://2img.net/h/www.absoluteanime.com/pokemon/brock.jpg'
                        }),
                        new User({
                            name: 'Misty',
                            avatar: 'https://2img.net/h/animefan25.tripod.com/images/Pokemon/misty12.jpg'
                        })
                    ]
                })
            ]
        })
    }
}

export default App