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
      console.log(this.input);
      const dt = JSON.parse(JSON.stringify(this.data));
      const length = this.input.length - 1;
      const input = this.input;
      // console.log(
      //   dt.filter(function (i) {
      //     return i.name.substr(0, this.input.length - 1) === this.input;
      //   })
      // );
      console.log(
        dt.filter(function (i) {
          return i.name.substr(0, length) === input;
        })
      );
      this.input = "";
      console.log(this.beers);
    },
  },
};
</script>

<template>
  <input type="text" v-model="input" v-on:keyup.enter="searchInAPI" />
</template>
