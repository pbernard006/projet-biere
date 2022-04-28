<script>
import axios from "axios";
export default {
  props: ["source"],
};
</script>
<template>
  <img :src="source[0].image_url" class="img" v-if="source != null" />
</template>
<style>
.img {
  height: 200px;
  width: auto;
}
</style>
