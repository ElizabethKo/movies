<template>
  <div v-if="pagination.lastPage">
    <div>
      <div class="page_wrapper">
        <PaginationButton
            :key="index"
            v-for="index in pagination.window"
            :active="activeIndex === index"
            :sequence="index"
            @buttonClick="changePage($event,index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PaginationButton from "./PaginationButton";

export default {
  name: "PaginationPage",
  components: {PaginationButton},
  data() {
    return {
      active: Boolean,
      activeIndex: 1
    }
  },
  props: {
    pagination: {
      limit: Number,
      totalPages: Number,
      page: Number,
      rowsNumber: Number,
    },
  },
  methods: {
    changePage(event, n) {
      this.$emit('paginationMovies', n)
      if (this.activeIndex === n) {
        this.activeIndex = 1
      } else {
        this.activeIndex = n
      }
    }
  }
}
</script>

<style scoped>
.page_wrapper {
  display: flex;
  margin: 4px;
  padding: 5px;
}
</style>