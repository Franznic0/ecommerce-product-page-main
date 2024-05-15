const burger = document.getElementById("burger");
const closeMobileMenu = document.getElementById("close_menu");
const mobileMenu = document.getElementById("mobile-menu");
const addItem = document.getElementById("add");
const subtractItem = document.getElementById("subtract");
const numberItems = document.querySelector(".quantity_to_add");

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

changeQuantity();