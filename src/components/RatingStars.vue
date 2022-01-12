<template>
  <div class="stars">
    <div class="star__grey">
<!--      <img src="../assets/icons/star.png" alt="star" class="star__grey">-->
      <div class="form_item">
        <div class="form_label"></div>
        <div ref="rating" class="rating">
          <div class="rating_body">
            <div ref="ratingActive" :class="{ratingActive}">
            <div class="rating_items">
              <input type="radio" class="rating_item" value="1" name="rating">
              <input type="radio" class="rating_item" value="2" name="rating">
              <input type="radio" class="rating_item" value="3" name="rating">
              <input type="radio" class="rating_item" value="4" name="rating">
              <input type="radio" class="rating_item" value="5" name="rating">
            </div>
            </div>
          </div>
          <div class="rating_value">
            <p ref="ratingValue">{{ rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '/public/stars.module.css';

export default {
  name: "RatingStars",
  props: {
    movie: {
      rating: Number
    },
  },
  data() {
    return {
      ratingActive: true,
      ratingValue: Number,
      isActive: true,
      rating: this.movie.rating ? this.movie.rating : "no rating " ,
    }
  },
  mounted() {
    this.initRating()
  },
  methods: {
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    initRating() {
      if (this.isNumeric( this.$refs.ratingValue.innerHTML)){
        this.$refs.ratingActive.style.width = `${parseInt(this.$refs.ratingValue.innerHTML) / 0.07}%`
      }
    }
  }
}
</script>

<style scoped>
.stars {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.rating {
  display: flex;
  align-items: flex-end;
  font-size: 40px;
  line-height: 0.75;
}

.rating_body {
  position: relative;
}

.rating_body::before {
  content: "⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆";
  display: block;
}

.ratingActive {
  display: flex;
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.ratingActive::before {
  content: "⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #ffd300;
}

.rating_items {
  display: flex;
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
}

.rating_item {
  flex: 0 0 20%;
  height: 100%;
  opacity: 0;
}

.rating_value {
  font-size: 50%;
  line-height: 1;
  padding: 0 0 0 10px;
}
</style>