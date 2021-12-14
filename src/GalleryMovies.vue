<template>
  <div class="movie_movie film_block ">
    <div class="">
      <div class="movie_img ">
        <div class="movie_info">
          <Stars/>
          <div class="rating">
            <p>{{ movie.rating }}</p>
          </div>
          <p class="genres" >{{ movie.genres.join(" ").toString() }}</p>
        </div>
        <div>
          <div class='open-about' :class='{show: active}' @click='$emit("closeAbout")'>
          </div>
          <div class='open' :class='{show: active}'>
            <div class='open_close' @click='$emit("closeAbout")'>
              back to catalog
            </div>
            {{ movie.description_full }}
          </div>
          <img class="img" :src="movie.large_cover_image" @error="defaultImage" alt="movie poster">
        </div>
      </div>

      <div class="">
        <button type="button" :value="movie.id" @click="$emit('about-movie', movie)" class="more">more</button>
        <h1 class="title">{{ movie.title }}</h1>
        <p class="year">{{ movie.year }}</p>
      </div>

    </div>

  </div>
</template>

<script>

import Stars from "@/components/RatingStars";

export default {
  name: "GalleryMovies",
  components: {Stars},
  props: {
    movie: {
      type: Object,
      default: function () {
        return {
          genres: []
        }
      }
    },
    active: {
      type: Boolean
    },
  },
  // movie: {
  //   type: Object,
  //   default: function () {
  //     return {
  //       id: 1,
  //       title: '',
  //       year: '',
  //       genres: [],
  //       description_full: '',
  //       large_cover_image: '',
  //       rating: '',
  //     }
  //   }
  // },
  methods: {
    defaultImage(event) {
      event.target.src = require('./assets/icons/no-icon.png')
    },
  },
  computed: {}
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
  .film_block {
    width: 33.33333%;
  }
}

@media (max-width: 650px) {
  .film_block {
    width: 50%;
  }
}

@media (max-width: 450px) {
  .film_block {
    width: 100%;
    padding: 30px 75px;
  }
}

.title {
  color: #999999;
  font-weight: bold;
  letter-spacing: 2px;
}

.year {
  color: #999999;
  font-weight: normal;
  letter-spacing: 2px;
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


.open-about {
  width: 100%;
  height: 100vh;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  position: fixed;
  bottom: 0;
  top: 0;
  display: none;
  transition: display 1s;

  &.show {
    display: block;
  }
}

.open {
  width: 100%;
  height: 100vh;
  background-color: yellowgreen;
  position: fixed;
  bottom: 0;
  top: -105vw;
  padding: 15px;
  transition: top .5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    top: 0;
  }
}

.open_close {
  font-size: 16px;
  padding: 15px;
  border-radius: 20px;
  right: 10px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: #42b983;

  }
}


</style>