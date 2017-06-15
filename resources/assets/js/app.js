
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
  el: '#app'
  // data: {
  //
  // },
  // mounted: function() {
  //   var myOptions = {
  //       zoom: 12,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       center: new google.maps.LatLng(25.761680, -80.19179)
  //   };
  //   var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
  // }
});
