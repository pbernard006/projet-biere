<script>
import axios from "axios";
export default {
    data(){
        return {
            id: null,
            biere: null
        }
    },
    mounted(){
        this.id = this.$route.params.id ;
        axios.get("https://api.punkapi.com/v2/beers/" + this.id)
        .then((response) => (this.biere = response.data));
    }
}
</script>
<template>
    <p v-if="biere != null">{{biere[0].image_url}}</p>
</template>