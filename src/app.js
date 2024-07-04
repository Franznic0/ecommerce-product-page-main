const burger = document.getElementById("burger");
const closeMobileMenu = document.getElementById("close_menu");
const mobileMenu = document.getElementById("mobile-menu");
const addItem = document.getElementById("add");
const subtractItem = document.getElementById("subtract");
const numberItems = document.querySelector(".quantity_to_add");
const cartMenuBtn = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart_menu");
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
const changeQuantity = () => {

     //  increase quantity
    addItem.addEventListener("click", () => {
        quantity += 1;
        numberItems.textContent = quantity;
    })

     // decrease quantity
    subtractItem.addEventListener("click", ()=> {

        if (quantity > 0) {
            quantity -= 1;
            numberItems.textContent = quantity;
        } else (
            alert("You can't sell it back!")
        );
    })
};

 // add quantity to cart
let ordersNumber = 0;
let ordersNumberDisplay = document.querySelector("#products-in-cart");
let ordersNumberIcon = document.querySelector(".cart-quantity");

function addQuantityToCart () {
    // display icon  
   ordersNumberIcon.style.display = "block";
   ordersNumberIcon.classList.add("active");
   ordersNumberIcon.onanimationend = () => {
    ordersNumberIcon.classList.remove("active");
   }
     // add items 
    ordersNumber += 1;
    ordersNumberDisplay.innerHTML = ordersNumber; 
} 

// cart toggle
cartMenuBtn.addEventListener("click", ()=> {
    cartMenu.classList.toggle("active");
})

changeQuantity();