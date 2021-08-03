import { AppState } from "../AppState"
import { Movie } from "../Models/Movie"
import { movieApi } from "./AxiosService"

class MoviesService{

  async getMovies(query = 'Jaws'){
    try {
      const res = await movieApi.get('&query='+ query)
      console.log(res.data)
      AppState.movies = res.data.results.map(movie=> new Movie(movie))
    } catch (error) {
      console.error('Error getting movies:', error)
    }
  }

  setActiveMovie(movie){
    console.log('Setting active movie:', movie)
    AppState.activeMovie = new Movie(movie)
  }
}

export const moviesService = new MoviesService()