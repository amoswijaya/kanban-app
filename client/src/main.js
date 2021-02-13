import Vue from 'vue';
import App from './app.vue'
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)
new Vue({
  render: h => h(App),
}).$mount('#app');