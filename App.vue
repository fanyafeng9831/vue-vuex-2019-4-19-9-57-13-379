<template>
  <div id="app">
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style>
#app {
  font: normal normal 13px/16px "Open Sans", sans-serif;
  background: #ccc;
  display: block;
  margin: 8px;
}
</style>
