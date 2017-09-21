<template>
  <v-card>
    <v-card-title>
      <button @click="getLocation()">click</button>
    </v-card-title>
    <div id="demo"></div>

  </v-card>
</template>

<script>



  export default {
    name: 'landing-page',
    components: {  },
    data() {
      return {
        test: null
      }
    },
    methods: {
      getContent(){


      },
      getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.showPosition);
          } else {
              let x = document.getElementById("demo");
              x.innerHTML = "Geolocation is not supported by this browser.";
          }
      },
      showPosition(position) {
          let x = document.getElementById("demo");
          x.innerHTML = "Latitude: " + position.coords.latitude + 
          "<br>Longitude: " + position.coords.longitude;
      }
    },
    mounted(){

    }
  }
</script>

<style>



</style>
