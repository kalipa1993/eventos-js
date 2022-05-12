


//variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");


//cart
let cart = [];

//create products
class Products {
    constructor(id, title, price, imagenes) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imagenes = imagenes;
    }

    toString() {
        return `${this.id}. ${this.title}, ${this.price} CLP`;
    }
}

const productsData = [];
productsData.push(new Products(1, "Azucar", 1790, "/imagenes/azucar.jpg"));
productsData.push(new Products(2, "Pasta", 860, "/imagenes/pasta.jpg"));
productsData.push(new Products(3, "Sopa", 490, "/imagenes/sopa.jpg"));
productsData.push(new Products(4, "Suavizante", 1950, "/imagenes/soft.jpg"));
productsData.push(new Products(5, "Aceite", 2700, "/imagenes/aceite.jpg"));
productsData.push(new Products(6, "Omo", 2290, "/imagenes/omo.jpg"));
productsData.push(new Products(7, "Leche", 1190, "/imagenes/leche.jpg"));
productsData.push(new Products(8, "Mayonesa", 2350, "/imagenes/mayo.jpg"));

//display products
for (const product of productsData) {
    let displayProducts = document.createElement("article");
    displayProducts.className = "product";
    displayProducts.innerHTML = `
    <div class="img-container">
        <img src=${product.imagenes} alt="Producto" class="product-img">
        <button class="bag-btn" data-id=${product.id}>
            <i class="fas fa-shopping-cart"></i>
            Agregar al carrito
        </button>
    </div>
    <h3>${product.title}</h3>
    <h4>${product.price} CLP</h4>
    `
    productsDOM.appendChild(displayProducts);
}

//show cart
cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("transparent-bcg");
    cartDOM.classList.add("show-cart");
});

//hide cart
closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("transparent-bcg");
    cartDOM.classList.remove("show-cart");
});

//add to cart
const bagBtn = [...document.querySelectorAll(".bag-btn")];

bagBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        cartOverlay.classList.add("transparent-bcg");
        cartDOM.classList.add("show-cart");
    });   
}); 

bagBtn.forEach(btn => {
    let id = btn.dataset.id;
    let inCart = cart.find(item => item.id === id);
    if (inCart) {
        btn.innerText = "Agregado";
        btn.disabled = true;
    } else {
        btn.addEventListener("click", e => {
            e.target.innerText = "Agregado";
            e.target.disabled = true;
        });
    }
});