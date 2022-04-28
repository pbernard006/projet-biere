<script>
import axios from "axios";
export default {
  props: ["description"],
};
</script>
<template>
  <p class="mt-4" v-if="description != null">
    {{ description[0].description }}
  </p>
</template>
