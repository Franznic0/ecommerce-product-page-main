// mobile menu
const burger = document.getElementById("burger");
const closeMobileMenu = document.getElementById("close_menu");
const mobileMenu = document.getElementById("mobile-menu");
// products quantity
const addItem = document.getElementById("add");
const subtractItem = document.getElementById("subtract");
const numberItems = document.querySelector(".quantity_to_add");
// cart
const cartMenuBtn = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart_menu");
const cartBody = document.querySelector(".cart_menu_body");
const emptyCartMessage = document.querySelector(".cart_products");
const deleteFromCart = document.querySelector(".cart-delete-product");
// carousel
const thumbnails = document.querySelectorAll(".column");
const thumbnailsModal = document.querySelectorAll(".thumb-modal");

 // toggle modal open/close
let modal = document.querySelector(".modal-carousel");
function openModal() {
    modal.classList.toggle("modal-open");
}

function closeModal() {
    modal.classList.toggle("modal-open");
    slideIndex = 1;
}

 // slider
let slideIndex = 1;
showSlide(slideIndex);
showSlideModal(slideIndex);

 // next/prev control
function plusSlide(n) {
    showSlide(slideIndex += n);
}

 // next/prev control modal
function plusSlideModal(n) {
    showSlideModal(slideIndex += n);
}

 // thumbnail control
function currentSlide(n) {
    showSlide(slideIndex = n);
}

 // thumbnail control modal
function currentSlideModal(n) {
    showSlideModal(slideIndex = n);
}

 // show slides
function showSlide(n) {
    let slides = document.querySelectorAll(".mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

     // remove style from all thumb
    for (let i = 0 ; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("selected");
    };
     //  toggle thumbnail style
    thumbnails[slideIndex-1].classList.toggle("selected");

    slides[slideIndex-1].style.display = "block";
}

 // show slides modal
function showSlideModal(n) {
    let slidesModal = document.querySelectorAll(".mySlidesModal");

    if (n > slidesModal.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesModal.length;
    }
    for (let i=0; i < slidesModal.length; i++) {
        slidesModal[i].style.display = "none";
    }
    
     // remove style from all thumb
    for (let i = 0 ; i < thumbnailsModal.length; i++) {
        thumbnailsModal[i].classList.remove("selected");
    };
     //  display imagine
    slidesModal[slideIndex-1].style.display = "block";
     //  toggle thumbnail style
    thumbnailsModal[slideIndex-1].classList.add("selected");
}

 // toggle mobile menu
burger.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
});

closeMobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("active");
});

 // change quantity items
let quantity = 0;
const changeQuantity = (q) => {
    quantity += q;
    if (quantity < 0) {
        alert("You can't sell it back!");
    } else {
        numberItems.textContent = quantity;
    }
};
// add quantity to cart
let ordersNumber = 0;
let ordersNumberDisplay = document.querySelector("#products-in-cart");
let ordersNumberIcon = document.querySelector(".cart-quantity");

function addQuantityToCart () {
     // display icon  
    ordersNumberIcon.style.display = "block";
     //  add animation
    ordersNumberIcon.classList.add("active");
    ordersNumberIcon.onanimationend = () => {
        ordersNumberIcon.classList.remove("active");
    }
     // add items to counter
    ordersNumber += 1;
    ordersNumberDisplay.innerHTML = ordersNumber; 
} 

 //  delete element from cart
function deleteCartElement() {
    cartBody.removeChild(cartItem);
    cartBody.appendChild(emptyCartMessage);

     // reset and hide counter
    ordersNumber = 0;
    ordersNumberIcon.style.display = "none"; 
}

 // create product element in cart
const cartItem = document.createElement("div");
function createCartElement() {
    // let quantityInCart = ordersNumberDisplay.innerHTML;
    let quantityInCart = numberItems.innerHTML;
    let finalPrice = quantityInCart * 125;
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <div class="cart-item-wrapper">
            <img class="cart-product-preview" src="../images/image-product-1-thumbnail.jpg" alt="">
            <div class="cart-item-description-wrapper">
                <p class="cart-product-name">
                    Fall Limited Edition Sneaker
                </p>
                <p class="cart-product-quantity">$125.00 x ${quantityInCart} <span class="cart-product-price">$${finalPrice}</span>
                </p>
            </div>
            <div class="cart-delete-product" onclick="deleteCartElement()">
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
            </div>
        </div>
        <button id="checkout" class="button">Checkout</button> 
    `
}

 //  add element from cart
function addCartElement() {
    if (cartBody.contains(emptyCartMessage)) {
        // remove empty cart message
       cartBody.removeChild(emptyCartMessage);
       cartBody.appendChild(cartItem);
    } else {
        cartBody.appendChild(cartItem);
    }
}

 // show products in cart
function showProductInCart() {
    //  create element
    createCartElement();
    // add to cart
    addCartElement();
}

 //  add products to cart
function addProductToCart() {
     // check if there is a quantity to add on cart
    if (numberItems.textContent === "0") {
         // no quantity selected
        alert("Nothing to add here");
        return;
    } else {
         // quantity selected
        addQuantityToCart();
    };

     // visualize products on cart
    showProductInCart();  
}

 // cart toggle
cartMenuBtn.addEventListener("click", ()=> {
    cartMenu.classList.toggle("active");
})