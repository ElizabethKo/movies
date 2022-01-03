<template>
  <div class="movie_movie film_block ">
    <div class="">
      <div class="movie_img ">
        <div class="movie_info">
          <Stars/>
          <div class="rating">
            <p>{{rating}}</p>
          </div>
          <p class="genres">{{ movieGenres}}</p>
        </div>
        <div>
          <img class="img" :src="movie.large_cover_image" @error="defaultImage" alt="movie poster">
        </div>
      </div>
      <h1 class="title">{{movie.title}}</h1>
      <p class="year">{{movie.year }}</p>
      <div class="">
        <movie-description
            :id="'movie_description_'+movie.id"
            :movie="movie"
            :isDescriptionActive="description.isActive"
            v-on:closeAbout="closeAbout"
        >
        </movie-description>
        <button type="button" :value="movie.id" @click="moreToggle" class="more">{{description.isActive ? 'HIDE' : 'MORE'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "./RatingStars";
import MovieDescription from "./MovieDescription";
export default {
  name: "GalleryMovies",
  components: { Stars, MovieDescription},
  props: {
    movie: {
      id: Number,
      title: String,
      year: Number,
      genres: Array,
      description_full: String,
      large_cover_image: String,
      rating: Number,
      active: Boolean
    }
  },
  data() {
    return {
      movieGenres: this.movie.genres ? this.movie.genres.join(" ") : "No genres" ,
      rating: this.movie.rating ? this.movie.rating : "No rating",
      description: {
        type: Boolean,
        isActive: false,
      }
    }
  },
  methods: {
    defaultImage(event) {
      event.target.src = require('../assets/icons/no-icon.png')
    },
    moreToggle() {
      this.description.isActive = !this.description.isActive;
    },
    closeAbout() {
      this.description.isActive = false
    }
  }
}
</script>

<style scoped lang="scss">

.movie_movie {
  width: 25%;
  margin-bottom: 25px;
  padding: 0 12.5px;
}

.img {
  max-width: 100%;

  &:hover {
    border: 5px solid green;
  }
}

.img:hover .movie_info {
  opacity: 1;
  background: rgba(48, 53, 57, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  //backdrop-filter: blur(4px);
  //-webkit-backdrop-filter: blur(4px);
  color: white;
}

.movie_img {
  position: relative;
  border: 5px solid darkseagreen;
  transition: border .4s ease;
  border-radius: 5px;
}

.movie_info {
  cursor: pointer;
  font-size: 15px;
  opacity: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
  padding: 35px 10px 0 10px;

  &:hover {
    opacity: 1;
    background: rgba(48, 53, 57, .8);
  }
}

@media (max-width: 900px) {
  .film_block,
  .more {
    width: 33.33333%;
  }
}

@media (max-width: 650px) {
  .film_block,
  .more{
    width: 50%;
  }
}

@media (max-width: 450px) {
  .film_block {
    width: 100%;
    padding: 30px 75px;
  }
}

@media (max-width: 450px) {
  .more {
    width: 100%;
    padding: 25px 55px;
  }
}

.title {
  color: #999999;
  font-weight: bold;
  margin: 5px;
  font-size: 15px;
}

.year {
  color: #999999;
  font-weight: normal;
  margin: 5px;
}

.rating {
  font-weight: bold;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
}

.genres {
  color: white;
  font-size: 17px;
  font-weight: bold;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.more {
  width: 250px;
  height: 35px;
  background: darkseagreen;
  border-radius: 5px;
  color: #303539;
  transition: 0.8s ease;
  margin: 10px;

  &:hover {
    border: 3px solid green;
  }
}





</style>