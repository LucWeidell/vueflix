<template>
  <div class="MovieList row p-2 bg-dark text-light border border-primary shadow-sm mt-2 ">
    <form @submit.prevent="getMovies" action="">
      <input v-model="state.query" type="text" name="" id="" placeholder="the movie you are searching for...">
      <button>Search</button>
    </form>
    <!-- <div v-for="m in movies" :key="m.id" class="col-12" @click="setActiveMovie(m)"> {{m.title}} </div> -->
    <div class="col-12">
      <Movie v-for="(m, i) in movies" :key="i" :movie="m" @click="setActiveMovie(m)" />
    </div>

  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState.js'
import { moviesService } from '../services/MoviesService.js'
import Movie from '../components/Movie.vue'
export default {
  name: 'MovieList',
  setup(){
    const state = reactive({
      query: ''
    })
  onMounted(()=> {
    moviesService.getMovies()
  })
    return {
      movies: computed(()=> AppState.movies),
      getMovies(){
        moviesService.getMovies(state.query)
      },
      setActiveMovie(movie){
        moviesService.setActiveMovie(movie)
      },
    state
    }
  },
  components: {Movie}

}
</script>

<style scopped>
.red{
  cursor: pointer;
}
</style>