<template>
    <div id="empty-container">
        
    </div>
    <div id="functions-container">
        <div class="row-flex">
            <div></div>
            <h1 id="header">Functions</h1>
            <router-link to="/"><button id="exit-btn">x</button></router-link>
        </div>
        <div id="functions">
            <router-link to="/information" class="router-link"><div class="function row-flex" style="justify-content: start;">
                <img src="../assets/icons/info.png" alt="">
                <p class="p-left-margin">Information</p>
            </div></router-link>
            <div class="function row-flex" style="justify-content: start;">
                <img src="../assets/icons/language.png" alt="">
                <p class="p-left-margin">Language</p>
            </div>
            <router-link to="/history" class="router-link"><div class="function row-flex" style="justify-content: start;">
                <img src="../assets/icons/history.png" alt="">
                <p class="p-left-margin">Order history</p>
            </div></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Functions',
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

#functions-container {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    background: #252836;
    padding: 20px;
    overflow: scroll;
    padding-bottom: 100px;
    box-shadow: 0px 0px 10px 0px 10px black;
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
#functions {
    border-radius: 8px;
    background: #1F1D2B;
}
.function {
    border-radius: inherit;
    padding: 20px;
    height: 50px;
}
.function:hover {
    background: rgba(234, 124, 105, 0.26);
    border-radius: 8px;
}

/* fonts */
#header {
    font-size: 28px; 
    font-weight: 600;
}
#exit-btn {
    border: none; 
    background: inherit; 
    color: white; 
    font-size: 2em; 
    cursor: pointer;
}
.router-link {
    text-decoration: none; 
    color: white;
}
.p-left-margin {
    margin-left: 40px;
}
</style>