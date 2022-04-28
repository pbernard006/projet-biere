<script>
import axios from "axios";
export default {
  props: ["ingredients"],
};
</script>
<template>
  <p>Ingrédients :</p>
  <p
    v-for="ingredient in ingredients[0].ingredients.malt"
    :key="ingredient.name"
  >
    {{ ingredient.name }}
  </p>
</template>
