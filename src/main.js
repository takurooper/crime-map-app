// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import firebase from 'firebase'

//bootstrap 4.0
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

// Comment out (or don't require) services that you don't want to use
// require("firebase/storage");
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDmZcO7moytTs5bXfUAJJDz8F9u1LP91WU",
  authDomain: "crime-map-app.firebaseapp.com",
  databaseURL: "https://crime-map-app.firebaseio.com",
  projectId: "crime-map-app",
  storageBucket: "crime-map-app.appspot.com",
  messagingSenderId: "1067626853215"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})