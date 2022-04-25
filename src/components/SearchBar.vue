<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      data: null,
      beers: [],
    };
  },
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => (this.data = response.data));
  },
  methods: {
    searchInAPI() {
      axios
        .get("https://api.punkapi.com/v2/beers?beer_name=" + this.input)
        .then((response) => (this.data = response.data));

      this.$emit("input", JSON.parse(JSON.stringify(this.data)));
      this.input = "";
    },
  },
};
</script>

<template>
  <input type="text" v-model="input" v-on:keyup.enter="searchInAPI" />
</template>
