<template>
  <div class="topnav">
   <div class="navigation">
    <router-link to="/designnode"><a href="#">Design <span>Node</span></a></router-link>
    <router-link to="/kontakt"><a href="#">Kontakt <span>&</span> Beratung</a></router-link>
    <router-link to="/ablauf"><a href="#">Ablauf</a></router-link>
    <router-link to="/aufwand"><a href="#">Aufwand <span>&</span> Kosten</a></router-link>
    <router-link to="/weiteres"><a href="#">Weiteres</a></router-link>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.topnav {
  position: relative;
  overflow: hidden;
}

.navigation {
  text-align: center;
  margin-top: 20px;
  border-style: solid;
  border: 1px 1px 1px 1px;
  border-color: white;
  padding: 0;
}

.navigation span {
  color: red;
}

a {
  font-size: 12pt;
  color: white;
  position: relative;
  text-decoration: none;
  padding: 30px 30px;
  text-align: center;
  line-height: 75px;
}

.navigation a:hover {
  color: black;
  background-color: white;
  transition: background-color 1s;
  transition: color 1s;
}
</style>
