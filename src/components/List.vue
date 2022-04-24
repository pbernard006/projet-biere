<script>
import axios from "axios";
export default {
  props: ["beers"],
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => (this.data = response.data));
  },
};
</script>

<template>
  <div class="container">
    {{ beers }}
    <div class="row" v-if="data != null">
      <div class="col-3 px-2 py-2" v-for="beer in data" :key="beer.id">
        <div class="card text-center">
          <img :src="beer.image_url" class="img text-center" />
          <p>{{ beer.name }}</p>
        </div>
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
