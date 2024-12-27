let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Function to display cart items and calculate total price
function displayCart() {
  let cartContainer = document.getElementById("cart-container");
  console.log(cartContainer)
  cartContainer.innerHTML = '';
  let totalPrice = 0;

  if (cartItems.length === 0) {
    cartContainer.innerHTML = `<div id="empty"> <i class='bx bx-cart-download'></i><p class="empty">Your cart is empty!</p></div>`;
    document.getElementById("total-price").innerText = "Total Price: $0";
    return;
  }

  cartItems.forEach((item, index) => {
    let cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
              <div class="cart-items-page">   
               <img src="${item.image_url}" alt="${item.model}">
            
              <div class="cartRating">
               <div class="cart-item-details">
                   <h4>${item.model}</h4>
                   <p>Rating:${item.rating} ⭐ </p>
               </div>
               <div class="cart-item-buttons">
                   <button onclick="removeFromCart(${index})">Remove</button>
                   <button onclick="buyNow(${index})">Buy Now</button>
               </div>
               </div>
               </div>
                 <h2>Price:  ${item.price.toFixed(2)}</h2>
               
           `;
    cartContainer.appendChild(cartItemDiv);
    totalPrice += item.price;
  });

  document.getElementById("total-price").innerHTML = `<p>Total Price: $ ${totalPrice.toFixed(2)} </p> <p> (${cartItems.length} items)</p>`
}

// Remove item from the cart
function removeFromCart(index) {


  Swal.fire({
    title: "Are you sure?",
    text: "Want to remove Item from cart",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Remove it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Removed!",
        text: "Item removed from cart",
        icon: "success"
      });
    cartItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    displayCart();
    }
  });
 
}

// Buy Now function
function buyNow(index) {
  sessionStorage.setItem("selectedItem", JSON.stringify(cartItems[index]));
  Swal.fire({
    title: "Do you want to Buy this Item ?",
    showCancelButton: true,
    confirmButtonText: "yes",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
         window.location.href="/payment/pay.html"
    }
  });
 
}

// Proceed to Checkout button
let proceedBtn=document.getElementById("proceed-to-checkout")
console.log(proceedBtn)
proceedBtn.addEventListener("click", function () {
  if (cartItems.length === 0) {
    Swal.fire({
      title: "Your Cart is Empty !",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  } else {
    sessionStorage.setItem("selectedItem", JSON.stringify(cartItems));
    window.location.href = "../payment/pay.html";
  }
});

// Display cart items on page load
displayCart();

