<template>
  <div class="hello">
    
    <div class="map"></div>
    <b-button @click="signOut">Sign out</b-button>
  </div>
</template>

<script>
/* eslint-disable */

import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Child Map',
      name: firebase.auth().currentUser.displayName
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map{
    background-color: bisque;
    height: 500px;
    margin: 50px 20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
