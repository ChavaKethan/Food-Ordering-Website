// script.js
const cartItems = document.getElementById('cart-items');

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

// Update cart
function updateCart() {
    cartItems.innerHTML = '';
    let totalAmount = 0;
    let totalItems = 0;

    itemsInCart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Find the corresponding menu item to get the image
        const menuItem = menuItems.find(menuItem => menuItem.name === item.name);

        cartItem.innerHTML = `
            <img src="${menuItem.image}" alt="${item.name}" class="cart-item-image">
            <div>
                <p>${item.name} - Rs.${item.price}</p>
                <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);

        totalAmount += item.price;
        totalItems++; // Increment the total items count
    });

    // Calculate delivery charges, CGST, and SGST
    const deliveryCharges = 0; // Free delivery
    const cgst = (totalAmount * 0.09).toFixed(2); // 9% CGST
    const sgst = (totalAmount * 0.09).toFixed(2); // 9% SGST

    // Display total amount with delivery charges and taxes
    const totalContainer = document.createElement('div');
    totalContainer.classList.add('total-container');
    totalContainer.innerHTML = `
        <p>Total Items: ${totalItems}</p>
        <p>Total Amount: Rs.${totalAmount}</p>
        <p>Delivery Charges: Rs.${deliveryCharges}</p>
        <p>CGST (9%): Rs.${cgst}</p>
        <p>SGST (9%): Rs.${sgst}</p>
        <p>Grand Total: Rs.${(parseFloat(totalAmount) + parseFloat(deliveryCharges) + parseFloat(cgst) + parseFloat(sgst)).toFixed(2)}</p>
    `;
    cartItems.appendChild(totalContainer);
}
