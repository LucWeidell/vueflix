<template>
  <div class="MovieDetails row border border-secondary rounded p-2">
    <h2 class="col-md-12">{{activeMovie.title}}</h2>
    <div class="col-5">
      <img :src="activeMovie.poster" alt="movie-poster" class='img-fluid'>
    </div>
    <div class="col 6">
      {{activeMovie.overview}}
    </div>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  name: 'MovieDetails',
  setup(){
    const state = reactive({

    })
    return { state,
      activeMovie: computed(()=> AppState.activeMovie)
    }
  }
}
</script>