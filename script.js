let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 🛒 ADD TO CART FUNCTION
function addToCart(name, price, image) {

    const product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to cart!");
}

// 🔍 SEARCH PRODUCTS
function searchProducts() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let title = product.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// 📞 CONTACT FORM ALERT
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully 💖");
            form.reset();
        });
    }

});function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart 🛒");
}function addToCart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price, image });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart 🛒");
}