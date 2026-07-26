const products = [
  // Bread
  {id:1,name:"White Bread",price:40,image:"images/white-bread.jpg"},
  {id:2,name:"Brown Bread",price:45,image:"images/brown-bread.jpg"},
  {id:3,name:"Multigrain Bread",price:55,image:"images/multigrain-bread.jpg"},
  {id:4,name:"Sandwich Bread",price:50,image:"images/sandwich-bread.jpg"},
  {id:5,name:"Garlic Bread",price:80,image:"images/garlic-bread.jpg"},
  {id:6,name:"Burger Bun",price:35,image:"images/burger-bun.jpg"},
  {id:7,name:"Hot Dog Bun",price:40,image:"images/hotdog-bun.jpg"},
  {id:8,name:"Pav Bread",price:30,image:"images/pav-bread.jpg"},

  // Cakes
  {id:9,name:"Black Forest Cake",price:500,image:"images/black-forest-cake.jpg"},
  {id:10,name:"Chocolate Cake",price:550,image:"images/chocolate-cake.jpg"},
  {id:11,name:"Vanilla Cake",price:450,image:"images/vanilla-cake.jpg"},
  {id:12,name:"Butterscotch Cake",price:550,image:"images/butterscotch-cake.jpg"},
  {id:13,name:"Pineapple Cake",price:500,image:"images/pineapple-cake.jpg"},
  {id:14,name:"Red Velvet Cake",price:700,image:"images/red-velvet-cake.jpg"},
  {id:15,name:"Fruit Cake",price:600,image:"images/fruit-cake.jpg"},
  {id:16,name:"Plum Cake",price:650,image:"images/plum-cake.jpg"},

  // Pastries
  {id:17,name:"Black Forest Pastry",price:70,image:"images/black-forest-pastry.jpg"},
  {id:18,name:"Chocolate Pastry",price:80,image:"images/chocolate-pastry.jpg"},
  {id:19,name:"Pineapple Pastry",price:70,image:"images/pineapple-pastry.jpg"},
  {id:20,name:"Butterscotch Pastry",price:80,image:"images/butterscotch-pastry.jpg"},
  {id:21,name:"Red Velvet Pastry",price:90,image:"images/red-velvet-pastry.jpg"}
];
// Cookies & Biscuits
{id:22,name:"Butter Cookies",price:180,image:"images/butter-cookies.jpg"},
{id:23,name:"Chocolate Cookies",price:220,image:"images/chocolate-cookies.jpg"},
{id:24,name:"Coconut Cookies",price:200,image:"images/coconut-cookies.jpg"},
{id:25,name:"Jeera Biscuits",price:160,image:"images/jeera-biscuits.jpg"},
{id:26,name:"Almond Cookies",price:280,image:"images/almond-cookies.jpg"},
{id:27,name:"Oat Cookies",price:250,image:"images/oat-cookies.jpg"},

// Puffs & Snacks
{id:28,name:"Veg Puff",price:35,image:"images/veg-puff.jpg"},
{id:29,name:"Paneer Puff",price:50,image:"images/paneer-puff.jpg"},
{id:30,name:"Chicken Puff",price:60,image:"images/chicken-puff.jpg"},
{id:31,name:"Egg Puff",price:45,image:"images/egg-puff.jpg"},
{id:32,name:"Pizza Puff",price:55,image:"images/pizza-puff.jpg"},
{id:33,name:"Veg Roll",price:50,image:"images/veg-roll.jpg"},

// Pizza & Fast Food
{id:34,name:"Veg Pizza",price:180,image:"images/veg-pizza.jpg"},
{id:35,name:"Chicken Pizza",price:250,image:"images/chicken-pizza.jpg"},
{id:36,name:"Burger",price:90,image:"images/burger.jpg"},
{id:37,name:"Veg Sandwich",price:80,image:"images/veg-sandwich.jpg"},
{id:38,name:"Grilled Sandwich",price:120,image:"images/grilled-sandwich.jpg"},

// Desserts
{id:39,name:"Brownie",price:70,image:"images/brownie.jpg"},
{id:40,name:"Muffin",price:50,image:"images/muffin.jpg"},
{id:41,name:"Cupcake",price:60,image:"images/cupcake.jpg"},
{id:42,name:"Donut",price:65,image:"images/donut.jpg"},
{id:43,name:"Swiss Roll",price:90,image:"images/swiss-roll.jpg"},
{id:44,name:"Pastry Roll",price:80,image:"images/pastry-roll.jpg"},

// Dry Items
{id:45,name:"Rusk",price:120,image:"images/rusk.jpg"},
{id:46,name:"Toast",price:100,image:"images/toast.jpg"},
{id:47,name:"Khari",price:140,image:"images/khari.jpg"},
{id:48,name:"Breadsticks",price:150,image:"images/breadsticks.jpg"},

// Beverages
{id:49,name:"Tea",price:20,image:"images/tea.jpg"},
{id:50,name:"Coffee",price:30,image:"images/coffee.jpg"},
{id:51,name:"Cold Coffee",price:80,image:"images/cold-coffee.jpg"},
{id:52,name:"Fresh Juice",price:70,image:"images/fresh-juice.jpg"},
{id:53,name:"Soft Drink",price:40,image:"images/soft-drink.jpg"},
{id:54,name:"Mineral Water",price:20,image:"images/mineral-water.jpg"}
];

// Shopping Cart
let cart = [];

// Product List
const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

// Show Products
function displayProducts() {

    productList.innerHTML = "";

    products.forEach(product => {

        productList.innerHTML += `

        <div class="product">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="price">₹${product.price}</p>

            <button onclick="addToCart(${product.id})">
            Add To Cart
            </button>

        </div>

        `;

    });

}

// Add To Cart
// Shopping Cart
let cart = [];

// Add To Cart
function addToCart(id){

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if(existing){

        existing.qty++;

    }else{

        cart.push({
            ...product,
            qty:1
        });

    }

    updateCart();

}

// Update Cart
function updateCart(){

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item=>{

        totalItems += item.qty;

        totalPrice += item.qty * item.price;

    });

    cartCount.innerText = totalItems;

    console.log("Total Price : ₹" + totalPrice);

}

// Start Website
displayProducts();
