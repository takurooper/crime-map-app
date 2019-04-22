<template>
  <div class="signup">
    <img src="@/assets/logo.png">
    <div class="links">
  <b-button
    @click="signUp"
    class="button--green">signUp</b-button>
</div>
    <p>Do you have an account? 
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
import "firebase/auth"

export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
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