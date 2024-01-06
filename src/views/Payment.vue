<template>
    <div id="empty-container">
        
    </div>
    <div id="payment-container">
        <div class="row-flex">
            <router-link to="/orders"><button class="nav-btn">←</button></router-link>
            <h1 id="header">Payment</h1>
            <router-link to="/"><button class="nav-btn">x</button></router-link>
        </div>
        <p id="payment-method">3 payment method available</p>
        <hr>
        <div>
            <h2 id="payment-method-2">Payment method</h2>
            <div class="row-flex" style="justify-content: start;">
                <button :class="`payment-method-btn ${activePaymentMethodId === 0 ? 'active' : ''}`" @click="makePaymentMethodBtnActive(0)"><img src="../assets/icons/Card.png"><p>Credit Card</p></button>
                <button :class="`payment-method-btn ${activePaymentMethodId === 1 ? 'active' : ''}`" @click="makePaymentMethodBtnActive(1)"><img src="../assets/icons/Vector.png"><p>Paypal</p></button>
                <button :class="`payment-method-btn ${activePaymentMethodId === 2 ? 'active' : ''}`" @click="makePaymentMethodBtnActive(2)"><img src="../assets/icons/Wallet.png"><p>Cash</p></button><br>
            </div>
            <div class="inputs">
                <label class="label">Cardholder Name</label><br>
                <input id="fullName" type="text" class="input" v-model="customerData.fullName">
            </div>
            <div class="inputs">
                <label class="label">Card Number</label><br>
                <input id="cardNumber" type="number" class="input number" v-model="customerData.cardNumber">
            </div>
            <div class="row-flex inputs">
                <div>
                    <label class="label">Expiration Date</label><br>
                    <input id="expirationDate" type="date" class="input" v-model="customerData.expirationDate">
                </div>
                <div>
                    <label class="label">CVV</label><br>
                    <input type="number" class="input number" v-model="customerData.cvv">
                </div>
            </div>
            <hr>
            <div class="row-flex inputs">
                <div>
                    <label class="label">Order type</label><br>
                    <select name="" id="" class="input" v-model="customerData.orderType">
                        <option value="">Dine In</option>
                    </select>
                </div>
                <div>
                    <label class="label">Table no.</label><br>
                    <input id="tableNo" type="number" class="input number" v-model="customerData.tableNo">
                </div>
            </div>
        </div>
        <br><br><br><br><br>
        <div class="row-flex" style="gap: 10px;">
            <button id="cancel-btn" @click="handleCancel()">Cancel</button>
            <button id="confirm-btn" @click="handleConfirm()">Confirm Payment</button>
        </div>
        <br><br><br>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Payment',
    data() {
        return {
            customerData: {
                fullName: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
                orderType: '',
                tableNo: ''
            },
            activePaymentMethodId: 0
        }
    },
    methods: {
        ...mapActions(['addToOrderHistory', 'clearCart', 'setCountToInitial']),
        makePaymentMethodBtnActive(id) {
            this.activePaymentMethodId = id;
        },
        handleCancel() {
            this.$router.push('/orders');
        },
        handleConfirm() {
            var date = new Date();
            date = date.toDateString();
            var obj = {
                date: date,
                fullName: this.customerData.fullName,
                cardNumber: this.customerData.cardNumber,
                expirationDate: this.customerData.expirationDate,
                cvv: this.customerData.cvv,
                orderType: this.customerData.orderType,
                tableNo: this.customerData.tableNo
            }
            if(this.customerData.fullName !== '' && this.customerData.cardNumber !== '' && this.customerData.expirationDate !== '' && this.customerData.tableNo !== '')
            {
                this.addToOrderHistory(obj);
                this.clearCart();
                this.setCountToInitial();
                this.$router.push('/');
            }
        }
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

#payment-container {
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
.payment-method-btn {
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #252836;
    width: 100px;
    height: 60px;
    color: #ABBBC2;
}
.payment-method-btn.active {
    border: 1px solid #ABBBC2;
    color: white;
}
.inputs {
    margin: 20px 0;
}
.input {
    padding: 14px;
    width: 80%;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #393C49;
    color: white;
}
select.input {
    width: 100%;
}
#cancel-btn {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #EA7C69;
    background: inherit;
    color: #EA7C69;
    width: 60%;
    cursor: pointer;
}
#confirm-btn {
    padding: 14px;
    border-radius: 8px;
    background: #EA7C69;
    border: none;
    color: white;
    width: 60%;
    cursor: pointer;
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
#payment-method {
    font-size: 16px;
    font-weight: 500;
    color: #ABBBC2;
}
#payment-method-2 {
    font-size: 20px;
    font-weight: 600;
}
.label {
    font-size: 14px;
    font-weight: 500;
}

.number::-webkit-inner-spin-button,
.number::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>