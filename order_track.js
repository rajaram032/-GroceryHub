function orderedProduct() {
  let orderedProductList =
    JSON.parse(localStorage.getItem("orderedProductList")) || [];
  let cartCount = orderedProductList.reduce(
    (total, item) => total + item.qty,
    0
  );

  let orderedProductContainer = document.getElementById("ordered_productList");
  orderedProductContainer.innerHTML = "";

  let total = 0;
  let handlingCharge = 0;

  orderedProductList.forEach((item, index) => {
    total += item.price;
    // ordered_productList
    orderedProductContainer.innerHTML += `
    <p id="totalAmount"></p>

    <div class="cart-item row align-items-center">
        <div class="col-md-3 text-center" id="cartImg">
            <img src="Groceries Supermart Images/${item.image}" class="product-img" style="width:100px;" alt="${item.name}">
        </div>
        <div class="col-md-5">
            <h6>${item.name}</h6>
            <p><b>Decription</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, quisquam</p>
        </div>
        <div class="col-md-4">
            <h6>Bill Details</h6>
            <table class="bill-details">
                <tr>
                    <td>Total qty</td>
                    <td>${item.qty}</td>
                </tr>
                <tr>
                    <td><strong>Amount</strong></td>
                    <td><strong>₹${item.price}</strong></td>
                </tr>
            </table>
        </div>
    </div>`;
  });
  handlingCharge += total * 0.12;

  document.getElementById("totalAmount").innerHTML = `<b>Total amount: ₹${(
    total + handlingCharge
  ).toFixed(2)}</b>`;
  //   updateCartCount();
  let buyBtn = document.getElementById("buy_btn");
  if (cartCount !== 0) {
    buyBtn.disabled = false;
  }
}
