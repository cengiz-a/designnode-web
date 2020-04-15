<template>
  <div id="app">
    <div class="nav">
      <navigation></navigation>
    </div>
    <router-link to="/"><div class="logo">
    </div></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation.vue'
export default {
  components: {
    'navigation': navigation
  },
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>

@import '/path/to/reset-css/reset.css';

p {
  color: white;
}

* {
    margin: 0;
    padding: 0;
}

.logo {
  background-image: url('./assets/logo-designnode.png');
  background-repeat: no-repeat;
  margin: 40px auto;
  width: 369px;
  height: 91px;
}

body {
  background-color: #151515;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 1280px;
}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  margin: 20px auto;
}
</style>
