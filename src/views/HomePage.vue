<template>
    <SidebarMenu />
    <router-view></router-view>
    <div id="home-container">
        <div class="row-flex">
            <h1 id="header">Jaegar Resto</h1>
            <input type="search" id="main-searchbar" placeholder="Search for food, coffe, etc.." @input="search($event)">
        </div>
        <p id="today-date">{{ date.toDateString() }}</p>
        <nav id="main-nav" class="inline-nav">
            <li v-for="(item, index) in menuCategory" :key="index" :id="`main-nav-li-${index}`" @click="parentMethod(index)" :class="`main-nav ${activeLiId === index ? 'main-nav-active' : ''}`">{{ item }}</li>
        </nav>
        <div class="row-flex">
            <h3 id="choose-dishes">Choose Dishes</h3>
            <select id="main-filter" @change="filterDishes($event)">
                <option v-for="(item, index) in filterOptions" :value="index">{{ item }}</option>
            </select>    
        </div>
        <div id="dishes">
            <div class="dish-block"  v-for="(item, index) in displayDish" :key="index">
                <img :src="getImageById(item.id)" width="200" height="200" />
                <p class="dish-title">{{item.title}}</p>
                <p class="dish-price">$ {{item.price}}</p>
                <button @click="addToTheCart(item.id)" class="add-btn" :id="`add-btn-${item.id}`">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarMenu from '../components/SidebarMenu.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'HomePage',
    components: {SidebarMenu},
    data() {
        return {
            orderCount: 0,
            dishData: [
                {
                    id: 1,
                    title: 'Spicy seasoned seafood noodles',
                    category: 'Soup',
                    price: 2.29,
                },
                {
                    id: 2,
                    title: 'Salted Pasta with mushroom sauce',
                    category: 'Hot Dishes',
                    price: 2.69,
                },
                {
                    id: 3,
                    title: 'Beef dumpling in hot and sour soup',
                    category: 'Soup',
                    price: 2.99,
                },
                {
                    id: 4,
                    title: 'Healthy noodle with spinach leaf',
                    category: 'Hot Dishes',
                    price: 3.29,
                },
                {
                    id: 5,
                    title: 'Frikadeller Kofta Meatball',
                    category: 'Hot Dishes',
                    price: 2.49,
                },
                {
                    id: 6,
                    title: 'Cold Cuts',
                    category: 'Cold Dishes',
                    price: 2.19,
                },
                {
                    id: 7,
                    title: 'Shredded Beef',
                    category: 'Cold Dishes',
                    price: 2.09,
                },
                {
                    id: 8,
                    title: 'Nigiro Sashimi',
                    category: 'Cold Dishes',
                    price: 2.39,
                },
                {
                    id: 9,
                    title: 'Solyanka',
                    category: 'Soup',
                    price: 1.99,
                },
                {
                    id: 10,
                    title: 'Korean grill',
                    category: 'Grill',
                    price: 3.39,
                },
                {
                    id: 11,
                    title: 'Rib Shack',
                    category: 'Grill',
                    price: 3.49,
                },
                {
                    id: 12,
                    title: 'Chicken Breast',
                    category: 'Grill',
                    price: 3.19,
                },
                {
                    id: 13,
                    title: 'Fried Snack',
                    category: 'Appetizer',
                    price: 1.99,
                },
                {
                    id: 14,
                    title: 'Salad Snack',
                    category: 'Appetizer',
                    price: 1.89,
                },
                {
                    id: 15,
                    title: 'Ckicken Salad',
                    category: 'Appetizer',
                    price: 1.79,
                },
                {
                    id: 16,
                    title: 'Cheesecake',
                    category: 'Dessert',
                    price: 1.39,
                },
                {
                    id: 17,
                    title: 'Teramisu',
                    category: 'Dessert',
                    price: 1.49,
                },
                {
                    id: 18,
                    title: 'Junket',
                    category: 'Dessert',
                    price: 1.59,
                }
            ],
            date: new Date(),
            displayDish: [],
            activeLiId: 0,
            menuCategory: [
                'All Dishes',
                'Hot Dishes',
                'Cold Dishes',
                'Soup',
                'Grill',
                'Appetizer',
                'Dessert'
            ],
            filterOptions: [
                'Filter by',
                'Price (asc)',
                'Price (desc)',
                'Name (asc)',
                'Name (desc)'
            ],
            itemsCategory: '',
        }
    },
    methods: {
        ...mapActions(['addToCart', 'setOrderCount']),
        parentMethod(id) {
            this.makeActive(id);
            this.displayDishes(id);
        },
        makeActive(id) {
            this.activeLiId = id;
        },
        addToTheCart(id) {
            this.addToCart(id);
        },
        getImageById(id){
            return `src/assets/dish-img/menu_${id}.png`
        },
        displayOnMount() {
            this.displayDish = this.dishData;
        },
        displayDishes(id) {
            var arr = [];
            switch(id) {
                case 0:
                    this.itemsCategory = '';
                    arr = this.dishData;
                    break;
                case 1:
                    this.itemsCategory = 'Hot Dishes';
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);
                    break;
                case 2:
                    this.itemsCategory = 'Cold Dishes';    
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);
                    break;
                case 3:
                    this.itemsCategory = 'Soup';
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);
                    break;
                case 4:
                    this.itemsCategory = 'Grill';
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);
                    break;
                case 5:
                    this.itemsCategory = 'Appetizer';
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);
                    break;
                case 6:
                    this.itemsCategory = 'Dessert';
                    arr = this.dishData.filter(item => item.category == this.itemsCategory);    
                    break;
            }
            this.displayDish = arr;
        },
        filterDishes(event) {
            var choice = event.target.value;
            function NameAsc(a, b) {
                if(a.title > b.title) {
                    return 1;
                }
                if(a.title < b.title) {
                    return -1;
                }
                return 0;
            }
            function NameDesc(a, b) {
                if(a.title > b.title) {
                    return -1;
                }
                if(a.title < b.title) {
                    return 1;
                }
                return 0;
            }
            switch(parseInt(choice)) {
                case 0:
                    this.displayDish.sort((a, b) => a.id - b.id);
                    break;
                case 1:
                    this.displayDish.sort((a, b) => a.price - b.price);
                    break;
                case 2:
                    this.displayDish.sort((a, b) => b.price - a.price);
                    break;
                case 3:
                    this.displayDish.sort(NameAsc);
                    break;
                case 4:
                    this.displayDish.sort(NameDesc);
                    break;
            }
        },
        search(event) {
            var input = event.target.value;
            console.log(input);
            this.displayDish = this.dishData.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
        }
    },
    computed: {
        ...mapGetters(['getOrderCount']),
    },
    mounted() {
        this.displayOnMount();
    }
}
</script>

