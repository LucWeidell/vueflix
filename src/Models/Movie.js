

export class Movie {

  constructor(data){
    // this.id = id
    this.title = data.title
    this.poster = 'https://image.tmdb.org/t/p/w500' + data.poster_path
    this.poster2 = 'https://image.tmdb.org/t/p/w500' + data.backdrop_path
    this.score = data.vote_average
  }
}