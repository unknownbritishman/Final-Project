console.log(products)
let filteredProducts = [...products]
console.log(filteredProducts)

//SELECTORS
const productsContainer = document.querySelector(".not-sidebar")
const searchForm = document.querySelector(".input-form")
const searchInput = document.querySelector(".search-input")

searchForm.addEventListener("keyup", () => {
    let searchTerm = searchInput.value .toLowerCase();
    console.log(searchTerm)
    filteredProducts = products.filter(product => {
        return product.title.includes(searchTerm)
    })
    displayProducts()
})

// Loop and display each product
function displayProducts() {
    productsContainer.innerHTML = filteredProducts.map(product => {
       return `<article class="product">
                    <img src="${product.image}" alt="" />
                    <footer>
                        <a href="${product.link}">${product.title}</a>
                        <p class="product-price">${product.price}</p>
                    </footer>
                </article>`
    }) .join("")
}
displayProducts()

//Making the button do something
const productName = document.querySelectorAll(".product-name")

productName.forEach(items => {
    items.addEventListener("click", myfunction)
})

function myfunction() {
    console.log("It worked Big Boi")
}

//popup stuff
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const emailInput = document.getElementById('Phonenumber');
    const finish = document.getElementById('finish')
  
    function openPopup() {
        popupOverlay.style.display = 'block';
    }

    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

   finish.addEventListener('click', function() {
 const email = Phonenumber.value;
        console.log(`Number submitted: ${email}`);
        closePopupFunc(); 
   })
    
    openPopup();

    closePopup.addEventListener('click', closePopupFunc);

    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });


});