<style scoped>
* {
    color: white;
    font-family: Arial;
}
#home-container {
    background-color: #252836;
    min-height: 100vh;
    height: 100%;
    margin-left: 100px;
    padding: 0 40px;
}
#main-searchbar {
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #393C49;
    background: #2D303E;
}
.row-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.inline-nav {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.inline-nav li {
    display: inline;
}
#main-nav {
    border-bottom: 2px solid grey;
    padding-bottom: 10px;
    margin: 40px 0;
    font-weight: bold;
    cursor: pointer;
}
.main-nav-active {
    color: #EA7C69;
    border-bottom: #EA7C69 2px solid;
    padding-bottom: 12px;
    margin-bottom: -12px;
    border-collapse: collapse;
}
#main-filter {
    border-radius: 16px;
    border: 1px solid #FFF;
    background: #1F1D2B;
    padding: 16px;
}
#dishes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 150px;
}
.dish-block {
    background-color: #1F1D2B;
    border-radius: 20px;
    text-align: center;
    width: 200px;
    padding: 20px;
    margin-bottom: 100px;
}
.dish-block img {
    margin-top: -50%;
}
.dish-block button {
    padding: 16px;
    border-radius: 8px;
    background: #EA7C69;
    width: 100%;
    border: none;
    cursor: pointer
}
.dish-block button:active {
    background-color: #E07060;
}

/* fonts */
#header {
    font-size: 32px; 
    font-weight: 600;
}
#today-date {
    font-size: 16px; 
    font-weight: 400;
}
.main-nav {
    font-size: 18px; 
    font-weight: 600;
}
#choose-dishes {
    font-size: 24px; 
    font-weight: 600;
}
.dish-title {
    font-size: 18px; 
    font-weight: 500;
}
.dish-price {
    font-size: 18px; 
    font-weight: 400;
}
.dish-count {
    font-size: 18px; 
    font-weight: 400; 
    color: grey;
}
.add-btn {
    font-size: 20px; 
    font-weight: 600;
}
</style>