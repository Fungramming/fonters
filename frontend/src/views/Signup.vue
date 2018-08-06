<template>
  <div class="fullscreen">
    <div class="headline">
        Sign Up Receive Free Label
    </div>
    <div class="bar"></div>
    <div class="info">We are in the process of finalizing the service. Please let us know if you are interested so that we can reach out to you.<br/><br/>
    * The first 1000 people who sign up will receive custom printed label stickers with you name in your own font</div>
    <form class="form-wrapper" @submit="checkForm">
      <input type="email" placeholder="Your email">
      <input type="text" placeholder="Your name">
      <input type="submit" value="Stay tuned">
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    checkForm (e) {
      e.preventDefault()
    }
  }
}
</script>

<style scoped>
.fullscreen{
  background-color: #a0d9df;
}
.form-wrapper{
  margin-top: 30px;
  padding-left: 5%;
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
}
input{
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid #dcdfe6;
  color: #606266;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  flex: 1 1 auto;
  margin: 0 5px 5px 0;
}
input:hover{
  border-color: #c0c4cc;
}
input:focus{
  border-color: #409eff;
  outline: none;
}
</style>
