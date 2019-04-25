<template>
  <div class="signup_form">
    <div class="links">
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
      username: '',
      password: ''
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