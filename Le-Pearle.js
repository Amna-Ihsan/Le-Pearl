// Function for handling dropdown visibility
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}

// Initialize heading position on page load
window.onload = () => {
  document.getElementById("heading-div").style.left = "50%";
};

// Animate sections on scroll
let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 500;
      let height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
      }
  })
};

document.addEventListener('DOMContentLoaded', function() {
  updateCart(); // Your function that updates the cart
});

// Use the global cart variable instead of declaring it locally in addToCart function
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Initialize the cart display on page load
document.addEventListener("DOMContentLoaded", updateCart);

function updateCart() {
  const cartNumber = document.getElementById("cart-number");
  

 
  
  if (cartNumber) {
    cartNumber.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  } else {
    console.warn("Element with id 'cart-number' not found.");
  }

  
}


// Function to add product to the cart
function addToCart(event) {
  const button = event.target.closest('.cartBtn');
  const productId = button.getAttribute('data-id');
  const productName = button.getAttribute('data-name');
  const productPrice = parseFloat(button.getAttribute('data-price'));
  const productImage = button.getAttribute('data-img');

  // Check if the product is already in the cart
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex === -1) {
    // Product is not in the cart, so add it
    const newProduct = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1
    };
    cart.push(newProduct);
  } else {
    // Product is already in the cart, so update the quantity
    cart[productIndex].quantity += 1;
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Update the cart display (cart number and total value)
  updateCart();
}

// Function to remove item from the cart
function removeFromCart(productId) {
  // Filter out the item to remove it
  const updatedCart = cart.filter(item => item.id !== productId);

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));

  // Update the cart display (cart number and total value)
  updateCart();
}

// Attach event listeners to all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(".cartBtn");
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});



