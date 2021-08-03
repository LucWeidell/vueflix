<template>
  <div class="movie row">
    <div class="col-4">
      <img :src="movie.poster" alt="movie-img" class="img-fluid">
    </div>
    <div class="col-4">
      <div class="div">{{movie.title}}</div>
      <!-- text danger score here -->
      <p class="text-danger">{{movie.score}}</p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Movie from '../Models/Movie.js'
import { moviesService } from '../services/MoviesService.js'
export default {
  name: 'Movie',
  props: { movie:{type: Movie, required: true}},
  setup(props){
    const state = reactive({
    //NOTE nothing here
    })
    return { state,
    setActiveMovie(){
      moviesService.setActiveMovie(props.movie)
    }
    }
  }
}
</script>

<style scopped>
.movie:hover{
  transform: scale(1,1);
  color: aqua;
  cursor: pointer;
}
</style>