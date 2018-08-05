<template>
  <div id="app">
    <header class='is-fixed nav'>
      <router-link :to="{ name: 'home' }"  class="logo">Fonters</router-link>
      <router-link :to="{ name: 'signup' }" class="button">Stay Tuned</router-link>
    </header>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <div class="page-nav">
      <router-link :to="{ name: 'home' }" :class="{selected: isActive('home')}" class="page-button">01</router-link>
      <router-link :to="{ name: 'tech' }" :class="{selected: isActive('tech')}" class="page-button">02</router-link>
      <router-link :to="{ name: 'service' }" :class="{selected: isActive('service')}" class="page-button">03</router-link>
      <router-link :to="{ name: 'signup' }" :class="{selected: isActive('signup')}" class="page-button">04</router-link>
      <router-link :to="{ name: 'team' }" :class="{selected: isActive('team')}" class="page-button">05</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeMenu: 'home'
    }
  },
  watch: {
    $route (to) {
      this.activeMenu = to.name
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeMenu === menuItem
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
}
.nav{
  background-color: #fff;
  height: 60px;
  text-align: center;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0 40px 0 40px;
  align-items: center;
  border: 1px solid #ebebeb;
}
.is-fixed {
  position: fixed;
  left: 0;
  right: 0;
}
.logo{
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: #000;
}
.logo:active{
  color: #606266;
}
.button {
  line-height: 1;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;
}
.button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.page-nav{
  position: fixed;
  z-index: 10;
  top: 45%;
  right: 50px;
  display: flex;
  flex-flow: column;
}
.page-button{
  margin-top: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
}
.page-button.selected{
  color: #000;
}
/* transition */
/* .slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(10px);
  opacity: 0;
} */
/* common component */
.fullscreen{
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
}
.headline{
  color: #000;
  font-weight: 600;
  font-size: 30px;
  padding-left: 5%;
  width: 80%;
  text-align: left;
}
.bar{
  height: 2px;
  margin: 20px 0 30px 5%;
  width: 30%;
  background-color: #000;
}
.info{
  color: #69696b;
  font-weight: 200;
  font-size: 16px;
  padding-left: 5%;
  width: 80%;
  text-align: left;
}
</style>
