<script>
import axios from "axios"
export default {

  data() {
    return {
      input: "",
      data: null
    };
  },
  mounted() {
axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response) => (this.data = response.data));
  },
  methods: {
    searchInAPI() {
      if(this.input == ""){
axios
        .get("https://api.punkapi.com/v2/beers")
        .then((response) => (this.data = response.data));

      }else{
axios
        .get("https://api.punkapi.com/v2/beers?beer_name=" + this.input)
        .then((response) => (this.data = response.data));
      }
      this.input = "";

    },
  }
};
</script>

<template>
  <div class="container">
    <input type="text" v-model="input" v-on:keyup.enter="searchInAPI" />
    <div class="row" v-if="data != null">
      <div class="col-3 px-2 py-2" v-for="beer in data" :key="beer.id">
        <a v-bind:href="'/biere/' + beer.id" >
        <div class="card text-center">
          <img :src="beer.image_url" class="img text-center" />
          <p>{{ beer.name }}</p>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.img {
  width: 50px;
  height: 194px;
}
</style>
