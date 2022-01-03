<template>
  <div id="app">
    <Header/>
    <div class="container ">
      <div class="movies-inner ">
        <pagination
            class="buttons"
            :pagination="pagination"
            @paginationMovies="getMovies"
        />
        <gallery-movies
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        >
        </gallery-movies>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from "./components/MovieHeader";
import GalleryMovies from "./components/GalleryMovies";
import Pagination from "./components/PaginationPage";

export default {
  name: 'App',
  components: {Pagination, Header, GalleryMovies},
  data() {
    return {
      movies: [
        {
          id: 1,
          title: '',
          year: 0,
          genres: [],
          description_full: '',
          large_cover_image: '',
          rating: 0,
        }
      ],
      pagination: {
        firstPage: 1,
        lastPage: null,
        range: [],
        limit: 10,
        currentPage: 1,
        buttons: 5
      },
      active: {
        about_movie: false
      },
      movie: {
        description_full: String,
      }
    }
  },
  methods: {
    getMovies(currentPage, limit) {
      axios.get('https://yts.mx/api/v2/list_movies.json', {
        params: {
          page: currentPage ? currentPage : this.page,
          limit: limit ? limit : this.pagination.limit
        }
      })
          .then(response => {
            this.movies = response.data.data.movies
            this.paginationRender(response.data.data.movie_count, response.data.data.page_number)
          })
          .catch(response => {
            console.log(response)
          })
    },
    closeAbout() {
      this.active.about_movie = false
    },
    paginationRender(total, currentPage) {
      this.pagination.window = []
      this.pagination.lastPage = Math.ceil(total / this.pagination.limit)
      this.pagination.currentPage = currentPage

      const
          delta = 2,
          lastPageSlot = 1,
          window = [],
          left = currentPage - delta,
          right = currentPage + delta + lastPageSlot


      let windowStart = 0;

      for (let i = 1; i <= this.pagination.lastPage; i++) {
        if (i === 1 || i === this.pagination.lastPage || i >= left && i < right) {
          window.push(i);
        }
      }
      for (let i of window) {
        if (windowStart) {
          if (i - windowStart === 2) {
            this.pagination.window.push(windowStart + 1);
          } else if (i - windowStart !== 1) {
            this.pagination.window.push('...');
          }
        }
        this.pagination.window.push(i);
        windowStart = i;
      }
    }
  },
  created() {
    this.getMovies()
  }
}
</script>

<style>
.movies-inner {
  display: flex;
  flex-wrap: wrap;
  margin: 91px -12.5px;
}
.buttons {
  position: absolute;
  right: 50px;
  top: 50px;
}

</style>
