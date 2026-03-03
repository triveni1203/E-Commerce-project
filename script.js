const products = [
{
    id:1,
    name:"Nike Air Max",
    price:120,
    category:"shoes",
    discount:"20% OFF",
    rating:"⭐⭐⭐⭐⭐",
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
    id:2,
    name:"Adidas Sneakers",
    price:95,
    category:"shoes",
    discount:"15% OFF",
    rating:"⭐⭐⭐⭐",
    image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
},
{
    id:3,
    name:"Formal Shirt",
    price:60,
    category:"shirts",
    discount:"10% OFF",
    rating:"⭐⭐⭐⭐",
    image:"https://images.unsplash.com/photo-1520975922203-b9d3a3e9a0c5"
},
{
    id:4,
    name:"Luxury Watch",
    price:250,
    category:"watches",
    discount:"25% OFF",
    rating:"⭐⭐⭐⭐⭐",
    image:"https://images.unsplash.com/photo-1519741497674-611481863552"
}
];

let cart=[];

const productContainer=document.getElementById("products");
const cartItems=document.getElementById("cartItems");
const cartCount=document.getElementById("cartCount");
const cartTotal=document.getElementById("cartTotal");

function displayProducts(list){
    productContainer.innerHTML="";
    list.forEach(product=>{
        productContainer.innerHTML+=`
        <div class="product-card">
            <div class="discount">${product.discount}</div>
            <img src="${product.image}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="rating">${product.rating}</div>
                <p>$${product.price}</p>

                <div class="options">
                    <select>
                        <option>Size S</option>
                        <option>Size M</option>
                        <option>Size L</option>
                    </select>
                    <select>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                    </select>
                    <input type="number" value="1" min="1">
                </div>

                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="buy-btn" onclick="buyNow('${product.name}')">Buy Now</button>
            </div>
        </div>
        `;
    });
}

function filterCategory(category){
    if(category==="all") displayProducts(products);
    else displayProducts(products.filter(p=>p.category===category));
}

function addToCart(id){
    const product=products.find(p=>p.id===id);
    cart.push(product);
    updateCart();
}

function buyNow(name){
    alert("Proceeding to buy " + name);
}

function updateCart(){
    cartItems.innerHTML="";
    let total=0;
    cart.forEach((item,index)=>{
        total+=item.price;
        cartItems.innerHTML+=`
        <div class="cart-item">
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">X</button>
        </div>
        `;
    });
    cartCount.textContent=cart.length;
    cartTotal.textContent=total;
}

function removeItem(index){
    cart.splice(index,1);
    updateCart();
}

function toggleCart(){
    document.getElementById("cartPanel").classList.toggle("active");
}

document.getElementById("searchInput").addEventListener("input",function(){
    const value=this.value.toLowerCase();
    displayProducts(products.filter(p=>p.name.toLowerCase().includes(value)));
});

displayProducts(products);