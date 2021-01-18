import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'
import store from '../store.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

class Search extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        const formData = new FormData(event.target)
        const query = formData.get('Title')
        if(query){
            return store.dispatch({
                type: SEARCH_MOVIE,
                payload: query
            })
        } else {
            return store.dispatch({
                type: SET_FILTER,
                payload: 'all'
            })
        }
        const filteredMovies = searchMovie(query)
        console.log(filteredMovies)
        if(filteredMovies[0] != undefined){
            return render(filteredMovies)
        }
        render(movies)
        alert('No encontramos tu pelicula')
    }
    render() {
        return Form({
            onSubmit: this.handleSubmit,
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