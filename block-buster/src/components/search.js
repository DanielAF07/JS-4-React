import { Component } from '../lib/react/index.js'
import styled from '../lib/styled-components.js'
import Form from './form.js'
import Input from './input.js'
import Button from './button.js'
import store from '../store.js'
import api from '../api.js'
import { SEARCH_MOVIE, SET_FILTER, SEARCH_ID, ADD_MOVIES } from '../actions/index.js'

class Search extends Component {

    getPage = async (query) => {
        const results = await api.lookForAMovie(query)
        store.dispatch({
            type: ADD_MOVIES,
            payload: results
        })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const query = formData.get('Title')
        const results = await api.searchMovie(query)
        if(results){
            store.dispatch({
                type: ADD_MOVIES,
                payload: results
            })
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