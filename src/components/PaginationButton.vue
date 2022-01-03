<template>
  <div>
    <button class="pages" :class="{active}" @click="$emit('buttonClick')">
      {{ sequence }}
    </button>
  </div>

</template>

<script>
export default {
  name: "PaginationButton",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    sequence: {
      type: [Number, String]
    },
  }
}
</script>

<style scoped>
.pages {
  border-radius: 15px;
  color: #303539;
  margin: 8px;
  padding: 5px;
  cursor: pointer;
  background: url("../assets/icons/santa-hat-red(1).png");
  width: 35px;
  border: none;
  font-weight: bolder;
}
.active {
  background: url("../assets/icons/santa-hat-green.png");
}
@media (max-width: 900px) {
  .pages{
    width: 35px;
  }
}

@media (max-width: 650px) {
  .pages{
    width: 25px;
  }
}

@media (max-width: 450px) {
  .pages {
    width: 25px;
  }
}

</style>