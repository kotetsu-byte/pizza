<template>
    <div id="sidebar-container">
        <div>
            <router-link to="/functions"><img src="../assets/icons/menu-icon.png"></router-link>
        </div>
        <div>
            <router-link to="/"><img src="../assets/icons/home-icon.png"></router-link>
        </div>
        <div>
            <img src="../assets/icons/settings-icon.png">        
        </div>
        <div>
            <img src="../assets/icons/graphics-icon.png">
        </div>
        <div>
            <img src="../assets/icons/mail-icon.png">
        </div>
        <div>
            <img src="../assets/icons/notifications-icon.png">
        </div>
        <div class="relative">
            <router-link to="/orders"><img src="../assets/icons/cart-icon.png"></router-link>
            <div class="circle">
                <span>{{ getOrderCount }}</span>
            </div>
        </div>
        <div>
            <router-link to="/profile"><img src="../assets/icons/profile-icon.png"></router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SidebarMenu',
    data() {
        return {
            orderLength: 0        
        }   
    },
    computed: {
        ...mapGetters(['getOrderCount']),
    },
    
}
</script>

<style scoped>
#sidebar-container {
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100px;
    height: 100%;
    background-color: #1F1D2B;
}

.relative {
    position: relative;
}
.circle {
    position: absolute;
    right: -50%;
    top: -50%;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 10px;
    text-align: center;
}
.circle span {
    vertical-align: -2px;
}
</style>