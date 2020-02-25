import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase'
Vue.config.productionTip = false

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTC6Mvtzz5IImz4deR7NqbAMCREabJnQI",
    authDomain: "xxx-saka.firebaseapp.com",
    databaseURL: "https://xxx-saka.firebaseio.com",
    projectId: "xxx-saka",
    storageBucket: "xxx-saka.appspot.com",
    messagingSenderId: "251161439846",
    appId: "1:251161439846:web:f65626242830814fcc87a7",
    measurementId: "G-FMP37ZFVG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
