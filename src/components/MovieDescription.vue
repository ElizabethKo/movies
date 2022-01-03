<template>
  <div :class="isDescriptionActive ? movieDescriptionClasses :'hidden'">
    {{ description }}
  </div>
</template>

<script>
export default {
  name: "movie-description",
  data() {
    return {
      movieDescriptionClasses: "open-about",
      description: this.movie.description_full ? this.movie.description_full : "no description"
    }
  },
  props: {
    movie: {
      description_full: String
    },
    isDescriptionActive: {
      type: Boolean,
    }
  }
}
</script>

<style scoped lang="scss">

.hidden {
  display: none;
}

.open-about {
  color: #42b983;
  margin: 5px auto;
  padding: 5px;
  font-size: 15px;
  line-height: 17px;
}
</style>