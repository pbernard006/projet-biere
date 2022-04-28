<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      data: null,
    };
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => (this.data = response.data));
  },
  methods: {
    searchInAPI() {
      if (this.input == "") {
        axios
          .get("https://api.punkapi.com/v2/beers")
          .then((response) => (this.data = response.data));
      } else {
        axios
          .get("https://api.punkapi.com/v2/beers?beer_name=" + this.input)
          .then((response) => (this.data = response.data));
      }
      this.input = "";
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-3">
        <span class="fs-4">Rechercher une bière </span>
      </div>
      <div class="col-9">
        <input
          type="text"
          class="w-100"
          v-model="input"
          v-on:keyup.enter="searchInAPI"
        />
      </div>
    </div>

    <div class="row mt-4" v-if="data != null">
      <div class="col-3 px-4 py-4" v-for="beer in data" :key="beer.id">
        <a class="link" v-bind:href="'/#/biere/' + beer.id">
          <div class="card text-center">
            <img :src="beer.image_url" class="img w-25" />
            <p class="mt-2">{{ beer.name }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.img {
  position: relative;
  left: 35%;
  right: 35%;
}
</style>
