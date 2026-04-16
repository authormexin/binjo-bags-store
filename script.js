<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BINJO Bags</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
    }

    /* INTRO SCREEN */
    #intro {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: black;
      color: gold;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    /* Hide main content first */
    #main-content {
      display: none;
      padding: 20px;
      text-align: center;
    }

    /* Elephant */
    .elephant {
      font-size: 90px;
      animation: trunkLift 2s ease-in-out;
    }

    /* BINJO text */
    .brand-name {
      font-size: 50px;
      opacity: 0;
      animation: fadeIn 2s forwards;
      animation-delay: 1.5s;
      letter-spacing: 6px;
    }

    /* Motto */
    .motto {
      opacity: 0;
      margin-top: 10px;
      animation: fadeIn 2s forwards;
      animation-delay: 2.5s;
      font-style: italic;
    }

    /* Animations */
    @keyframes trunkLift {
      0% { transform: rotate(0deg); }
      50% { transform: rotate(-15deg); }
      100% { transform: rotate(0deg); }
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }

    /* Simple shop style */
    h2 {
      margin-top: 20px;
    }

    .product {
      border: 1px solid #ddd;
      padding: 10px;
      margin: 10px;
    }
  </style>
</head>

<body>

<!-- INTRO -->
<div id="intro">
  <div class="elephant">🐘</div>
  <h1 class="brand-name">BINJO</h1>
  <p class="motto">Where quality meets affordable prices</p>
</div>

<!-- MAIN WEBSITE -->
<div id="main-content">
  <h1>Welcome to BINJO Bags 👜</h1>
  <p>Shop the best bags in Kenya</p>

  <h2>Products</h2>

  <div class="product">
    <h3>Classic Ladies Bag</h3>
    <p>KES 1,500</p>
    <button onclick="orderWhatsApp('Classic Ladies Bag',1500)">Order on WhatsApp</button>
  </div>

  <div class="product">
    <h3>Travel Backpack</h3>
    <p>KES 2,500</p>
    <button onclick="orderWhatsApp('Travel Backpack',2500)">Order on WhatsApp</button>
  </div>

</div>

<script>
  // Intro animation control
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("intro").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 4000);
  });

  // WhatsApp ordering
  function orderWhatsApp(product, price) {
    let phone = "254792887738";
    let message = `Hello BINJO, I want to order ${product} for KES ${price}`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }
</script>

</body>
</html>
