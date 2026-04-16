document.addEventListener("DOMContentLoaded", function () {

  const products = window.products || [];

  function displayProducts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>KES ${p.price}</p>
        <button onclick="orderWhatsApp('${p.name}', ${p.price})">
          Order on WhatsApp
        </button>
      `;

      container.appendChild(card);
    });
  }

  window.orderWhatsApp = function(name, price) {
    const phone = "254715388640";
    const message = `Hello, I want to order: ${name} - KES ${price}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  if (document.getElementById("featured-products")) {
    displayProducts("featured-products");
  }

  if (document.getElementById("product-list")) {
    displayProducts("product-list");
  }

});
