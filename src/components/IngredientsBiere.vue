<script>
import axios from "axios";
export default {
  props: ["ingredients"],
};
</script>
<template>
  <span class="fw-bold fs-6 mt-4">Liste des ingrédients :</span>
  <span
    v-for="ingredient in ingredients[0].ingredients.malt"
    :key="ingredient.name"
  >
    {{ ingredient.name }},
  </span>
</template>
