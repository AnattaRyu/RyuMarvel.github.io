var slideIndex = 0;
var mytimer = null;
autoPlay(true);

// Function to move to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to set the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show the slides
function showSlides(n) {
    clearTimeout(mytimer); // Clear the timer to prevent conflicts
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Wrap around the slide index
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // Show the current slide
    slides[slideIndex].style.display = "block"; 

    // Remove "active" class from all dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Highlight the current dot
    dots[slideIndex].className += " active"; 
}

// Function to automatically play the slideshow
function autoPlay(isFirst) {
    if (isFirst) {
        slideIndex = 0; // Start from the first slide
    } else {
        slideIndex++; // Move to the next slide
    }

    // Wrap around the slide index
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;
    }

    showSlides(slideIndex); // Show the current slide
    mytimer = setTimeout(function() { autoPlay(false); }, 2000); // Change slide every 2 seconds
}

// Function to add a product to the cart
function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price.toFixed(2)}!`);
}

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

// Function to handle search
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value;
    alert(`Searching for: ${searchInput}`);
    // Implement search functionality here (e.g., filter products based on search input)
}

// Get the modal
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var loginButton = document.querySelector('a[href="#login"]');

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

function openModal() {
    document.getElementById("loginModal").style.display = "block";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function handleLogin(event) {
    event.preventDefault();
    // Add your login logic here
}

function handleSearch(event) {
    event.preventDefault();
    // Add your search logic here
}

function addToCart(productName, price) {
    // Get existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex > -1) {
        // If it exists, increase the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If it doesn't exist, add it to the cart
        cart.push({ productName, price, quantity: 1 });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(productName + " has been added to your cart at $" + price.toFixed(2));
}

// Automatic image cycling for the featured products
let currentFeaturedIndex = 0;
const featuredProducts = document.querySelectorAll('.featured-product');
const totalFeaturedProducts = featuredProducts.length;

function cycleFeaturedProducts() {
    featuredProducts[currentFeaturedIndex].style.display = 'none'; // Hide current featured product
    currentFeaturedIndex = (currentFeaturedIndex + 1) % totalFeaturedProducts; // Move to next featured product
    featuredProducts[currentFeaturedIndex].style.display = 'block'; // Show next featured product
}

// Initialize featured products display
featuredProducts.forEach((product, index) => {
    product.style.display = index === 0 ? 'block' : 'none'; // Show only the first featured product initially
});

setInterval(cycleFeaturedProducts, 3000); // Change featured product every 3 seconds

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ productName, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " has been added to your cart at $" + price);
}

function displayCart() {
    let cartData = localStorage.getItem('cart');
    // Check if there's data in localStorage
    if (cartData) {
        // Parse the JSON string back into an object
        let cart = JSON.parse(cartData);
  
        // Clear the table content before adding new items
        document.getElementById('cart-items').innerHTML = "";
  
        for (let item of cart) {
            const tableRow = document.createElement('tr');
            const itemName = document.createElement('td');
            const itemQuantity = document.createElement('td');
            const itemPrice = document.createElement('td');
  
            itemName.textContent = item.productName;
            itemQuantity.textContent = item.quantity;
            itemPrice.textContent = `$${item.price}`; // Format price with $ symbol
  
            tableRow.appendChild(itemName);
            tableRow.appendChild(itemQuantity);
            tableRow.appendChild(itemPrice);
  
            document.getElementById('cart-items').appendChild(tableRow);
        }
    } else {
        // Handle the case where there's no cart data in localStorage (optional)
    }
  }
  
  // Call the displayCart function when the cart page loads
  window.onload = displayCart;

// Display cart items when the page loads
document.addEventListener('DOMContentLoaded', displayCart);

let cartData = localStorage.getItem('cart');
// Check if there's data in localStorage
if (cartData) {
    // Parse the JSON string back into an object
    let cart = JSON.parse(cartData);
    // Now you can use the 'cart' object to display items in the table
} else {
    // Handle the case where there's no cart data in localStorage (optional)
}