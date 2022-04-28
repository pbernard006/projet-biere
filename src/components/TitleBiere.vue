<script>
import axios from "axios";
export default {
  props: ["title"],
};
</script>
<template>
  <p v-if="title != null">{{ title[0].name }}</p>
</template>
