<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      msg: 'Welcome to Parent Map',
      name: firebase.auth().currentUser.email
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
