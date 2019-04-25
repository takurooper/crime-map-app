<template>
  <div class="signup_form">
      <h2 class="header-padding">Hello {{name}} !    You are {{statusType}}</h2>
      <input type="text" v-model="name" placeholder="お名前">
      <div style="status_field">
        <button class="status_select parent_color" type="submit"  v-on:click="status_parent">Parent</button>
        <button class="status_select child_color" type="submit"  v-on:click="status_child">Child</button>
      </div>
      <b-button href="/parent">Start</b-button>
  </div>
</template>
<script>
/* eslint-disable */

import firebase from 'firebase'
import "firebase/auth"

export default {
  name: 'SignupForm',
  data () {
    return {
      name: firebase.auth().currentUser.displayName,
      password: ''
    }
  },
  props: ['database','usersRef','statusType'],
  methods: {
    status_parent: function () {
      this.usersRef.push({
          statusType: "parent",
          name: this.name
      });
      statusType: "parent"
    },
    status_child: function () {
        console.log();
      firebase.auth().currentUser.updateProfile({
          statusType: "child"
      });
      statusType: "parent"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status_field{
    display:flex;
    margin: 0 auto;
}
.status_select{
    width: 300px;
    height:300px;
    margin: 30px;
}
.parent_color{
  background-color: aqua;
}
.child_color{
  background-color: bisque;
}
.header-padding{
    margin: 100px 0 200px 0;
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
  color: #17a2b8;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>