function load() {
  updateCartCount();
  document.getElementById("fruits&vegetables").style.display = "none";
  document.getElementById("package_food").style.display = "none";
  document.getElementById("dairy&beverages").style.display = "none";
  document.getElementById("fish&meat").style.display = "none";

  document.getElementById("cooking_oil").style.display = "none";
  document.getElementById("ghee_vanaspati").style.display = "none";
  document.getElementById("fresh_vegetables").style.display = "none";
  document.getElementById("fresh_fruits").style.display = "none";
  document.getElementById("chicken_Whole_Cuts").style.display = "none";
  document.getElementById("meat").style.display = "none";
  document.getElementById("biscuits&cookies").style.display = "none";
  document.getElementById("dairy").style.display = "none";
  document.getElementById("beverages").style.display = "none";
}

function showCategory(category) {
  document.getElementById("grocery").style.display = "none";
  document.getElementById("fruits&vegetables").style.display = "none";
  document.getElementById("package_food").style.display = "none";
  document.getElementById("dairy&beverages").style.display = "none";
  document.getElementById("fish&meat").style.display = "none";
  document.getElementById("attaRiceDal").style.display = "none";
  document.getElementById("cooking_oil").style.display = "none";
  document.getElementById("ghee_vanaspati").style.display = "none";
  document.getElementById("fresh_vegetables").style.display = "none";
  document.getElementById("fresh_fruits").style.display = "none";
  document.getElementById("chicken_Whole_Cuts").style.display = "none";
  document.getElementById("meat").style.display = "none";
  document.getElementById("biscuits&cookies").style.display = "none";
  document.getElementById("dairy").style.display = "none";
  document.getElementById("beverages").style.display = "none";

  switch (category) {
    case "grocery":
      document.getElementById("grocery").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "none";
      document.getElementById("attaRiceDal").style.display = "block";

      break;
    case "fruits-vegetables":
      document.getElementById("fruits&vegetables").style.display = "block";
      document.getElementById("fresh_vegetables").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "none";
      break;
    case "package-food":
      document.getElementById("package_food").style.display = "block";
      document.getElementById("biscuits&cookies").style.display = "block";

      break;
    case "dairy-beverages":
      document.getElementById("dairy&beverages").style.display = "block";
      document.getElementById("dairy").style.display = "block";
      break;
    case "fish-meat":
      document.getElementById("fish&meat").style.display = "block";
      document.getElementById("chicken_Whole_Cuts").style.display = "block";
      break;
    case "attaRiceDal":
      document.getElementById("grocery").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "block";
      document.getElementById("cooking_oil").style.display = "none";
      break;
    case "cooking_oil":
      document.getElementById("grocery").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "none";
      document.getElementById("cooking_oil").style.display = "block";
      break;
    case "ghee_vanaspati":
      document.getElementById("grocery").style.display = "block";
      document.getElementById("ghee_vanaspati").style.display = "block";

      break;
    case "fresh_vegetables":
      document.getElementById("fruits&vegetables").style.display = "block";
      document.getElementById("fresh_vegetables").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "none";
      break;
    case "fresh_fruits":
      document.getElementById("fruits&vegetables").style.display = "block";
      document.getElementById("fresh_fruits").style.display = "block";
      document.getElementById("attaRiceDal").style.display = "none";

      break;
    case "chicken_Whole_Cuts":
      document.getElementById("chicken_Whole_Cuts").style.display = "block";
      document.getElementById("fish&meat").style.display = "block";

      break;
    case "meat":
      document.getElementById("meat").style.display = "block";
      document.getElementById("fish&meat").style.display = "block";

      break;
    case "biscuits&cookies":
      document.getElementById("biscuits&cookies").style.display = "block";
      document.getElementById("package_food").style.display = "block";

      break;
    case "dairy":
      document.getElementById("dairy").style.display = "block";
      document.getElementById("dairy&beverages").style.display = "block";

      break;
    case "beverages":
      document.getElementById("beverages").style.display = "block";
      document.getElementById("dairy&beverages").style.display = "block";

      break;
    default:
      console.warn("Unknown category:", category);
  }
}

function addToCart(name, weight, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find(
    (item) => item.name === name && item.weight === weight
  );

  if (existingItem) {
    existingItem.qty += 1;
    existingItem.price = existingItem.qty * existingItem.unitPrice;
  } else {
    cart.push({
      name,
      weight,
      unitPrice: price,
      price: price,
      qty: 1,
      image,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  loadCart();
  showCartToast();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let cartCount = cart.length;
  document.getElementById("cart-badge").innerHTML = cartCount;
  document.getElementById("cart_header").innerHTML = `${cartCount} Items`;
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartCount = cart.reduce((total, item) => total + item.qty, 0);

  let cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";

  let total = 0;
  let handlingCharge = 0;
  cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
      <div class="cart-item row align-items-center mb-3 p-3" style="background-color:#d5efb4; border-radius:10px;">
        <div class="col-md-3 text-center">
          <img src="Groceries Supermart Images/${item.image}" class="product-img" style="width:100px;" alt="${item.name}">
        </div>
        <div class="col-md-5">
          <h6>${item.name}</h6>
          <p class="fw-bold">₹${item.unitPrice} x ${item.qty} = ₹${item.price}</p>
          <div class="d-flex align-items-center gap-2 mb-2">
            <button class="btn btn-sm btn-danger" onclick="decreaseQty(${index})">−</button>
            <span>${item.qty}</span>
            <button class="btn btn-sm btn-success" onclick="increaseQty(${index})">+</button>
          </div>
          <p style="font-size: 0.9rem;">Save For later <span style="color:red;">&#10084;</span></p>
                 </div>
        <div class="col-md-4">
          <h6>Bill Details</h6>
          <table>
            <tr><td>Total qty (${item.qty})</td><td></td></tr>
           
            <tr><td><strong>To Pay</strong></td><td><strong>₹${item.price}</strong></td></tr>
          </table>
        </div>
      </div>
    `;
  });
  handlingCharge = total * 0.12;

  document.getElementById(
    "handling_charges"
  ).innerText = `Handling Charges: ₹${handlingCharge.toFixed(2)}`;
  document.getElementById("cartTotal").innerText = `Total: ₹${(
    total + handlingCharge
  ).toFixed(2)}`;
  updateCartCount();

  let buyBtn = document.getElementById("buy_btn");
  if (cartCount !== 0) {
    buyBtn.disabled = false;
  }
}

function increaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty += 1;
  cart[index].price = cart[index].unitPrice * cart[index].qty;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function decreaseQty(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
    cart[index].price = cart[index].unitPrice * cart[index].qty;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}
function showCartToast() {
  const toastElement = document.getElementById("cartToast");
  const toast = new bootstrap.Toast(toastElement);
  toast.show();
}
function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
  location.reload();
}
