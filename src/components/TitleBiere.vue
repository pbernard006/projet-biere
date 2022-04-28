<script>
import axios from "axios";
export default {
  props: ["title"],
};
</script>
<template>
  <h1 class="fw-bold" v-if="title != null">{{ title[0].name }}</h1>
</template>
