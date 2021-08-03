<template>
  <div class="component container-fluid">
    <div class="row bg-success">
      <div class="col-12 bg-success">
        <p>We did it</p>
      </div>
      <div class="col-md-4">
        <MovieList />
      </div>
      <div class="col-md-6"></div>
      <MovieDetails />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import MovieList from '../components/MovieList.vue'
import MovieDetails from '../components/MovieDetails.vue'
export default {
  name: 'HomePage',
  setup(){
    const state = reactive({
      isOn: true
    })
    return { state }
  },
  components: {MovieList, MovieDetails}
}
</script>

<style scopped>
.img{
  height: 10vh
}
</style>
