import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

const store = new Vuex.Store({
    state() {
        return {
            products: [
                {
                    id: 1,
                    title: 'Spicy seasoned seafood noodles',
                    price: 2.29,
                    count: 1
                },
                {
                    id: 2,
                    title: 'Salted Pasta with mushroom sauce',
                    price: 2.69,
                    count: 1
                },
                {
                    id: 3,
                    title: 'Beef dumpling in hot and sour soup',
                    price: 2.99,
                    count: 1
                },
                {
                    id: 4,
                    title: 'Healthy noodle with spinach leaf',
                    price: 3.29,
                    count: 1
                },
                {
                    id: 5,
                    title: 'Frikadeller Kofta Meatball',
                    price: 2.49,
                    count: 1
                },
                {
                    id: 6,
                    title: 'Cold Cuts',
                    price: 2.19,
                    count: 1
                },
                {
                    id: 7,
                    title: 'Shredded Beef',
                    price: 2.09,
                    count: 1
                },
                {
                    id: 8,
                    title: 'Nigiro Sashimi',
                    price: 2.39,
                    count: 1
                },
                {
                    id: 9,
                    title: 'Solyanka',
                    price: 1.99,
                    count: 1
                },
                {
                    id: 10,
                    title: 'Korean grill',
                    price: 3.39,
                    count: 1
                },
                {
                    id: 11,
                    title: 'Rib Shack',
                    price: 3.49,
                    count: 1
                },
                {
                    id: 12,
                    title: 'Chicken Breast',
                    price: 3.19,
                    count: 1
                },
                {
                    id: 13,
                    title: 'Fried Snack',
                    price: 1.99,
                    count: 1
                },
                {
                    id: 14,
                    title: 'Salad Snack',
                    price: 1.89,
                    count: 1
                },
                {
                    id: 15,
                    title: 'Ckicken Salad',
                    price: 1.79,
                    count: 1
                },
                {
                    id: 16,
                    title: 'Cheesecake',
                    price: 1.39,
                    count: 1
                },
                {
                    id: 17,
                    title: 'Teramisu',
                    price: 1.49,
                    count: 1
                },
                {
                    id: 18,
                    title: 'Junket',
                    price: 1.59,
                    count: 1
                }
            ],
            cart: [],
            orderHistory: [],
        }
    },
    getters: {
        getCart: state => {
            return state.cart;
        },
        getOrderCount: state => {
            return state.cart.length;
        },
        getOrderHistory: state => {
            return state.orderHistory;
        }
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(state.products[payload - 1]);
            state.cart = state.cart.filter((item, i, arr) => i == arr.findIndex(t => t.id == item.id));
        },
        removeFromCart(state, payload) {
            state.cart = state.cart.filter(item => item.id != payload)
        },
        clearCart(state) {
            state.cart.length = 0;
        },
        setCountToInitial(state) {
            state.products.forEach(elem => {
                elem.count = 1;
            });
        },
        setOrderCount(state, payload) {
            state.orderCount = payload;
        },
        addToOrderHistory(state, payload) {
            state.orderHistory.push(payload);
        },
        removeFromOrderHistoryById(state, payload) {
            state.orderHistory.splice(payload, 1);
        }
    },
    actions: {
        addToCart({commit}, payload) {
            commit('addToCart', payload);
        },
        removeFromCart({commit}, payload) {
            commit('removeFromCart', payload);
        },
        clearCart({commit}, payload) {
            commit('clearCart', payload);
        },
        setCountToInitial({commit}, payload) {
            commit('setCountToInitial', payload);
        },
        setOrderCount({commit}, payload) {
            commit('setOrderCount', payload);
        },
        addToOrderHistory({commit}, payload) {
            commit('addToOrderHistory', payload);
        },
        removeFromOrderHistoryById({commit}, payload) {
            commit('removeFromOrderHistoryById', payload);
        }
    },
    plugins: [new VuexPersistence().plugin]
});

export default store;