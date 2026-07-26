// Firebase Import
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// আপনার Firebase Config এখানে বসাবেন
const firebaseConfig = {
  apiKey: "AIzaSyA8ImNBg3LkwgP4YULLTqsI5RTzMJXtzCY",
  authDomain: "mio-amore-bakery.firebaseapp.com",
  projectId: "mio-amore-bakery",
  storageBucket: "mio-amore-bakery.firebasestorage.app",
  messagingSenderId: "838260764506",
  appId: "1:838260764506:web:6a7f0617b7948bf2380d63"
};

// Firebase চালু
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Bakery Products List
const products = [

{
name: "White Bread",
price: 40,
category: "Bread"
},

{
name: "Brown Bread",
price: 45,
category: "Bread"
},

{
name: "Sandwich Bread",
price: 50,
category: "Bread"
},

{
name: "Garlic Bread",
price: 80,
category: "Bread"
},

{
name: "Burger Bun",
price: 35,
category: "Bread"
},

{
name: "Hot Dog Bun",
price: 40,
category: "Bread"
},

{
name: "Pav Bread",
price: 30,
category: "Bread"
},


{
name: "Black Forest Cake",
price: 500,
category: "Cake"
},

{
name: "Chocolate Cake",
price: 550,
category: "Cake"
},

{
name: "Vanilla Cake",
price: 450,
category: "Cake"
},

{
name: "Butterscotch Cake",
price: 550,
category: "Cake"
},

{
name: "Pineapple Cake",
price: 500,
category: "Cake"
},

{
name: "Red Velvet Cake",
price: 700,
category: "Cake"
}

];


// Upload Function
async function uploadProducts(){

for (const product of products){

await addDoc(collection(db,"products"), product);

console.log(product.name + " Added");

}

console.log("All Products Uploaded Successfully");

}

uploadProducts();
