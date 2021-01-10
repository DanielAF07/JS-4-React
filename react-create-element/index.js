import { render } from './lib/react-dom.js'
import App from './components/app.js'
const container = window.root

render(new App({
    avatar: './images/ash.jpg',
    name: 'Ash',
}), container)