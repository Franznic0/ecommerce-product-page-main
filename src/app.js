const burger = document.getElementById("burger");
const closeMobileMenu = document.getElementById("close_menu");
const mobileMenu = document.getElementById("mobile-menu");
const addItem = document.getElementById("add");
const subtractItem = document.getElementById("subtract");
const numberItems = document.querySelector(".quantity_to_add");
const cartMenuBtn = document.getElementById("cart-btn");
const cartMenu = document.getElementById("cart_menu");
const thumbnails = document.querySelectorAll(".column");

// picture selection
    // style selected
    thumbnails.forEach((thumbnailSelected) => {
        thumbnailSelected.addEventListener("click", ()=>{
            // remove style from all
            for (let i = 0 ; i < thumbnails.length; i++) {
                thumbnails[i].classList.remove("selected");
            };
            // add style to selected
            thumbnailSelected.classList.toggle("selected");
        })
    })

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
    addItem.addEventListener("click", () => {
        quantity += 1;
        numberItems.textContent = quantity;
    }
    )

    subtractItem.addEventListener("click", ()=> {

        if (quantity>0) {
            quantity -= 1;
            numberItems.textContent = quantity;
        } else (
            alert("The quantity of items can't be negative!")
        );
    })
};

// open cart
cartMenuBtn.addEventListener("click", ()=> {
    cartMenu.classList.toggle("active");
})

changeQuantity();