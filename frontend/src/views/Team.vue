<template>
  <div class="fullscreen">
    <div class="headline">
      Team Members
    </div>
    <div class="bar"></div>
    <div class="info">We are engineers in computer sicence and electrical engineering. Jae Woo loves to draw in his free time and Jun Beom wishes to visit Alaska to chill with polar bears.</div>
    <div class="members">
      <div class="imageWrapper">
        <img src="../assets/jumbeom.jpeg" alt="Jum Beom Pyo's profile image" class="memberImage">
        <p>Jun Beom Pyo</p>
      </div>
      <div class="imageWrapper">
        <img src="../assets/jaewoo.jpeg" alt="So Jae Woo's profile image" class="memberImage">
        <p>So Jae Woo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fullscreen{
  background-image: url("../assets/background-5.jpg");
  background-color: #8bd7a4;
}
.members{
  margin-top: 50px;
  padding-left: 5%;
  width: 80%;
  display: flex;
  flex-flow: row wrap;
}
.imageWrapper {
  height: 170px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 10%;
}
.memberImage {
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 100%;
  object-fit: cover;
}
@media screen and (max-width: 600px) {
  .memberImage{
    width: 60px;
    height: 60px;
  }
}
</style>
