<template>
  <div class="fullscreen">
    <div class="headline">
      Your Hanwriting into Digital Font
    </div>
    <div class="bar"></div>
    <div class="info">We convert your hanwriting into digital font for free, which can be used in yout mobile device and computers.</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullscreen{
  background-image: url("../assets/background-1.jpg");
  background-color: #f7e990;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
