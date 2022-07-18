<template>
    <div class="home">
    <div class="header">
        <img class = "logo" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
        <div class="wrapper--input">
            <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie ?">
            <div class="search">
                <router-link v-for="(restaurant ,i ) in search_restaurant" :key="i" :to="{name: 'Restaurant', params: {name: restaurant.name}}">
                <div  class="container--restaurant--search">
                    <div class="wrapper--img">
                        <img :src="restaurant.image" alt="">
                    </div>
                    <p>{{restaurant.name}}</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
    <p class="title">
        <span>Alimentation</span> près de vous
    </p>
    <RestaurantRow class="restaurow" v-for="(data, i) in data_restau" :key="i" :three_restaurant="data" />
</div>
    
    
</template>

<script>
/* Import */
import RestaurantRow from '../components/RestaurantRow.vue'
import BDD from '../fakeData/BDD'
import { onMounted, ref, watch } from 'vue';

/* components */
export default {
    name: 'HomeIndex',
    components: {
        RestaurantRow,
    },

    /* Gérer les fonctions, watch Data */
    setup() {
        class Restaurant {
            constructor(name, note, image, drive_time) {
                this.name = name;
                this.note = note;
                this.image = image;
                this.drive_time = drive_time;
            }
        }

        let data_restau = ref([]);
        let all_restaurants = [];
        const makeDataRestau = () => {
            let three_restaurant = [];

            for (const restaurant of BDD) {
                const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
                // Le tableau de tous les restaus
                all_restaurants.push(new_restaurant);

                if (three_restaurant.length == 2) {
                    three_restaurant.push(new_restaurant);
                    data_restau.value.push(three_restaurant);
                    three_restaurant = [];

                }
                else {
                    three_restaurant.push(new_restaurant);
                }

            }

        }

        //user search restaurant
        let user_search_restaurant = ref('');
        let search_restaurant = ref([]);
        watch(user_search_restaurant, new_value => {

            let regex = RegExp(new_value.toLowerCase());
            let new_search_restaurant = all_restaurants.filter(restaurant => regex.test(restaurant.name.toLowerCase()));

            search_restaurant.value = new_search_restaurant;

            if (new_value==0){
                search_restaurant.value=[]
            }
            else{
                search_restaurant.value=new_search_restaurant;
            }

            /* new_value == 0 ? search_restaurant=[] : search_restaurant.value = new_search_restaurant; */
        })

        onMounted(makeDataRestau);
        

        //return 

        return {
            data_restau,
            user_search_restaurant,
            search_restaurant,
        }
    },

}
</script>

<style lang ='scss'>
.home {
    
    .header {
        
        background-color: rgb(235, 228, 228);
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            
            width: 200px;
            padding: 0 40px;
        }

        .wrapper--input {
            position: relative;
            
            
            input {
                background-color: #f6f6f6;
                border: none;
                height: 60px;
                width: 400px;
                outline: none;
                padding-left: 20px;
                

            }
            .search{
                position: absolute;
                top: 100%;
                width: 100%;
                background-color: #ffffff;
                z-index: 2;
                
                
                .container--restaurant--search{
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    
                    

                    &:hover{
                        background-color: #f6f6f6;
                    }
                    .wrapper--img{
                        height: 60px;
                        width: 60px;
                        margin-right: 25px;
                        border-radius: 50%;
                        overflow:hidden ;
                        
                        
                    }
                    img{
                        height: 100%;
                        width: auto;
                        
                        
                    }
                }
            }
        }

    }
    
}
.title{
    padding: 0 40px;
    font-size: 25px;
    span{
        position: relative;

        &::before{
            background-color: #46b96c;
            content: "";
            position: absolute;
            width: calc(100% + 4px);
            height: 50%;
            left: -2px;
            bottom: 0;
            z-index: -1;
            transform: rotate(-2deg);

        }
    }
}
.restaurow{
    padding: 0 40px;
}


</style>