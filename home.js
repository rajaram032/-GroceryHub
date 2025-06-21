function load() {
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
  updateCartCount();
}
function orderedProduct() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartCount = cart.reduce((total, item) => total + item.qty, 0);

  localStorage.setItem("orderedProductList", JSON.stringify(cart));
  localStorage.removeItem("cart");
  let orderedProductList =
    JSON.parse(localStorage.getItem("orderedProductList")) || [];

  let payment1 = document.getElementById("payment_total1");
  let payment2 = document.getElementById("payment_total2");
  payment1.innerHTML = "";
  payment2.innerHTML = "";

  let total = 0;
  let handlingCharge = 0;

  orderedProductList.forEach((item, index) => {
    total += item.price;
    // ordered_productList
  });
  handlingCharge += total * 0.12;

  payment1.innerHTML = ` ₹${(total + handlingCharge).toFixed(2)}`;
  payment2.innerHTML = ` ₹${(total + handlingCharge).toFixed(2)}`;
  //   updateCartCount();
  let buyBtn = document.getElementById("buy_btn");
  if (cartCount !== 0) {
    buyBtn.disabled = false;
  }
}
