// Function to display cart items
function displayCart() {
    let cartData = localStorage.getItem('cart');
    const cartItemsTable = document.getElementById('cart-items');

    // Clear the current table content
    cartItemsTable.innerHTML = `
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    `;

    let totalPrice = 0; // Initialize total price

    // Check if there's data in localStorage
    if (cartData) {
        // Parse the JSON string back into an object
        let cart = JSON.parse(cartData);

        // Loop through each item in the cart and create a table row
        cart.forEach(item => {
            const row = cartItemsTable.insertRow();
            const cellName = row.insertCell(0);
            const cellQuantity = row.insertCell(1);
            const cellPrice = row.insertCell(2);

            const itemTotalPrice = item.price * item.quantity; // Calculate total price for the item
            totalPrice += itemTotalPrice; // Add to total price

            cellName.textContent = item.productName;
            cellQuantity.textContent = item.quantity;
            cellPrice.textContent = `$${itemTotalPrice.toFixed(2)}`; // Format price with $ symbol
        });
    } else {
        // If the cart is empty, you can display a message
        const row = cartItemsTable.insertRow();
        const cell = row.insertCell(0);
        cell.colSpan = 3; // Span across all columns
        cell.textContent = "Your cart is empty.";
    }

    // Add a row for the total price
    const totalRow = cartItemsTable.insertRow();
    const totalCell = totalRow.insertCell(0);
    totalCell.colSpan = 2; // Span across the first two columns
    totalCell.textContent = "Total Price:";
    const totalPriceCell = totalRow.insertCell(1);
    totalPriceCell.textContent = `$${totalPrice.toFixed(2)}`; // Display total price
}

// Function to clear the cart
document.getElementById('clear-cart').addEventListener('click', function() {
    localStorage.removeItem('cart'); // Clear the cart from localStorage
    displayCart(); // Update the display
});

// Call the displayCart function when the cart page loads
window.onload = displayCart;

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    // Simple validation
    if (username === "user" && password === "web_dev") {
        alert("Login successful!");
        closeModal(); // Close the modal on successful login
    } else {
        errorMsg.style.display = 'block'; // Show error message
    }
});

// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var loginButton = document.getElementById("loginButton");

// When the user clicks the button, open the modal
loginButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}