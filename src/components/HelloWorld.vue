<template>
  <div class="hello"
       v-sync-location>
    <div class="top">isVisible: {{isVisible}} isPartiallyBelow: {{isPartiallyBelow}}</div>
    <div class="bottom">isVisible: {{isVisible}} isPartiallyAbove: {{isPartiallyAbove}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isVisible: null,
      isAbove: null,
      isBelow: null,
      isPartiallyBelow: null,
      isPartiallyAbove: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.hello {
  width: 50vw;
  height: 50vh;
  margin: auto;
  background: #42b983;
  border: 5px solid #8a048a;
  color: #3b3b3c;
  position: relative;
}

.top {
  position: absolute;
  top: 0;
  width: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
