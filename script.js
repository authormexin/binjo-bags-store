let products = [
  {
    id: 1,
    name: "Elegant Women Bag",
    price: 1500,
    category: "women",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
  },
  {
    id: 2,
    name: "Travel Backpack",
    price: 2500,
    category: "travel",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
  {
    id: 3,
    name: "Office Leather Bag",
    price: 3000,
    category: "office",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7"
  }
];

let cart = [];

function displayProducts(list) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h4>${p.name}</h4>
        <p>Ksh ${p.price}</p>

        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="buyNow('${p.name}', ${p.price})">
          Order WhatsApp
        </button>
      </div>
    `;
  });
}

displayProducts(products);

function filterProducts(cat) {
  if (cat === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === cat));
  }
}

function addToCart(id) {
  let item = products.find(p => p.id === id);
  cart.push(item);
  alert("👍 Added to cart");
  updateCart();
}

function updateCart() {
  let container = document.getElementById("cart-items");
  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <p>
        ${item.name} - Ksh ${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </p>
    `;
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

function orderViaWhatsApp() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let msg = "Hello BINJO, I want:%0A";

  cart.forEach(i => {
    msg += `${i.name} - Ksh ${i.price}%0A`;
  });

  window.open(`https://wa.me/254792887738?text=${msg}`);
}

function buyNow(name, price) {
  let msg = `Hello BINJO, I want to order ${name} Ksh ${price}`;
  window.open(`https://wa.me/254792887738?text=${msg}`);
}
