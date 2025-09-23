// Example: Show a message in the browser console
console.log("Welcome to Knotwaali Website!");

// Example: Pop-up when a product is clicked
const products = document.querySelectorAll(".product-card");
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');


products.forEach(product => {
  product.addEventListener("click", () => {
    alert("Thank you for showing interest! DM us on Instagram to order 🧵✨");
  });
});
mobileMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
});
