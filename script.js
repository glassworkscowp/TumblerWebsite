// Simple cart using localStorage
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + ' added to cart!');
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cart');
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let html = '<h3>Your Cart:</h3><ul>';
        cart.forEach(item => {
            html += '<li>' + item + '</li>';
        });
        html += '</ul>';
        cartDiv.innerHTML = html;
    }
}

// Call displayCart on order page
if (window.location.pathname.includes('order.html')) {
    displayCart();
}