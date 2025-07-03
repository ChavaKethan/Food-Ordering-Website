// script.js
const menu = document.getElementById('menu');
const cartIcon = document.getElementById('cart-icon');
const cartItems = document.getElementById('cart-items');
const proceedToCheckoutButton = document.getElementById('proceed-to-checkout');
const closeCartButton = document.getElementById('close-cart');

let itemsInCart = [];

// Sample menu items with images and ratings
const menuItems = [
    { name: 'Zafrani Biryani', price: 350, image: 'download.jpg', rating: 4 },
    { name: 'Dum Biryani', price: 200, image: 'OIP (7).jpg', rating: 3.5 },
    { name: 'Bamboo pepper chicken', price: 160, image: 'download (1).jpg', rating: 5 },
    { name: 'Bamboo chicken', price: 250, image: 'araku-famous-bamboo-chicken-biryani-600nw-2158213573.webp', rating: 4.5 },
    { name: 'Green peas Msala', price: 130, image: 'OIP (8).jpg', rating: 4 },
    { name: 'Jilebi', price: 100, image: 'OIP (9).jpg', rating: 3 }
];

// Display menu items
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <p>${item.name} - Rs${item.price}</p>
        <p>Rating: ${item.rating}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    menu.appendChild(menuItem);
});

// Add item to cart
function addToCart(name, price) {
    itemsInCart.push({ name, price });
    updateCart();
    // Show cart when item is added
    cartItems.style.display = 'block';
    // Store updated cart items in localStorage
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
}

// Update cart
function updateCart() {
    cartItems.innerHTML = '';
    let totalAmount = 0;
    let totalItems = 0;

    itemsInCart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${menuItems.find(menuItem => menuItem.name === item.name).image}" alt="${item.name}">
            <p>${item.name} - Rs.${item.price}</p>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        
        totalAmount += item.price;
        totalItems++; // Increment the total items count
    });

    const totalContainer = document.createElement('div');
    totalContainer.classList.add('total-container');
    totalContainer.innerHTML = `Total Items: ${totalItems} | Total Amount: Rs.${totalAmount}`;
    cartItems.appendChild(totalContainer);
}

// Remove item from cart
function removeFromCart(index) {
    itemsInCart.splice(index, 1);
    updateCart();
    // Update localStorage after removing item
    localStorage.setItem('cartItems', JSON.stringify(itemsInCart));
}

// Toggle cart display
cartIcon.addEventListener('click', () => {
    cartItems.style.display = cartItems.style.display === 'block' ? 'none' : 'block';
});

// Close cart
closeCartButton.addEventListener('click', () => {
    cartItems.style.display = 'none';
});
