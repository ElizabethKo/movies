<template>
  <div class="header">
    <p>list of movies</p>

  </div>
</template>

<script>
export default {
  name: "MovieHeader",
}
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkseagreen;
  padding: 2px 0;
  border-radius: 0 0 20px 20px;
  height: 62px;
  color: #fff;
  font-size: 25px;
}
@media(max-width: 500px) {

  .header{
    padding: 15px 0;
  }
}
</style>