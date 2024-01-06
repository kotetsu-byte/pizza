<template>
    <div id="empty-container">
        
    </div>
    <div id="orders-container">
        <div class="row-flex">
            <div></div>
            <h1 id="header">Orders</h1>
            <router-link to="/"><button style="border: none; background: inherit; color: white; font-size: 2em; cursor: pointer;">x</button></router-link>
        </div>
        <div>
            <button :class="`top-btn ${activeTopBtn === 0 ? 'active' : ''}`" @click="makeTopBtnActive(0)">Dine in</button>
            <button :class="`top-btn ${activeTopBtn === 1 ? 'active' : ''}`" @click="makeTopBtnActive(1)">To go</button>
            <button :class="`top-btn ${activeTopBtn === 2 ? 'active' : ''}`" @click="makeTopBtnActive(2)">Delivery</button>
        </div>
        <div class="row-flex">
            <p class="item-desc">Item</p>
            <p class="item-desc">Price</p>
        </div>
        <hr>
        <div v-for="(item, index) in cart" :key="index">
            <div class="ordered-dish" style="margin-top: 40px;">
                <div class="row-flex">
                    <div class="column-flex" style="align-items: center;">
                        <img :src="getImageById(item.id)" height="150" width="150" alt="some text">
                        <div class="row-flex" style="justify-content: start;">
                            <button @click="handleDecrement(item.id)" class="inc-dec-btn">-</button>
                            <span class="food-param-1">&nbsp;{{ item.count }}&nbsp;</span>
                            <button @click="handleIncrement(item.id)" class="inc-dec-btn">+</button>
                        </div>
                    </div>
                    <div class="column-flex" style="align-items: end; width: 50%; text-align: right;">
                        <p class="food-param-2">{{ item.title }}</p>
                        <p class="food-param-1">$ {{ item.price }}</p>
                        <p class="food-param-1">$ <span class="total-price">{{ Math.round(item.price * item.count * 100) / 100 }}</span></p>
                    </div>
                </div>
                <div class="row-flex" style="margin-top: 20px;">
                    <input type="text" class="order-note">
                    <button class="trash-btn" @click="removeItemFromCart(item.id)"><img src="../assets/icons/trash.png" alt="Trash"></button>
                </div>
            </div>
            <hr>
        </div>
        <div class="row-flex">
            <p class="food-param-1">Subtotal</p>
            <p class="food-param-1">$ {{ subtotal }}</p>
        </div>
        <div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
        </div>
        <router-link to="/payment"><button id="payment-btn" style="cursor: pointer;">Continue to Payment</button></router-link>
        <div>
            <br>
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';


export default {
    name: 'Orders',
    data() {
        return {
            cart: [],
            activeTopBtn: 0
        }
    },
    methods: {
        ...mapActions(['removeFromCart', 'setOrderCount']),
        handleDecrement(id) {
            var cart = this.cart.find(elem => elem.id == id);
            if(cart.count > 1) {
                cart.count--;
            }
        },
        handleIncrement(id) {
            var cart = this.cart.find(elem => elem.id == id);
            cart.count++;
        },
        makeTopBtnActive(id) {
            this.activeTopBtn = id;
        },
        removeItemFromCart(id) {
            this.removeFromCart(id);
            this.setCart;
            window.location.reload();
        },
        getImageById(id){
            return `src/assets/dish-img/menu_${id}.png`
        },
        handleOrderCount(count) {
            this.setOrderCount(count);
        }
    },
    computed: {
        ...mapGetters(['getCart']),
        setCart() {
            var arr = this.getCart;
            this.cart = arr;
        },
        subtotal() {
            var sub = 0;
            this.cart.forEach(elem => {
                sub += parseFloat(elem.price) * elem.count;
            })
            sub = sub.toFixed(2);
            return sub;
        }
    },
    watch: {
        cart: function(newVal, oldVal) {
            this.handleOrderCount(newVal.length);
            if(newVal.length === 0) {
                document.getElementById("payment-btn").disabled = true;
            } else {
                document.getElementById("payment-btn").disabled = false;
            }
        }
    },
    mounted() {
        this.setCart;
    },
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

#orders-container {
    position: fixed;
    right: 0;
    width: 400px;
    height: 100%;
    background: #252836;
    padding: 20px;
    overflow: scroll;
    padding-bottom: 100px;
}
.top-btn {
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #1F1D2B;
    padding: 7px 12px;
    color: #EA7C69;
}
.top-btn.active {
    background: #EA7C69;
    color: white;
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.column-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.inc-dec-btn {
    border-radius: 8px;
    background-color: #1F1D2B;
    font-size: 1.5em;
    color: white;
    border: none;
}
.order-note {
    padding: 14px 96px 14px 14px;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #2D303E;
    color: white;
}
.trash-btn {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #EA7C69;
    background: inherit;
    cursor: pointer;
}
#payment-btn {
    border-radius: 8px;
    background: #EA7C69;
    padding: 14px;
    border: none;
    width: 100%;
    color: white;
}
#header {
    font-size: 28px; 
    font-weight: 600;
}
.item-desc {
    font-size: 16px; 
    font-weight: 600;
}
.food-param-1 {
    font-size: 16px; 
    font-weight: 500;
}
.food-param-2 {
    font-size: 18px; 
    font-weight: 500;
}
</style>