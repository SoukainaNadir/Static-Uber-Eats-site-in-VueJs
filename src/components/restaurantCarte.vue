<template>
    <div class="restaurant--card">
            <img @click="viewRestau" :src="info_restaurant.image" class="restaurant--image" />
            <p class="name">
                {{info_restaurant.name}}
            </p>
            <div class="restaurant--info">
                <div class="top">
                    <p class="note">
                        <span>{{info_restaurant.note}}</span>
                    </p>
                </div>
                <p class="time">{{info_restaurant.drive_time}}</p>
            </div>
    </div>
</template>

<script>
/* import { methods } from 'vue'
 */

export default {
    name : "RestaurantCarte",

    props :{
        info_restaurant : Object
    },

    setup(){
        const viewRestau = () => {
            this.$router.push("/restaurant");
        }
        
        
        //return 
        return{
            viewRestau
        }
    }

}
</script>

<style lang="scss">

.restaurant--card{

    position: relative;
    width: 32%;
    height: 30vh;
    transition: transform .2s;
    &:hover{
        transform: scale(1.1);
    }
    &::after{
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: none;
        border-radius: 20px;
        
    }
    &:hover::after{
        display: block;
    }

    p{
        position: relative;
        margin : 0px;
        z-index: 1;
        
        
    }
    
    .name{
        font-size: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        
    }
    
}

.restaurant--image{
    position: relative;
    height: 100%;
    width:100%;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    

    
}

.restaurant--info{
    

    .top{
        margin: 10px 0px;
        display: flex;
        align-items: center ;
        justify-content: space-between;
        
        .note{
            background-color: #46b96c;
            height:40px ;
            width: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.9rem;
            border-radius: 50%;
            justify-content: center;
            position: absolute;
            top:-12px;
            right: 10px;
            color:white;
            z-index: 1;
        }
    }
    .time{
        font-size: 0.9rem;
        z-index: 0;
    }

}


</style>