<template>
  <div class="signin">
    <img src="@/assets/logo.png">
    <div class="links">
  <b-button
    @click="signIn"
    class="button--green">Sign in</b-button>
</div>
    <p>You don't have an account?<router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
/* eslint-disable */

import firebase from 'firebase'
import "firebase/auth"

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
        if (user) {
          console.log("Success");
          location.href = '/child';
        } else {
        
          console.log("Fail");
          alert: 'login error'
        }
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
.signin {
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