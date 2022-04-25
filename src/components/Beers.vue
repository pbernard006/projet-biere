<script>
import Title from "../components/title.vue";
import SearchBar from "../components/SearchBar.vue";
import List from "./List.vue";
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getData(value) {
      this.data = value;
      console.log(this.data);
    },
  },
  components: { SearchBar, List },
};
</script>

<template>
  <SearchBar @input="getData" />
  <List :data="this.data" />
</template>
