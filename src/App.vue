<template>
  <div id="app">
    <Header/>
    <div class="container ">
      <div class="movies-inner ">

        <gallery-movies
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
            v-on:about-movie="aboutMovie($event)"
            :active="active.about_movie"
            v-on:closeAbout="closeAbout()"
        />

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "@/MovieHeader";
import GalleryMovies from "@/GalleryMovies";

export default {
  name: 'App',
  components: {
    Header, GalleryMovies
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          title: '',
          year: '',
          genres: [],
          description_full: '',
          large_cover_image: '',
          rating: '',
        }
      ],
      active: {
        about_movie: false
      },
    }
  },
  // created() {
  //   axios.get('https://yts.mx/api/v2/list_movies.json')
  //       .then(response => {
  //         this.movies = response.data.data.movies
  //       })
  //       .catch(response => {
  //         console.log(response)
  //       })
  // },
  methods: {
    getMovies() {
      axios.get('https://yts.mx/api/v2/list_movies.json')
          .then(response => {
            this.movies = response.data.data.movies
            console.log(this.movies[0].genres.join(' ').toString())
          })
          .catch(response => {
            console.log(response)
          })
    },
    aboutMovie(movie) {
      this.movie = movie
      this.active.about_movie = true
      this.$emit('about-movie', this.movie)
    },
    closeAbout() {
      this.active.about_movie = false
    },
  },
  created() {
    this.getMovies()
  },
}
</script>

<style>
.movies-inner {
  display: flex;
  flex-wrap: wrap;
  margin: 91px -12.5px;
}


</style>
