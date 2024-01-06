<template>
    <div id="empty-container">
        
    </div>
    <div id="profile-container">
        <div class="row-flex">
            <router-link to="/"><button class="nav-btn">←</button></router-link>
            <h1 id="header">Profile</h1>
            <div></div>
        </div>
        <div id="profile">
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/profile.png">
                <p id="name" class="p-margin-left">Denis</p>
            </div>
            <p id="edit-profile">Edit Profile</p>
        </div>
        <router-link to="/history" class="router-link" style=""><div id="order-history">
            <div class="row-flex" style="justify-content: start;">
                <img src="../assets/icons/history.png" alt="">
                <p id="history" class="p-margin-left">Order history</p>
            </div>
        </div></router-link>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
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

#profile-container {
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
#profile {
    border-radius: 8px;
    background: #1F1D2B;
    padding: 20px;
    margin: 20px 0;
}
#order-history {
    border-radius: 8px;
    background: rgba(234, 124, 105, 0.26);
    padding: 20px;
}

/* fonts */
#header {
    font-size: 28px;
    font-weight: 600;
}
.nav-btn {
    border: none; 
    background: inherit; 
    color: white; 
    font-size: 2em; 
    cursor: pointer;
}
.p-margin-left {
    margin-left: 30px;
}
.router-link {
    text-decoration: none; 
    color: white;
}
#edit-profile {
    text-align: right; 
    color: #EA7C69;
}
#name {
    font-size: 28px;
    font-weight: 600;
}
#history {
    font-size: 16px;
    font-weight: 500;
}
</style>