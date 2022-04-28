<script>
import axios from "axios";
export default {
  props: ["description"],
};
</script>
<template>
  <p v-if="description != null">{{ description[0].description }}</p>
</template>
