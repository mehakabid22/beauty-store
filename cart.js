let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

// 🛒 LOAD CART
function loadCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
        totalElement.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {

        let price = parseFloat(item.price.replace("$", ""));
        total += price;

        let div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(div);
    });

    totalElement.innerText = total;
}

// ❌ REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

// 📌 INITIAL LOAD
loadCart();