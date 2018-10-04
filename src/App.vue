<template>
  <div id="app">
    <div style="margin: 30px;"
         v-for="(color, i) in colors"
         :key="i">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  data() {
    return {
      isVisible: null
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    colors() {
      const num = parseInt(20) || 1
      return new Array(num).fill('').map((i, idx) => {
        return {
          bg: `hsl(${(idx * 2 / num) * 360},100%,50%)`
        }
      }) 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
