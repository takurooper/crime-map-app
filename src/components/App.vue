<template>
  <div id="app">
    <headerItem/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */

import firebase from 'firebase'
import headerItem from './HeaderItem'

export default {
  name: 'App',
  data () {
    return {
      database: null,
      usersRef: null,
      statusType: ['parent', 'child'],
    }
  },
  created: function() {
    this.database = firebase.database();
    this.usersRef = this.database.ref('users', 'message');

    var _this = this;
    this.usersRef.on('value', function(snapshot) {
      _this.users = snapshot.val(); // データに変化が起きたときに再取得する
    });
  },
  components : {
    headerItem,
    child: require('./SignupForm')
  },
  methods: {
    createStatus: function() {
      if (this.statusType == "") { return; }
      this.usersRef.push({
        name: this.statusType
      })
      this.statusType = "";
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
}
</style>
