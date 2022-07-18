<template>
    <div class="restautant--row">
        <div class="wrapper--card">
            <restaurant-carte  v-for="(card, index) in three_restaurant" :info_restaurant="card" :key="index"/>
        </div>

    </div>

</template>

<script>
import restaurantCarte from './restaurantCarte.vue';
export default {
    name : "RestaurantRow",
    components:{
        restaurantCarte,
    },
    props :{
        three_restaurant: Array,
    }

}
</script>

<style lang = 'scss'>
.restautant--row{
    margin-bottom: 100px;
    
    .title {
        font-size: 2rem;
    }
    .wrapper--card{
        display: flex;
        align-items: center;
        justify-content:space-between;
        
        
    }

}


</style>