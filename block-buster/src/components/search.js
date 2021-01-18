import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'

class Search extends Component {
    render() {
        return Form({
            children: [
                new Input({
                    placeholder: 'Escribe tu pelicula favorita',
                    name: 'Title',
                    type: 'text'
                }),
                new Button(null, 'Buscar')
            ]
        })
    }
}

export default Search