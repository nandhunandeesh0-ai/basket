function changeQty(btn, change) {
  const qty = btn.parentElement.querySelector(".quantity");
  let value = parseInt(qty.innerText);
  value += change;
  if (value < 1) return;
  qty.innerText = value;
  updateTotal();
}

function removeItem(btn) {
  btn.parentElement.remove();
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseInt(item.dataset.price);
    const qty = parseInt(item.querySelector(".quantity").innerText);
    total += price * qty;
  });
  document.getElementById("total").innerText = `₹${total + 30}`;
}

updateTotal();

function updateTotal() {
  let basket = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseInt(item.dataset.price);
    const qty = parseInt(item.querySelector(".quantity").innerText);
    basket += price * qty;
  });

  const delivery = 15;
  const handling = 21;
  const neuCoins = 0.74;
  const wallet = 0.20;

  const totalPayable =
    basket + delivery + handling - neuCoins + wallet;

  document.getElementById("basketValue").innerText = basket;
  document.getElementById("payable").innerText = totalPayable.toFixed(2);
  document.getElementById("total").innerText = `₹${totalPayable.toFixed(2)}`;
}
function updateTotal() {
  let basket = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseInt(item.dataset.price);
    const qty = parseInt(item.querySelector(".quantity").innerText);
    basket += price * qty;
  });

  const FREE_DELIVERY_LIMIT = 150;
  let deliveryCharge = 15;

  // Delivery logic
  if (basket >= FREE_DELIVERY_LIMIT) {
    deliveryCharge = 0;
    document.getElementById("deliveryText").innerText = "FREE";
    document.getElementById("deliveryNote").style.display = "none";
  } else {
    deliveryCharge = 15;
    document.getElementById("deliveryText").innerText = "₹15";
    const remaining = FREE_DELIVERY_LIMIT - basket;
    document.getElementById(
      "deliveryNote"
    ).innerText = `Add items worth ₹${remaining} more to get free delivery`;
    document.getElementById("deliveryNote").style.display = "block";
  }

  const handling = 21;
  const neuCoins = 0.74;
  const wallet = 0.20;

  const totalPayable =
    basket + deliveryCharge + handling - neuCoins + wallet;

  document.getElementById("basketValue").innerText = basket;
  document.getElementById("payable").innerText = totalPayable.toFixed(2);
  document.getElementById("total").innerText = `₹${totalPayable.toFixed(2)}`;
}
