<script setup>
import Title from "../components/Title.vue";
import SearchBar from "../components/SearchBar.vue";
import List from "../components/List.vue";
</script>

<template>
  <main>
    <Title />
    <SearchBar />
    <List beers="coucou" />
  </main>
</template>
