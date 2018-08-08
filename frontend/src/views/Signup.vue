<template>
  <div class="fullscreen">
    <div class="headline">
        Sign Up Receive Free Label
    </div>
    <div class="bar"></div>
    <div class="info">We are in the process of finalizing the service. Please let us know if you are interested so that we can reach out to you.<br/><br/>
    * The first 1000 people who sign up will receive custom printed label stickers with you name in your own font.</div>
    <form class="form-wrapper" @submit="checkForm">
      <input type="email" v-model="email" placeholder="Your email">
      <input type="text" v-model="name" placeholder="Your name">
      <input type="submit" value="Stay tuned">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: null,
      name: null
    }
  },
  methods: {
    checkForm (e) {
      e.preventDefault()
      if (!this.email || !this.name) {
        alert('Please check your input again!')
        return
      }

      axios.put('https://api.fonters.info/', {
        email: this.email,
        name: this.name
      })
        .then((resp) => {
          if (resp.status === 201) {
            alert('Sign up completed.\nThank you for participating!')
            this.$router.push({ name: 'home' })
          }
        })
        .catch((err) => {
          console.log(err)
          alert('Sorry, sign up failed...\nDevelopers are also very embarrassed.\nWe will fix it as soon as possible.')
        })
    }
  }
}
</script>

<style scoped>
.fullscreen{
  background-image: url("../assets/background-4.jpg");
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
  height: 4vh;
  line-height: 4vh;
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
