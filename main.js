var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(products) {
            listOfProducts = products;
            addProductsToWebpage();
        });
}

function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    var imageBasePath = "/assets/";

    var mainContainer = document.createElement("div");
    mainContainer.classList = "mainContainer";

    for (var i = 0; i < listOfProducts.length; i++) {
        var product = listOfProducts[i];

        var productContainer = document.createElement("div");
        productContainer.classList = "productContainer";

        var title = document.createElement("h1");
        title.innerText = product.title;

        var description = document.createElement("h4");
        description.innerText = product.description;

        var image = document.createElement("img");
        image.src = imageBasePath + product.image;
        image.classList = "productPic";

        var price = document.createElement("h3");
        price.innerText = product.price;

        var addToCart = document.createElement("button");
        addToCart.classList = "button";

        var cartText = document.createElement("p");
        cartText.classList = "button-text";
        cartText.innerText = "Lägg till i kundvagnen";

        var cartIcon = document.createElement("i");
        cartIcon.id = "cart-icon";
        cartIcon.classList = "fas fa-cart-arrow-down";

        productContainer.appendChild(title);
        productContainer.appendChild(description);
        productContainer.appendChild(image);
        productContainer.appendChild(price);
        productContainer.appendChild(addToCart);
        mainContainer.appendChild(productContainer);
        addToCart.appendChild(cartIcon);
        addToCart.appendChild(cartText);
    }

    var main = document.getElementsByTagName("main")[0];
    main.appendChild(mainContainer);
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.

    // TODO: Remove the console.log and these comments when you've read them.
}
