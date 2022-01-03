<template>
  <div>
    <div class="header">
      <snow-snow/>
      <p>movies</p>
      <img class="hat" src="../assets/icons/icons8-santa-hat-64.png" alt="hat">
    </div>
  </div>
</template>

<script>

import SnowSnow from "./Snow";
export default {
  name: "MovieHeader",
  components: {SnowSnow},
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
.hat{
  width: 50px;
  height: 50px;
}
</style>