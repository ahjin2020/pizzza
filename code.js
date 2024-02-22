// script.js
document.addEventListener("DOMContentLoaded"), function() {
    const navLinks = document.querySelectorAll("nav ul li a");
}

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });



let cartItems = [];

function addToCart(item) {
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order!');
        cartItems = [];
        updateCart();
    }

}
function navigateToPage(url) {
    window.location.href = url;
}

 function redirectToOrderPage() {
        // Redirect to the desired HTML page
        window.location.href = "http://127.0.0.1:5500/costomize.html";
    }
