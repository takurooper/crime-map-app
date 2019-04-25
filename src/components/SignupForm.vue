<template>
  <div class="signup_form">
      <div class="text-padding">
        <h2 class="header-padding">あなたのなまえは？</h2>
        <input type="text" v-model="name" placeholder="お名前">
      </div>
      <div style="status_field">
        <button class="status_select parent_color" type="submit" v-on:click="status_parent">親</button>
        <button class="status_select child_color" type="submit" v-on:click="status_child">こども</button>
      </div>
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
      password: '',
      statusType: ""
    }
  },
  methods: {
    status_parent: function () {
      firebase.database().ref('users').push({
          statusType: "parent",
          name: this.name
      });
      this.$router.push('/parent')
    },
    status_child: function () {
      firebase.database().ref('users').push({
          statusType: "child",
          name: this.name
      });
      this.$router.push('/child')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-padding{
    padding: 100px 0 100px 0;
}
.header-padding{
    margin: 30px;
}
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