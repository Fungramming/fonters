<template>
  <div id="app">
    <header class='is-fixed nav'>
      <a @click="navClicked(0)"  class="logo">
        <img src="./assets/logo.png" alt="Fonters logo">
      </a>
      <a @click="navClicked(3)" class="button">Stay Tuned</a>
    </header>
    <transition :name='fade' mode="in-out">
      <router-view class="router-view"/>
    </transition>
    <div class="page-nav">
      <a @click="navClicked(0)" :class="{selected: isActive('home')}" class="page-button">01</a>
      <a @click="navClicked(1)" :class="{selected: isActive('tech')}" class="page-button">02</a>
      <a @click="navClicked(2)" :class="{selected: isActive('service')}" class="page-button">03</a>
      <a @click="navClicked(3)" :class="{selected: isActive('signup')}" class="page-button">04</a>
      <a @click="navClicked(4)" :class="{selected: isActive('team')}" class="page-button">05</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeMenu: 'home',
      isAnim: false,
      curIndex: 0,
      links: ['home', 'tech', 'service', 'signup', 'team'],
      xDown: null,
      yDown: null,
      fade: 'fade'
    }
  },
  watch: {
    $route (to) {
      this.activeMenu = to.name
      this.curIndex = this.links.indexOf(this.activeMenu)
    }
  },
  mounted () {
    document.getElementById('app').addEventListener('mousewheel', this.vueWheel)
    document.getElementById('app').addEventListener('DOMMouseScroll', this.vueWheel)
    document.addEventListener('touchstart', this.handleTouchStart, false)
    document.addEventListener('touchmove', this.handleTouchMove, false)
  },
  methods: {
    isActive (menuItem) {
      return this.activeMenu === menuItem
    },
    navClicked (index) {
      if (index > this.curIndex) {
        this.fade = 'fade'
      } else {
        this.fade = 'fade-down'
      }
      this.curIndex = index
      this.$router.push({ name: this.links[this.curIndex] })
    },
    vueWheel (e) {
      if (!this.isAnim && Math.abs(e.deltaY) > 30) {
        this.isAnim = true
        if (e.deltaY < 0) {
          if (this.curIndex > 0) {
            this.curIndex -= 1
            this.fade = 'fade-down'
            this.$router.push({ name: this.links[this.curIndex] })
          }
        } else {
          if (this.curIndex < this.links.length - 1) {
            this.curIndex += 1
            this.fade = 'fade'
            this.$router.push({ name: this.links[this.curIndex] })
          }
        }
        setTimeout(() => { this.isAnim = false }, 500)
      }
    },
    handleTouchStart (evt) {
      this.xDown = evt.touches[0].clientX
      this.yDown = evt.touches[0].clientY
    },
    handleTouchMove (evt) {
      if (!this.xDown || !this.yDown || this.isAnim) {
        return
      }
      let xUp = evt.touches[0].clientX
      let yUp = evt.touches[0].clientY
      let xDiff = this.xDown - xUp
      let yDiff = this.yDown - yUp

      if (Math.abs(xDiff) < Math.abs(yDiff) && Math.abs(yDiff) > 8) {
        this.isAnim = true
        if (yDiff > 0) { /* up swipe */
          this.curIndex += 1
          this.fade = 'fade'
        } else if (yDiff < 0) { /* down swipe */
          this.isAnim = true
          this.curIndex -= 1
          this.fade = 'fade-down'
        }
        this.$router.push({ name: this.links[this.curIndex] })
        setTimeout(() => { this.isAnim = false }, 500)
      }
      /* reset values */
      this.xDown = null
      this.yDown = null
    }
    // checkAllImages () {
    //   let urls = ['1', '2', '3', '4', '5']
    //   urls.forEach(element => {
    //     let url = this.loadImages('./assets/background-' + element + '.jpeg')
    //     console.log(url)
    //   })
    // },
    // loadImages (url) {
    //   return new Promise(function (resolve, reject) {
    //     var img = new Image()
    //     img.src = url
    //     img.onload = function () {
    //       resolve(url)
    //     }
    //     img.onerror = function () {
    //       reject(url)
    //     }
    //   })
    // }
  },
  beforeDestroy () {
    document.getElementById('app').removeEventListener('mousewheel', this.vueWheel)
    document.getElementById('app').removeEventListener('DOMMouseScroll', this.vueWheel)
    document.removeEventListener('touchstart', this.handleTouchStart, false)
    document.removeEventListener('touchmove', this.handleTouchMove, false)
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
  width: 95px;
  display: flex;
  align-items: center;
}
.logo > img{
  width: 100%;
  margin: auto;
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
  right: 5%;
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
.fade-enter{
  opacity: 0.5;
  z-index: 3;
  top: 50%;
  transform: translateY(100%);
}
.fade-enter-active {
  transition: all .5s ease;
  z-index: 3;
}
.fade-leave-active {
  transition: all .3s ease;
  z-index:-3;
}
.fade-leave-to {
  opacity: 0.5;
  transform: translateY(-100%);
  z-index:-3;
}
.fade-down-enter{
  opacity: 0.5;
  z-index: 3;
  top: 50%;
  transform: translateY(-100%);
}
.fade-down-enter-active {
  transition: all .5s ease;
  z-index: 3;
}
.fade-down-leave-active {
  transition: all .3s ease;
  z-index:-3;
}
.fade-down-leave-to {
  opacity: 0.5;
  transform: translateY(100%);
  z-index:-3;
}
/* common component */
.fullscreen{
  width: 100%;
  height: 100%;
  padding-top: 70px;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.headline{
  color: #000;
  font-weight: 600;
  font-size: 30px;
  padding-left: 5%;
  width: 80%;
  text-align: left;
  z-index: 1;
}
.bar{
  height: 2px;
  margin: 2vh 0 3vh 5%;
  width: 30%;
  background-color: #000;
  z-index: 1;
}
.info{
  color: #69696b;
  font-weight: 200;
  font-size: 18px;
  padding-left: 5%;
  width: 80%;
  text-align: left;
  z-index: 1;
}
@media screen and (max-width: 600px) {
  .info{
    font-size: 16px;
  }
}
.fullscreenFilter{
  position: absolute;
  width: 100%;
  height: 130%;
}
</style>
