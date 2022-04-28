<script>
import axios from "axios";
import TitleBiere from "./TitleBiere.vue";
import ImageBiere from "./ImageBiere.vue";
import DescriptionBiere from "./DescriptionBiere.vue";
import IngredientsBiere from "./IngredientsBiere.vue";
export default {
  data() {
    return {
      id: null,
      biere: null,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    axios
      .get("https://api.punkapi.com/v2/beers/" + this.id)
      .then((response) => (this.biere = response.data));
  },
  components: { TitleBiere, ImageBiere, DescriptionBiere, IngredientsBiere },
};
</script>

<template>
  <div v-if="biere != null">
    <div class="row">
      <div class="col-6">
        <ImageBiere :source="biere" />
      </div>
      <div class="col-6">
        <TitleBiere :title="biere" />
        <DescriptionBiere :description="biere" />
      </div>
      <IngredientsBiere :ingredients="biere" />
    </div>
  </div>
</template>
