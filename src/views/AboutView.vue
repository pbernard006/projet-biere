<template>
  <div class="container">
    <div class="text-center">
      <TitleBiere />
      Description de la bière : <DescriptionBiere />
      <ImageBiere/>
      <IngredientsBiere/>
    </div>
  </div>


</template>

<script setup>
import TitleBiere from "../components/TitleBiere.vue";
import DescriptionBiere from "../components/DescriptionBiere.vue";
import ImageBiere from "../components/ImageBiere.vue";
import IngredientsBiere from "../components/IngredientsBiere.vue";
</script>

