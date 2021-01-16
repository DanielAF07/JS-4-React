import { render, unmountComponentAtNode } from './lib/react-dom.js'
import App from './components/app.js'
const container = window.root

render(new App(), container)