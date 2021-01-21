import { API_KEY } from './constants.js'

class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }
    baseAPI = 'https://api.themoviedb.org/3/'
    get discoverMovie(){
        return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`
    }
    get lookForAMovie(){
        return `${this.baseAPI}search/company?api_key=${this.API_KEY}`
    }
    async moviePage(page){
        const response = await fetch(`${this.discoverMovie}&page=${page}`)
        const data = await response.json()
        return data
    }
    async searchMovieByID(query){
        const response = await fetch(`${this.baseAPI}movie/${query}?api_key=${this.API_KEY}`)
        if(response.ok){
            const data = await response.json()
            return data
        }
        return false
    }
    async searchMovieByName(query){
        const response = await fetch(`${this.baseAPI}search/movie?api_key=${this.API_KEY}&query=${query}`)
        if(response.ok){
            const data = await response.json()
            return data
        }
        return false
    }

    async searchMovie(query){
        const response = await this.searchMovieByName(query)
        if(response.total_results){
            return response.results
        }
        const responseID = await this.searchMovieByID(query)
        if(responseID){
            return responseID
        }
        return false
    }
}

export default new API(API_KEY)