<template>
    <div id="empty-container">
        
    </div>
    <div id="information-container">
        <div class="row-flex">
            <router-link to="/functions"><button class="nav-btn">←</button></router-link>
            <h1 id="header">Information</h1>
            <router-link to="/"><button class="nav-btn">x</button></router-link>
        </div>
        <div id="information">
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/phone.png" alt="">
                <p class="p-margin-left">+998 71 000 00 71</p>
            </div>
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/map.png" alt="">
                <p class="p-margin-left">Tashkent, str. Amir Temur 15</p>
            </div>
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/email.png" alt="">
                <p class="p-margin-left">F.P.D_77@gmail.com</p>
            </div>
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/website.png" alt="">
                <p class="p-margin-left">www.F.P.D_77.com</p>
            </div>
            <div class="row-flex" style="justify-content: space-evenly; margin: 15px 0;">
                <img src="../assets/icons/whatsapp.png" alt="">
                <img src="../assets/icons/instagram.png" alt="">
                <img src="../assets/icons/telegram.png" alt="">
                <img src="../assets/icons/facebook.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
* {
    color: white;
    font-family: Arial;
}

#empty-container {
    position: fixed;
    right: 0;
    width: calc(100% - 100px);
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

#information-container {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    background: #252836;
    padding: 20px;
    overflow: scroll;
    padding-bottom: 100px;
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#information {
    border-radius: 8px;
    background: #1F1D2B;
    padding: 20px;
}

/* fonts */
#header {
    font-size: 28px;
    font-weight: 500;
}
.nav-btn {
    border: none; 
    background: inherit; 
    color: white; 
    font-size: 2em; 
    cursor: pointer;
}
.p-margin-left {
    margin-left: 40px;
}
</style>