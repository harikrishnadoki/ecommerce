const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "headphones.jpeg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 79.99,
    image: "smart_watch.jpeg"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "bluetooth.jpeg"
  },
  {
    id: 4,
    name: "laptop_stand",
    price: 19.99,
    image: "laptop_stand.jpeg"
  }
];

function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const selected = products.find(p => p.id === id);
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...selected, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${selected.name} added to cart.`);
}

window.onload = renderProducts;
