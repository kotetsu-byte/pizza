<template>
    <div id="empty-container">
        
    </div>
    <div id="history-container" v-if="isDetails === false ? true : false">
        <div class="row-flex">
            <div></div>
            <h1>Orders</h1>
            <router-link to="/"><button class="nav-btn">x</button></router-link>
        </div>
        <div id="histories" v-for="(item, index) in orderHistory" :key="index">
            <div class="history" @click="showHistoryData(index)">
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                    <h2>Order #{{ index + 1 }}</h2>
                    <button style="background-color: inherit; border: none; font-size: 1.7em; cursor: pointer;" @click="deleteHistory(index)">x</button>
                </div>
                <p>{{ item.date }}</p>
            </div>
        </div>
        <div v-if="orderHistory.length == 0">
            <p style="text-align: center;">No Orders</p>
        </div>
    </div>
    <div id="history-container-2" v-if="isDetails === true ? true : false">
        <div class="row-flex">
            <div></div>
            <div><h1>Order Details</h1></div>
            <div><button class="nav-btn" @click="closeOrderDetails()">X</button></div>
        </div>
        <div class="row-flex">
            <p class="detail-title">Date</p>
            <p>{{ display.date }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">Full name</p>
            <p>{{ display.fullName }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">Card Number</p>
            <p>{{ display.cardNumber }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">Expiration Date</p>
            <p>{{ display.expirationDate }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">CVV</p>
            <p>{{ display.cvv }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">Order Type</p>
            <p>{{ display.orderType }}</p>
        </div>
        <div class="row-flex">
            <p class="detail-title">Table No.</p>
            <p>{{ display.tableNo }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'History',
    data() {
        return {
            orderHistory: [],
            display: {
                date: '',
                fullName: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
                orderType: '',
                tableNo: ''
            },
            isDetails: false
        }
    },
    methods: {
        ...mapActions(['removeFromOrderHistoryById']),
        showHistoryData(index) {
            this.display.date = this.orderHistory[index].date;
            this.display.fullName = this.orderHistory[index].fullName;
            this.display.cardNumber = this.orderHistory[index].cardNumber;
            this.display.expirationDate = this.orderHistory[index].expirationDate;
            this.display.cvv = this.orderHistory[index].cvv;
            this.display.orderType = this.orderHistory[index].orderType;
            this.display.tableNo = this.orderHistory[index].tableNo;
            this.isDetails = true;
        },
        closeOrderDetails() {
            this.isDetails = false;
        },
        deleteHistory(id) {
            this.removeFromOrderHistoryById(id);
        }
    },
    computed: {
        ...mapGetters(['getOrderHistory']),
        setOrderHistory() {
            this.orderHistory = this.getOrderHistory;
        },
    },
    mounted() {
        this.setOrderHistory;
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

#history-container {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    background: #252836;
    padding: 20px;
    overflow: scroll;
    padding-bottom: 100px;
}
#history-container-2 {
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
#histories {
    border-radius: 8px;
    background: #1F1D2B;
}
.history {
    border-radius: inherit;
    padding: 10px 20px;
    height: max-content;
}
.history:hover {
    background: rgba(234, 124, 105, 0.26);
}

/* fonts */
.nav-btn {
    border: none; 
    background: inherit; 
    color: white; 
    font-size: 2em; 
    cursor: pointer;
}
.detail-title {
    font-weight: 700;
}
</style>